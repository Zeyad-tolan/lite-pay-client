import { useTranslations } from "next-intl";

export default function AmountInstaPay() {
  const t = useTranslations("TransactionsTable")
  return (
    <div className="flex-1">
      <label htmlFor="amount-instapay" className="font-medium">
        {t("amount")}
      </label>
      <div className="flex gap-1 items-center bg-[#E8E8E8] rounded-xl p-2">
        <input
          type="number"
          name="amount-instapay"
          id="amount-instapay"
          className="flex-1 bg-transparent outline-none"
        />
        <p>
          EGP
        </p>
      </div>
    </div>
  );
}
