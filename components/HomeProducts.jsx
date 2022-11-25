import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeProducts({
  productTitle,
  homeDescription,
  productPhoto1,
  productSlug,
}) {
  return (
    <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
      <Link href={/product/ + productSlug}>
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <Image
            className="object-cover w-full h-full"
            src={productPhoto1.url}
            alt="rockwoll"
            width={320}
            height={250}
          />
        </div>
      </Link>
      <div className="flex flex-col justify-start mt-5">
        <h2 className="font-bold text-[20px]">{productTitle}</h2>
        <p className="font-light text-[12px]">{homeDescription}</p>
      </div>
      <div className="flex flex-row justify-end">
        <Link href="https://wa.me/6282122920950" target="_blank">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </Link>
      </div>
    </div>
  );
}
