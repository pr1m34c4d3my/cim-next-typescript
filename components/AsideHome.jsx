import React from "react";
import Sidebar from "./Sidebar";

function AsideHome() {
  return (
    <div className="flex flex-col p-7 gap-4 mt-10">
      <h2 className="text-[25px] font-semibold">Produk Paling Laris</h2>
      <Sidebar />
      <button className="bg-[#f5f5f5] w-[250px] mt-10 px-2 py-2 rounded-xl font-bold hover:bg-[#575757] hover:text-white">
        Lihat Produk Lain
      </button>
    </div>
  );
}

export default AsideHome;
