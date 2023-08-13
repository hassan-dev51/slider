"use client";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CarouselProps } from "@/interface";

type Props = {
  data: CarouselProps[];
};

// for the timebeing, i'm using this sizes object as mock data
let sizes = {
  compact: {
    stock: 14,
  },
  midi: {
    stock: 10,
  },
  grande: {
    stock: 5,
  },
};
let maxStock = Math.max(...Object.values(sizes).map((size) => size.stock));

const AddToCart = ({ data }: Props) => {
  const [selectedSize, setSelectedSize] = useState<
    "compact" | "midi" | "grande"
  >("compact");
  let availableStock = sizes[selectedSize].stock;
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartButtonText, setCartButtonText] = useState("ADD TO CART");

  const getSelectedClass = (size: string) =>
    selectedSize === size && "border-b-2 border-gray-700 pb-0.5";

  const getCartButtonClass = () =>
    cartButtonText === "ADD TO CART"
      ? "bg-white text-gray-700"
      : "bg-black text-white opacity-70";

  const addToCart = () => {
    setCartButtonText("ADDING");
    setTimeout(() => {
      setIsModalOpen(true);
      setCartButtonText("ADD TO CART");
    }, 2000);
  };

  useEffect(() => {
    count > availableStock && setCount(availableStock);
  }, [selectedSize, availableStock, count]);
  return (
    <>
      <p className="text-sm text-gray-700 pt-7 font-medium">Size</p>
      <div className="flex gap-x-10 text-gray-500 text-sm">
        <p
          className={`${getSelectedClass("compact")} cursor-pointer`}
          onClick={() => setSelectedSize("compact")}
        >
          COMPACT
        </p>
        <p
          className={`${getSelectedClass("midi")} cursor-pointer`}
          onClick={() => setSelectedSize("midi")}
        >
          MIDI
        </p>
        <p
          className={`${getSelectedClass("grande")} cursor-pointer`}
          onClick={() => setSelectedSize("grande")}
        >
          GRANDE
        </p>
      </div>
      <div className="pt-5 pb-8">
        <p className="text-sm pb-1">{availableStock} in stock</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
          <div
            className="bg-[#EF9A9A] h-1.5 rounded-full"
            style={{
              width: `${(availableStock / (maxStock + 5)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="pt-5 flex gap-x-3 pb-3 md:pb-6">
        <button className="md:w-full cursor-auto px-5 py-3 flex md:justify-between items-center gap-x-6 border border-gray-400 text-gray-700 rounded-md">
          <AiOutlineMinus
            className="cursor-pointer min-w-fit mx-2"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          />
          <p>{count}</p>
          <AiOutlinePlus
            className="cursor-pointer min-w-fit mx-2"
            onClick={() => {
              if (count < availableStock) {
                setCount(count + 1);
              }
            }}
          />
        </button>
        <button
          className={`md:hidden w-full border border-black text-sm  rounded-md hover:bg-black hover:text-white ${getCartButtonClass()}`}
          onClick={() => addToCart()}
        >
          {cartButtonText}
        </button>
      </div>

      <div className="hidden md:flex gap-x-3 pb-2">
        <button
          className={`w-full px-5 py-4 border border-black text-sm rounded-md hover:bg-black hover:text-white ${getCartButtonClass()}`}
          onClick={() => addToCart()}
        >
          {cartButtonText}
        </button>
      </div>

      <button
        className={`w-full text-sm px-5 py-4 border border-black bg-black text-white rounded-md hover:bg-white hover:text-gray-700 ${
          cartButtonText == "ADDING" && "opacity-70"
        }`}
      >
        BUY IT NOW
      </button>

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 flex items-start justify-end md:p-4 bg-black bg-opacity-50 w-full h-full"
          style={{ zIndex: 9999 }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              onClick={(e) => e.stopPropagation()}
              className="m-4 p-6 bg-[#423F3F] rounded text-white relative w-full md:w-fit"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-white text-5xl"
              >
                <IoIosClose />
              </button>
              <div className="flex items-center">
                <MdOutlineDone className="text-2xl" />
                <p className="px-2">Added to cart</p>
              </div>
              <div className="flex items-center pt-5">
                <Image
                  src={item.image[0].img}
                  alt="selectedProduct"
                  width={80}
                  height={80}
                />
                <div className="space-y-1 pl-5">
                  <p className="text-lg">{item.title}</p>
                  <p className="flex">
                    <del
                      className={`text-gray-300 ${
                        item.disPrice ? "block" : "hidden"
                      } pr-3`}
                    >
                      ${item.disPrice}
                    </del>
                    ${item.price}
                  </p>
                  <p className="text-gray-300">
                    Size: {selectedSize.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 pt-8">
                <button className="text-sm px-10 py-4 border border-black bg-white text-black rounded-sm hover:bg-black hover:text-white">
                  VIEW CART
                </button>
                <button className="text-sm px-10 py-4 border border-black bg-black text-white rounded-sm hover:bg-white hover:text-gray-700">
                  CHECKOUT
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddToCart;
