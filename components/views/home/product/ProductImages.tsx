"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { CarouselProps } from "@/interface";
import { IoIosClose } from "react-icons/io";

type Props = {
  data: CarouselProps[];
};

const ProductImages = ({ data }: Props) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("img1");
  const [activeImageId, setActiveImageId] = useState<null | number>(null);

  //filtering images
  const images = data.flatMap((img) => img.image);

  useEffect(() => {
    if (isOpen && activeImageId) {
      const elem = document.getElementById(`modalimg${activeImageId}`);
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, activeImageId]);

  let hasNext = index < (images?.length as number) - 1;
  let hasPrev = index > 0;

  // on refresh, page should be on top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();

    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    // set selectedImage to the image being selected
    setSelectedImage(targetId);

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // in case you want to slower the speed, use smooth-scroll library
  };

  // This function will return the opacity class according to the selectedImage
  const getOpacityClass = (imgId: string) =>
    selectedImage === imgId ? "opacity-100" : "opacity-70";

  return (
    <>
      {/* fixed image thumbnails to be shown only on medium screens or above */}
      {/* <div className="fixed left-6 top-[45%] transform -translate-y-1/2 hidden md:block"> */}
      <div className="z-10 sticky top-[12rem] ml-6 mb-[8rem] hidden md:block w-fit">
        {images.map((img, ind) => {
          return (
            <Link href={`#img${img.id}`} onClick={handleScroll} key={img.id}>
              <Image
                key={ind}
                src={img.img}
                alt={`Image ${img.id}`}
                width={60}
                height={60}
                className={`rounded-sm my-3 ${getOpacityClass(
                  `img${img.id}`
                )} hover:opacity-100`}
                style={{ boxShadow: "0 0 2px 1px #a7a7a799" }}
              />
            </Link>
          );
        })}
      </div>
      {/* vertical product images to be shown only on medium screens or above */}
      {/* <div className="hidden md:block w-full"> */}
      <div className="z-0 relative -top-[26rem] -mb-[26rem] hidden md:block w-full md:pl-28">
        {images.map((img, ind) => {
          return (
            <Image
              key={ind}
              src={img.img}
              width={800}
              height={800}
              className="w-full cursor-zoom-in"
              id={`img${img.id}`}
              alt={`Image ${img.id}`}
              onClick={() => {
                setIsOpen(true);
                setActiveImageId(img.id);
              }}
            />
          );
        })}

        {/* On product image click, all the images should pop up as modal */}
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75 w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-white text-5xl"
            >
              <IoIosClose />
            </button>
            {/* React does not currently support ::-webkit-scrollbar as an inline style. Therefore using style tag */}
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div className="flex flex-col overflow-y-auto w-[70%] max-h-full scrollbar-hide">
              {images.map((img, ind) => {
                return (
                  <Image
                    key={ind}
                    src={img.img}
                    width={800}
                    height={800}
                    className="w-full"
                    id={`modalimg${img.id}`}
                    alt={`Image ${img.id}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* product images as slider to be shown only on screens less than medium size */}
      <div className="md:hidden flex items-center justify-evenly relative">
        <button
          onClick={() => {
            if (hasPrev) {
              setIndex(index - 1);
            }
          }}
          disabled={!hasPrev}
          className="text-gray-800 disabled:text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoIosArrowBack className="text-3xl md:text-4xl" />
        </button>

        <div className="z-0 w-full">
          <Image
            src={images[index].img}
            alt={`Image ${images[index]}`}
            width={800}
            height={800}
            className="w-full min-w-full"
            id={`img${images[index]}`}
          />
        </div>

        <button
          onClick={() => {
            if (hasNext) {
              setIndex(index + 1);
            }
          }}
          disabled={!hasNext}
          className="text-gray-800 disabled:text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IoIosArrowForward className="text-3xl md:text-4xl" />
        </button>
      </div>
    </>
  );
};

export default ProductImages;
