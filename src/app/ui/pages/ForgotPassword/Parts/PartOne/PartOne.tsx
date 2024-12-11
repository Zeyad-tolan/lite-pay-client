import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import TextInput from "@/src/app/ui/form/TextInput";
import { handelSubmitPartOneForgotPassword } from "@/src/util/forgotPassword";
import { Dispatch, SetStateAction } from "react";
import HeroForgotPassword from "../../HeroForgotPassword";

export type PartOneProps = {
  setParts: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
};
export default function PartOne({ setParts }: PartOneProps) {
  return (
    <form
      onSubmit={(e) => handelSubmitPartOneForgotPassword(e, setParts)}
      className="md:w-3/6 w-full flex flex-col justify-center items-center gap-8">
      <HeroForgotPassword title="forgot-password" des="forgot-password-des" />
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <TextInput name="email-phone" required title="email-or-phone" />
      </div>
      <SubmitBtn title="next" />
    </form>
  );
}
