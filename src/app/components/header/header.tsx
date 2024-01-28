"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// utils
import { getPostNumbers, listNumbers } from "@/utils/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <div role="tablist" className="tabs tabs-bordered ">
          <Link
            className={`tab text-base ${
              pathname.endsWith(`/`) ? "font-bold" : ""
            } `}
            href="/"
            role="tab"
          >
            Main
          </Link>
          {listNumbers.map((id) => {
            const { from, to } = getPostNumbers(id);
            return (
              <Link
                href={`/posts-list/${id}`}
                key={id}
                role="tab"
                className={`tab text-base ${
                  pathname.endsWith(`/${id}`) ? "font-bold" : ""
                } `}
              >
                {`Posts: ${from}-${to}`}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
