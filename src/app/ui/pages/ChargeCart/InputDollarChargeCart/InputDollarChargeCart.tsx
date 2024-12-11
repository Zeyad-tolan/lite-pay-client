import srcImage from "@/src/shared/Flag_of_USA.png";
import { handleInputCurrency } from "@/src/util/handelInputCurrency";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export type InputDollarChargeCartProps = {
  dollarValue: number,
  setDollarValue: Dispatch<SetStateAction<number>>,
  setFocusInputName: Dispatch<SetStateAction<"" | "pound" | "dollar">>,
};

export default function InputDollarChargeCart({ dollarValue, setDollarValue, setFocusInputName }: InputDollarChargeCartProps) {
  const t = useTranslations("Cards")

  return (
    <div className="flex flex-col gap-1">
      <p className="font-light">
        {t("exactly")}
      </p>
      <div className="flex gap-2 py-3 px-2 border border-solid border-[#868685] rounded-xl">
        <input
          type="text"
          required
          inputMode="numeric"
          className="outline-none bg-transparent flex-1"
          value={Math.floor(dollarValue)}
          onChange={(e) => setDollarValue(+e.target.value)}
          onFocus={() => setFocusInputName("dollar")}
          onBlur={() => setFocusInputName("")}
          onInput={handleInputCurrency}
        />
        <Image
          src={srcImage}
          alt="dollar usa"
          className="w-6 h-6 rounded-full object-left-top"
        />
        <p>
          {t("usd")}
        </p>
      </div>
      <p className="text-sm font-light">
        {t("minimum")} : 5$
      </p>
    </div>
  );
}
