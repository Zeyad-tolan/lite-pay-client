import PasswordInput from "@/src/app/ui/form/PasswordInput";
import SubmitBtn from "@/src/app/ui/form/SubmitBtn";
import { handelSubmitPartFourForgotPassword } from "@/src/util/forgotPassword";
import HeroForgotPassword from "../../HeroForgotPassword";
import { PartOneProps } from "../PartOne/PartOne";

export default function PartFour({ }: PartOneProps) {
  return (
    <form
      onSubmit={(e) => handelSubmitPartFourForgotPassword(e)}
      className="md:w-3/6 w-full flex flex-col justify-center items-center gap-14">
      <HeroForgotPassword title="forgot-password-part-four" des="forgot-password-part-four-des" />
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <PasswordInput page="forgot-password" id="password" name="password" type="password" />
        <PasswordInput page="forgot-password" id="password-confirm" name="passwordConfirm" type="passwordConfirm" />
      </div>
      <SubmitBtn title="next" />
    </form>
  );
}
