import srcImage from "@/src/shared/CardFeatures.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OneTextListFeatures from "../OneTextListFeatures";

export default function FeaturesSection() {
  const t = useTranslations("Home")

  return (
    <section className="bg-white dark:bg-primaryDark text-black dark:text-white w-screen md:py-14 py-6">
      <div className="container mx-auto sm:px-0 px-2 flex md:flex-row flex-col-reverse gap-4 justify-between md:items-start items-center">
        <Image
          src={srcImage}
          alt="srcImage"
          className="md:w-1/2 w-10/12"
        />
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-3xl">
            {t("title-two")}
          </p>
          <div>
            <OneTextListFeatures text="item-one" />
            <OneTextListFeatures text="item-two" />
            <OneTextListFeatures text="item-three" />
            <OneTextListFeatures text="item-four" />
            <OneTextListFeatures text="item-five" />
          </div>
        </div>
      </div>
    </section>
  );
}
