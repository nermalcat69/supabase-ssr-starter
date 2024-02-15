import Link from "next/link";
// import { siteConfig } from "@/lib/config/site";

export function Footer() {
  return (
    <header className="fixed bottom-0 w-full mt-auto">
      <div className="container flex items-center justify-center py-4">
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
