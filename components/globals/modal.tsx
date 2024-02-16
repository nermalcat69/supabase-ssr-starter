import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/server";

export default function SignupModal({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/dashboard");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/successful");
  };

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-supabase border border-[#70CC93] hover:border-[#95ffbe] duration-75 cursor-pointer rounded-sm">
            <div className="inline-flex items-center py-1.5 px-6 space-x-3 rounded-md text-white">
              <p className="font-semibold">Register</p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Enter your details below :3
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <form
              className="flex w-full flex-1 flex-col justify-center gap-6 text-foreground animate-in"
              action={signIn}
            >
              {searchParams?.message && (
                <p className="mb-4 rounded-md bg-muted p-4 text-center text-muted-foreground dark:bg-muted/50">
                  {searchParams.message}
                </p>
              )}

              <div className="flex flex-col gap-1">
                <Label className="text-md text-[#EDEDED]" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="bg-[#222222] border border-[#343434] placeholder-[#707070] focus:border-[#707070]"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label className="text-md text-[#EDEDED]" htmlFor="password">
                  Password
                </Label>
                <Input
                  className="bg-[#222222] border-[#343434] placeholder-[#707070]"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>

              <Button variant="secondary" className="mt-4">Sign In</Button>

              <Button variant="outline" formAction={signUp}>
                Sign Up
              </Button>
            </form>
          </div>
          <DialogFooter className="sm:justify-center">
            We love supabase ssr :3
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
