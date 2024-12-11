import { genderData } from "@/src/app/data/selectInputData";
import { handelSubmitPartOne } from "@/src/util/cartReqPartOne";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import NumberInput from "../../../form/NumberInput";
import PhoneNumber from "../../../form/PhoneNumber";
import SelectInput from "../../../form/SelectInput";
import SubmitBtn from "../../../form/SubmitBtn";
import TextInput from "../../../form/TextInput";

export type FormPartOneProps = {
  setPart: Dispatch<SetStateAction<number>>
};

export default function FormPartOne({ setPart }: FormPartOneProps) {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={(e) => handelSubmitPartOne(e, setPart)}
      className="flex flex-col justify-between gap-8 w-full absolute py-4 px-8">
      <div className="flex flex-col justify-between gap-4 w-full">
        <TextInput name="name" required title="name" maxLength={20} />
        <PhoneNumber name="phone" />
        <SelectInput name="gender" required title="gender" data={genderData} />
        <NumberInput name="age" required title="age" />
      </div>
      <SubmitBtn title="next" />
    </motion.form>
  );
}
