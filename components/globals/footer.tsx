import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  return (
    <header className="fixed bottom-0 z-40 w-full mt-auto">
      <div className="container flex h-32 items-center space-x-4 justify-center sm:space-x-0">
        <span className="text-[#DEDEDE]">
          Powered by{" "}
          <span className="font-bold hover:text-gray-600 cursor-pointer">
            Supabase{" "}
          </span>
          &{" "}
          <span className="font-bold hover:text-gray-600 cursor-pointer">
            Vercel
          </span>
        </span>
      </div>
    </header>
  );
}
