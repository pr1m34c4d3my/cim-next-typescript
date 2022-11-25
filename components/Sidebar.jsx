import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl">
      <Link href="/">
        <p className="text-[#e97c7c] hover:text-[#e70302] transition-all text-[15px]">
          Wisnu
        </p>
      </Link>
    </div>
  );
}

export default Sidebar;
