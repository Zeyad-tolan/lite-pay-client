"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SignupAndLogin() {
  const { lang } = useParams()
  const t = useTranslations("Navbar")
  return (
    <div className="hidden sm:flex justify-between items-center gap-3 font-medium">
      <Link
        className="text-primary"
        href={"/" + lang + "/login"}>
        {t("login")}
      </Link>
      <Link
        className="bg-primary text-secondary py-1 px-3 rounded-full"
        href={"/" + lang + "/signup"}>
        {t("signup")}
      </Link>
    </div>
  );
}
