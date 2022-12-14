import Image from "next/image";
import React from "react";
import mainLogo from "../assets/logo-utama.png";
import searchLogo from "../assets/search.svg";

function Header() {
  return (
    <div className=" bg-[white]">
      <div className="mx-auto py-5 container w-full flex justify-between items-center ">
        <div className="w-3/12 ">
          <Image className="w-[100%]" src={mainLogo} alt="logo" />
        </div>
        <div className="w-4/12 h-[50px] flex justify-around items-center border rounded-2xl bg-slate-50 text-black ">
          <form className="flex gap-10 focus:border-none ">
            <select
              className="px-4 bg-slate-50 active:border-none"
              name="category"
              id="category"
            >
              <option value="volvo">All Category</option>
            </select>
            <input
              className="bg-slate-50 border-none w-[220px] pl-2 mr-5"
              type="text"
              name="search"
              placeholder="Search"
            />
          </form>
          <Image
            className="w-[20px] cursor-pointer mr-5"
            src={searchLogo}
            alt="search"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
