"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import FormPartOne from "../FormPartOne";
import FormPartTwo from "../FormPartTwo";
import TitlePage from "../TitlePage";

export default function Form() {
  const [part, setPart] = useState<number>(1)
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <TitlePage />
      <div className={`relative md:w-1/2 w-11/12 bg-white text-black dark:bg-primaryDark dark:text-white rounded-3xl transition-all duration-1000  ${part == 1 ? "md:ltr:h-[450px] ltr:h-[710px] md:rtl:h-[455px] rtl:h-[505px]" : "md:ltr:h-[230px] ltr:h-[255px] md:rtl:h-[235px] rtl:h-[260px]"}  transition-all duration-300`}>
        <AnimatePresence >
          {
            part == 1 ?
              <FormPartOne key={1} setPart={setPart} /> :
              <FormPartTwo key={2} setPart={setPart} />
          }
        </AnimatePresence>
      </div>
    </div>
  );
}