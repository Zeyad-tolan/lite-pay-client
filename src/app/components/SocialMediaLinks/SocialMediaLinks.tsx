import { followUsData } from "@/src/app/data/followUsData";
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="sticky flex md:flex-col flex-row gap-2 items-center md:top-1/2 md:bottom-auto md:-translate-y-1/2 bottom-4 z-20 md:ltr:left-4 md:ltr:translate-x-0 md:rtl:right-4 md:rtl:translate-x-0 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 w-fit h-fit">
      {
        followUsData.map(({ Icon, title, url }, index) => {
          return (
            index !== 0 &&
            <Link
              key={index}
              href={url}
              title={title}
              className="w-11 h-11 rounded-full bg-secondary dark:bg-thirdDark flex justify-center items-center transition-all duration-300"
            >
              <Icon width={22} height={22} className="fill-white dark:fill-primaryDark transition-all duration-300" />
            </Link>
          )
        })
      }
    </div>
  );
}

