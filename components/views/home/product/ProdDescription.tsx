import React from "react";
import { GrStar } from "react-icons/gr";
import AddToCart from "./AddToCart";
import { FaCheck } from "react-icons/fa";

import { BsBagCheck } from "react-icons/bs";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { CarouselProps } from "@/interface";
import { iconComponent } from "@/components/utils/homeslidesarray";
import ProductDetailFaq from "./ProductDetailFaq";

type Props = {
  data: CarouselProps[];
};

const ProdDescription = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-y-2 my-8 px-6 md:px-16 md:mt-32">
      {data.map((item) => (
        <div key={item.id}>
          <div className="gap-y-0.5">
            <p className="text-sm text-gray-400">
              Fabulous |{"  "}
              <span className="capitalize">
                {item.id.includes("storypage")
                  ? "Mix Category"
                  : item.id.split("").join(" ").slice(0, -1)}
              </span>
            </p>
            <h2 className="text-2xl text-gray-700 -ml-0.5">{item.title}</h2>
          </div>

          <p className="py-1 flex text-lg text-gray-800">
            <del
              className={`text-[#EF9A9A] ${
                item.disPrice ? "block" : "hidden"
              } pr-[71px]`}
            >
              ${item.disPrice}
            </del>
            ${item.price}
          </p>
          <div className="flex gap-x-4 items-center">
            <p
              className={`flex text-lg ${
                item.review ? "text-[#EF9A9A]" : "text-[#334155]"
              }  -ml-0.5`}
            >
              {item.icon?.map((iconName: string, ind: number) => {
                const IconObj = iconComponent[iconName];
                if (!IconObj) {
                  return null;
                }
                return <IconObj key={ind} />;
              })}
            </p>
            <p className={`text-sm ${item.review ? "block" : "hidden"}`}>
              {item.review} review
            </p>
          </div>
        </div>
      ))}

      <AddToCart data={data} />

      <div className="pt-10 flex justify-around text-gray-700">
        <div className="flex flex-col items-center">
          <BsBagCheck className="text-3xl mb-2" />
          <p className="text-sm font-light">Durable</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLeafOutline className="text-3xl mb-2" />
          <p className="text-sm font-light">100% Vegan</p>
        </div>
        <div className="flex flex-col items-center">
          <BsHeart className="text-3xl mb-2" />
          <p className="text-sm font-light text-center">
            Stain
            <br />
            resistant
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IoExtensionPuzzleOutline className="text-3xl mb-2" />
          <p className="text-sm font-light">Cruelty-free</p>
        </div>
      </div>
      {/* faq */}
      <ProductDetailFaq dataArray={data} />
    </div>
  );
};

export default ProdDescription;
