import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Link() {
  return <section>
    <div className="mt-4 flex gap-2 ">
        <Textarea className="h-10" placeholder="Type your message here." />
        <div className={buttonVariants()}>
          <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">
            <text className="font-semibold">Fetch</text>
          </div>
        </div>
    </div>
  </section>
}
