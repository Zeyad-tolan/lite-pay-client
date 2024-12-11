import { useTranslations } from "next-intl";

type DetailsChargeCartProps = {
  chargeType: "insta-pay" | "vf-cash",
  currencyDifference: number
};

export default function DetailsChargeCart({ chargeType, currencyDifference }: DetailsChargeCartProps) {
  const t = useTranslations("Cards")
  return (
    <div className="w-full flex-col gap-1">
      <div className="flex justify-between items-center">
        <p className="font-medium">
          {
            chargeType == "vf-cash" ?
              "1%" :
              "0%"
          }
        </p>
        <p className="font-light">
          {t(chargeType == "vf-cash" ? "vf-cash" : "instapay")}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium">
          5.00 {t("usd")}
        </p>
        <p className="font-light">
          {t("card-fee")}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium">
          {currencyDifference} + 8%
        </p>
        <p className="font-light">
          {t("exchange-rate")}
        </p>
      </div>
    </div>
  );
}
