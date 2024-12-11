"use client";

/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { useState } from "react";


export default function UploadImageInstaPay() {
  const t = useTranslations("Cards");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string); // حفظ الصورة كـ Data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="bg-[#E8E8E8] border border-solid border-[#7b7b7b] rounded-md w-fit mx-auto py-2 px-2 flex flex-col gap-1 cursor-pointer"
      onClick={() => document.getElementById("fileInput")?.click()} // محاكاة النقر على الإدخال
    >
      <p className="">
        {
          selectedImage ?
            t("msgInputImageSecond") :
            t("msgInputImage")
        }
      </p>
      <div className="w-2/3 h-28 rounded-md bg-[#c5c5c5] mx-auto flex items-center justify-center overflow-hidden">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          t("no-selected")
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}
