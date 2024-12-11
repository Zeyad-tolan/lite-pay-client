import srcImage from "@/src/shared/Flag_of_Egypt.png";
import { handleInput } from "@/src/util/handelInputNumbers";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export type InputPoundsChargeCartProps = {
  poundValue: number,
  setPoundValue: Dispatch<SetStateAction<number>>,
  setFocusInputName: Dispatch<SetStateAction<"" | "pound" | "dollar">>,
};
export default function InputPoundsChargeCart({ poundValue, setPoundValue, setFocusInputName }: InputPoundsChargeCartProps) {
  const t = useTranslations("Cards")

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 py-3 px-2 border border-solid border-[#868685] rounded-xl">
        <input
          type="number"
          required
          maxLength={10}
          inputMode="numeric"
          className="outline-none bg-transparent flex-1"
          value={Math.ceil(poundValue)}
          onFocus={() => setFocusInputName("pound")}
          onBlur={() => setFocusInputName("")}
          onChange={(e) => setPoundValue(+e.target.value)}
          onInput={handleInput}
        />
        <Image
          src={srcImage}
          alt="dollar usa"
          className="w-6 h-6 rounded-full object-left-top"
        />
        <p>
          {t("egp")}
        </p>
      </div>
      <p className="text-sm font-light">
        {t("max")} : 50000{t("egp")}
      </p>
    </div>
  );
}
