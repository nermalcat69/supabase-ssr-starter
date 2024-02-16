import Link from "next/link";

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full mt-auto">
      <div className="container flex flex-col items-center justify-center py-4">
        <span className="text-[#DEDEDE]">
          Powered by{" "}
          <span className="font-bold hover:text-[#e9e9e9] cursor-pointer">
            <Link href="https://supabase.com" target="_blank">Supabase{" "}</Link>
          </span>
          &{" "}
          <span className="font-bold hover:text-[#e9e9e9] cursor-pointer">
            <Link href="https://vercel.com" target="_blank">Vercel</Link>
          </span>
        </span>
        <span className="text-[#DEDEDE] font-bold hover:text-[#e9e9e9] mt-3">
            <Link href="https://github.com/nermalcat69" target="_blank">nermalcat69</Link>
        </span>
      </div>
    </footer>
  );
}
