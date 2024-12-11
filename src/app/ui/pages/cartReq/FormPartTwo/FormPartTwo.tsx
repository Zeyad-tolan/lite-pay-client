import { BackArrowIcon } from "@/src/app/icons/icons";
import { motion } from "framer-motion";
import NumberInput from "../../../form/NumberInput";
import SubmitBtn from "../../../form/SubmitBtn";
import { FormPartOneProps } from "../FormPartOne/FormPartOne";

export default function FormPartTwo({ setPart }: FormPartOneProps) {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-between gap-8 w-full absolute py-4 px-8">
      <div
        onClick={() => setPart(1)}
        className="cursor-pointer"
      >
        <BackArrowIcon />
      </div>
      <NumberInput name="otp" required title="OTP" des="one-time-password" />
      <SubmitBtn title="next" />
    </motion.form>
  );
}
