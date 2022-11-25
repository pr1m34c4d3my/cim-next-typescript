import Image from "next/image";
import React from "react";

function Slider({ sliderImage }) {
  return (
    <div className="rounded-2xl w-[1600px] h-[600px] overflow-hidden relative">
      <Image
        className="object-fit w-full h-full mr-5"
        src={sliderImage.url}
        alt="slider"
        width={1600}
        height={600}
      />
      <button className=" absolute z-10 bg-white bottom-20 left-48 py-4 px-4 font-semibold rounded-xl">
        Info Selengkapnya
      </button>
    </div>
  );
}

export default Slider;
