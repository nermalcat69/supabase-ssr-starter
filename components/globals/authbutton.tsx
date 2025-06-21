import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import SignupModal from "./modal";
import { Button } from "../ui/button";

export async function AuthButton() {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    async function signOut() {
      "use server";

      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      await supabase.auth.signOut();
      return redirect("/");
    }

    return user ? (
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline text-[#EDEDED]">Hey, {user.email}!</span>
        <form action={signOut} className="cursor-pointer">
          <Button variant="outline">Logout</Button>
        </form>
      </div>
    ) : (
      <div><SignupModal searchParams={{
          message: ""
        }} /></div>
    );
  } catch (error) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-red-400 text-sm">Supabase Not Configured</span>
        <Button variant="outline" disabled>
          Login Unavailable
        </Button>
      </div>
    );
  }
}
