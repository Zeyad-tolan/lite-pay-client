import { useTranslations } from "use-intl";

export default function PromoCode() {
  const t = useTranslations("Cards")
  return (
    <div className="w-full flex items-center py-1 px-3 border border-solid border-[#868685] rounded-lg text-sm">
      <input
        type="text"
        placeholder={t("promo-code")}
        className="bg-transparent flex-1 outline-none"
      />
      <input
        type="button"
        value={t("apply")}
        className="text-[#868685] cursor-pointer" />
    </div>
  );
}
