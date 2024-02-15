import Link from "next/link";

export function Main() {
  return (
    <section className="flex justify-center h-screen place-items-center">
      <div className="flex flex-col ">
        <div className="flex flex-col text-center">
          <h2 className="text-white text-5xl">
            <span className="font-semibold">Build Auth</span> with{" "}
            <span className="text-[#70CB93] font-semibold">Supabase SSR</span>
          </h2>
          <h2 className="text-white text-5xl mt-2">
            <span className="font-medium">User Sessions</span> at{" "}
            <span className="font-medium">Finest</span>
          </h2>
          <p className="text-[#EDEDED] max-w-2xl mx-auto mt-5">
            Using Supabase SSR Authentication with nextjs with better cookies
            and sessions. Kickstart your project with supabase authentication in
            a matter of seconds :3
          </p>
        </div>
        <div className="flex flex-row space-x-5 mt-10 justify-center">
          <div className="bg-supabase border border-[#70CC93] hover:border-[#95ffbe] duration-75 rounded-sm">
            <div className="inline-flex items-center py-1.5 px-6 space-x-3 rounded-md text-white">
              <Link
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnermalcat69%2Fsupabase-ssr-starter"
                target="_blank"
                className="font-semibold"
              >
                Deploy on Vercel
              </Link>
            </div>
          </div>
          <div className="bg-secondarybg border border-[#3E3E3E] hover:border-[#5c5c5c] duration-75 rounded-sm">
            <div className="inline-flex items-center py-1.5 px-4 space-x-3 rounded-md text-white">
              <Link
                href="https://supabase.com/docs"
                target="_blank"
                className="font-semibold"
              >
                Supabase Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
