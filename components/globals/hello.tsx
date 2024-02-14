export function Hello() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed hidden md:block bottom-20 right-10 z-50  px-5 py-3 items-center justify-center rounded-full bg-secondarybg p-3 font-mono text-xs text-white duration-100 hover:bg-neutral-700 cursor-pointer">
      <div className="hidden lg:block font-bold">Hello ^_^ </div>
    </div>
  );
}
