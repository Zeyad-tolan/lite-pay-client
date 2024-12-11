import SubmitBtn from "../../../form/SubmitBtn";
import AmountInstaPay from "../AmountInstaPay";
import UploadImageInstaPay from "../UploadImageInstaPay";
import UserInstaPay from "../UserInstaPay";

export default function FormInstaPay() {
  return (
    <form className="w-full flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <UserInstaPay />
        <AmountInstaPay />
      </div>
      <UploadImageInstaPay />
      <SubmitBtn title="confirm" />
    </form>
  );
}
