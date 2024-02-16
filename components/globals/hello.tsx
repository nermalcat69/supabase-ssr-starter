import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

export default async function Hello() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="fixed hidden md:block bottom-20 right-10 z-50  px-5 py-3 items-center justify-center rounded-full bg-secondarybg p-3 font-mono text-xs text-white duration-100 hover:bg-neutral-700 cursor-pointer">
      <div className="hidden lg:block font-bold">Congrats You are finallyy logged in 😻</div>
    </div>
  ) : (
    <div className="fixed hidden md:block bottom-20 right-10 z-50  px-5 py-3 items-center justify-center rounded-full bg-secondarybg p-3 font-mono text-xs text-white duration-100 hover:bg-neutral-700 cursor-pointer">
      <div className="hidden lg:block font-bold">You are Not Logged In :3 </div>
    </div>
  );
}