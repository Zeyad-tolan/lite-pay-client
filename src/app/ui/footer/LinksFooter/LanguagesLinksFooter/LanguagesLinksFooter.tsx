import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LanguagesLinksFooter() {
  const t = useTranslations("Footer")

  return (
    <div className="flex flex-col gap-4 col-span-1">
      <p className="font-semibold text-primary ">
        {t("languages")}
      </p>
      <div className="flex flex-col gap-2">
        <Link
          href="/ar"
          className="text-white font-arabic"
        >
          عربي
        </Link>
        <Link
          href="/en"
          className="text-white font-english"
        >
          English
        </Link>
      </div>
    </div>
  );
}
