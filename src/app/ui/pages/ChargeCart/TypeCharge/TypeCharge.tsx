import { RadioActiveIcon, RadioInactiveIcon, VodafoneCashIcon } from "@/src/app/icons/icons";
import srcImage from "@/src/shared/insta-pay-image.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export type TypeChargeProps = {
  setValue: Dispatch<SetStateAction<"insta-pay" | "vf-cash">>
  value: "insta-pay" | "vf-cash"
};

export default function TypeCharge({ value, setValue }: TypeChargeProps) {
  return (
    <div className="flex flex-col pt-6">
      <div className="flex justify-between items-center" onClick={() => setValue("vf-cash")}>
        {value == "vf-cash" ? <RadioActiveIcon /> : <RadioInactiveIcon />}
        <div className="flex-1 flex justify-center">
          <VodafoneCashIcon />
        </div>
      </div>
      <div className="flex justify-between items-center" onClick={() => setValue("insta-pay")}>
        {value == "insta-pay" ? <RadioActiveIcon /> : <RadioInactiveIcon />}
        <div className="flex-1 flex justify-center">
          <Image
            src={srcImage}
            alt="insta-pay"
            className="h-24 w-fit"
          />
        </div>
      </div>
    </div>
  );
}
