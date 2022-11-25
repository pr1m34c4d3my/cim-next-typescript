import React from "react";

function PaginationSlider() {
  return (
    <div className="flex gap-10 mt-10 items-center justify-center">
      <div className=" w-[15px] rounded-lg h-[15px]  bg-white border-black border-2 cursor-pointer hover:bg-black hover:scale-150 transition-all"></div>
      <div className=" w-[15px] rounded-lg h-[15px]  bg-white border-black border-2 cursor-pointer hover:bg-black hover:scale-150 transition-all"></div>
      <div className=" w-[15px] rounded-lg h-[15px]  bg-white border-black border-2 cursor-pointer hover:bg-black hover:scale-150 transition-all"></div>
    </div>
  );
}

export default PaginationSlider;
