import { useTranslations } from "next-intl";

export default function UserInstaPay() {
  const t = useTranslations("Cards")
  return (
    <div className="flex-1">
      <label htmlFor="user-instapay" className="font-medium">
        {t("user")}
      </label>
      <div className="flex gap-1 items-center bg-[#E8E8E8] rounded-xl p-2">
        <input
          type="text"
          name="user-instapay"
          id="user-instapay"
          className="flex-1 bg-transparent outline-none"
        />
        <p>
          @instapay
        </p>
      </div>
    </div>
  );
}
