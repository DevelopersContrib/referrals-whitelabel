"use client";
import { imageLoader } from "@/helpers/image-helper";
import Image from "next/image";
import React from "react";

const ImageCampaignBg = ({ img }: { img: string }) => {
  if (!img) {
    console.error("Image source is missing");
    return null; // or you can return a placeholder image
  }

  return (
    <Image
      alt="Campaign Background"
      loader={imageLoader}
      src={img}
      loading="lazy"
      fill
      sizes="(max-width: 600px) 100vw, 
             (max-width: 1200px) 50vw, 
             33vw"
      className="w-full max-w-full h-auto object-cover"
    />
  );
};

export default ImageCampaignBg;
