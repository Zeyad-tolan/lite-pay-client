import { useTranslations } from "next-intl";

export type PasswordInputProps = {
  id: string
  name: string
  type: "password" | "passwordConfirm",
  page?: "forgot-password"
};
export default function PasswordInput({ id, name, type, page }: PasswordInputProps) {
  const t = useTranslations("Auth")

  return (
    <div
      className={`flex flex-col gap-2 ${page == "forgot-password" ? "w-full" : "md:w-3/5 w-full"}`}
    >
      <label
        htmlFor={id}>
        {type == "password" ? t("password") : t("confirm-password")}
      </label>
      <input
        type="password"
        name={name}
        id={id}
        placeholder={type == "password" ? t("password") : t("confirm-password")}
        className="border border-solid border-[#868685] focus:border-primary py-2 px-3 rounded-full outline-none bg-transparent"
      />
    </div>
  );
}
