import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/lib/types/nav";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex items-center gap-4 md:gap-2">
      <Link href="https://www.nermalcat69.com" className="flex space-x-2">
        <span className="text-sm md:text-lg text-gray-100 inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <span className="text-gray-100">/</span>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center font-medium text-[#c8c8c8] text-sm md:text-lg",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
