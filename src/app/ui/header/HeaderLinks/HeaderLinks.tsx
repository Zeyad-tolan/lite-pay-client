"use client";

import { headerItems } from "@/src/app/data/headerItems";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HeaderLinks() {
  const t = useTranslations("Navbar")
  const { lang } = useParams()

  return (
    <div className="hidden sm:flex gap-8">
      {
        headerItems.map(({ link, title }, index) => {
          return (
            <Link
              className="text-white font-medium"
              href={"/" + lang + link} key={index}>
              {t(title)}
            </Link>
          )
        })
      }
    </div>
  );
}
