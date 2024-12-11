"use client";

import { ThreeLinesIcon } from "@/src/app/icons/icons";
import { useState } from "react";

export default function SideBarHeader() {
  const [show, setShow] = useState<boolean>(false)
  console.log(show);

  return (
    <>
      <div
        className="block sm:hidden"
        onClick={() => setShow(true)}>
        <ThreeLinesIcon />
      </div>
    </>
  );
}
