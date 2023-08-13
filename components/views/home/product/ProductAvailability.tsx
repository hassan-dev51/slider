"use client";
import React from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const ProductAvailability = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="text-sm pt-4 text-[#EF9A9A] border-b-2 border-[#EF9A9A] pb-1 max-w-fit cursor-pointer"
      >
        Check availability at other stores
      </div>

      {/* when "check availability" button is clicked then this popup modal will show */}
      {isModalOpen && (
        // removes modal when user clicks anywhere outside of div
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-20 w-full h-full"
          style={{ zIndex: 9999 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="m-0 px-6 py-14 rounded text-gray-700 relative w-full md:w-[35%] lg:w-[30%] h-screen bg-white bg-opacity-50 backdrop-blur-md"
          >
            {/* Cross button to remove modal */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-700 text-5xl"
            >
              <IoIosClose />
            </button>
            <div>
              <h1 className="text-2xl">City - All Black</h1>
              <p className="text-sm">COMPACT</p>
              <div className="w-full border-b border-black my-3"></div>

              <div className="border-b border-black py-5">
                <h2 className="text-sm font-semibold">Ottawa Warehouse</h2>
                <div className="flex items-center gap-x-2 my-2">
                  <FaCheck className="text-sm text-green-700 mt-1" />

                  <p className="text-xs font-normal">
                    Pickup available, usually ready in 24 hours
                  </p>
                </div>

                <div className="text-sm space-y-1">
                  <p>123 Fake Street</p>
                  <p>Ottawa ON K2P 2L8</p>
                  <p>Canada</p>
                </div>
              </div>
              <div className="border-b border-black py-5">
                <h2 className="text-sm font-semibold">Toronto Warehouse</h2>
                <div className="flex items-center gap-x-2 my-2">
                  <FaCheck className="text-sm text-green-700 mt-1" />

                  <p className="text-xs font-normal">
                    Pickup available, usually ready in 24 hours
                  </p>
                </div>

                <div className="text-sm space-y-1">
                  <p>1 Woodycrest Avenue</p>
                  <p>Toronto ON M4J 3A5</p>
                  <p>Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* popup modal ends here  */}
    </>
  );
};
export default ProductAvailability;
