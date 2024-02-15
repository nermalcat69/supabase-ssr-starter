import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { siteConfig } from "@/lib/config/site";
// import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/globals/main-nav";

export function Header() {
  return (
    <header className="bg-supabasebg top-0 w-full px-8 pt-2 fixed">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-5">
            <div className="bg-supabase border border-[#70CC93] hover:border-[#95ffbe] duration-75 cursor-pointer rounded-sm">
              <div className="inline-flex items-center py-1.5 px-6 space-x-3 rounded-md text-white">
                <p className="font-semibold">Register</p>
              </div>
            </div>
            <Link
              href="https://github.com/nermalcat69/supabase-ssr-starter"
              target="_blank"
              className="text-gray-100 hover:text-gray-200 text-xl"
            >
              <FaGithub />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
