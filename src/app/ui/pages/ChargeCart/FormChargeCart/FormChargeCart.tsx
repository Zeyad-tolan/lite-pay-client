/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getExchangeRate } from "@/src/util/getExchangeRate";
import { useEffect, useState } from "react";
import SubmitBtn from "../../../form/SubmitBtn";
import DetailsChargeCart from "../DetailsChargeCart";
import InputDollarChargeCart from "../InputDollarChargeCart";
import InputPoundsChargeCart from "../InputPoundsChargeCart";
import PromoCode from "../PromoCode";
import TypeCharge from "../TypeCharge";

export default function FormChargeCart() {
  const [typeCharge, setTypeCharge] = useState<"insta-pay" | "vf-cash">("insta-pay")
  const [currencyDifference, setCurrencyDifference] = useState<number>(51)
  const [dollarValue, setDollarValue] = useState<number>(1)
  const [poundValue, setPoundValue] = useState<number>(51)
  const [focusInputName, setFocusInputName] = useState<"" | "pound" | "dollar">("")

  useEffect(() => {
    getExchangeRate(setCurrencyDifference)
  }, [])

  // dollarValue * (currencyDifference * 1.08)
  useEffect(() => {
    if (focusInputName == "dollar") {
      setPoundValue(
        typeCharge == "vf-cash" ? dollarValue * (currencyDifference * 1.09) : dollarValue * (currencyDifference * 1.08))
    }
    if (focusInputName == "pound") {
      setDollarValue(poundValue / currencyDifference)
    }
  }, [dollarValue, poundValue, typeCharge])

  return (
    <form
      className="w-full flex flex-col gap-2"
    >
      <InputDollarChargeCart dollarValue={dollarValue} setDollarValue={setDollarValue} setFocusInputName={setFocusInputName} />
      <DetailsChargeCart chargeType={typeCharge} currencyDifference={currencyDifference} />
      <InputPoundsChargeCart poundValue={poundValue} setPoundValue={setPoundValue} setFocusInputName={setFocusInputName} />
      <PromoCode />
      <TypeCharge setValue={setTypeCharge} value={typeCharge} />
      <SubmitBtn title="next" />
    </form>
  );
}
