import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Successful() {
  return (
      <section className="relative flex flex-col min-h-screen justify-center  items-center">
          <h1 className="text-3xl text-white">We've sent you a mail to your email! verify now!</h1>
          <Link href="/"><Button variant="secondary" className="mt-10">Go To Homepage</Button></Link>
    </section>
  );
}
