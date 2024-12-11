import { useTranslations } from "next-intl";

export type SubmitBtnProps = {
  title: string
};
export default function SubmitBtn({ title }: SubmitBtnProps) {
  const t = useTranslations("Auth")

  return (
    <button
      type="submit"
      className="w-full bg-primary py-2 px-3 rounded-full font-medium"
    >
      {t(title)}
    </button>
  );
}
