import React from "react";
import Image from "next/image";
import arrow from "../assets/downArrow.svg";

function CategoryMenu({ categoryTitle }) {
  return (
    <nav className="py-5">
      <ul className="flex flex-row">
        <li className="flex items-center gap-3">
          <a
            href="/"
            className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all"
          >
            {categoryTitle}
          </a>
          <Image className="w-[12px]" src={arrow} alt="arrow" />
        </li>
      </ul>
    </nav>
  );
}

export default CategoryMenu;
