"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import { CarouselArray, CarouselProps } from "@/interface";

import { iconComponent } from "@/components/utils/homeslidesarray";

const BagsCarousel = ({ data, title, link }: CarouselArray) => {
  return (
    <div className="carousel">
      <div className="flex-between">
        <h2 className="text-2xl">{title}</h2>
        <Link
          href={`${link}`}
          className="relative group inline-block text-decoration-none"
        >
          View All
          <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#5e5c5c] transition-all group-hover:w-full"></span>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1114: {
            slidesPerView: 3,
          },
        }}
        style={{ overflow: "visible" }}
      >
        {data?.map((item: CarouselProps) => (
          <SwiperSlide key={item.id} className="cursor-pointer">
            <Link href={`/product/${item.id}`}>
              <div className="bg-[#f4f4f4] shadow-lg">
                <div className="relative overflow-hidden group">
                  <div className="relative md:w-[420px] md:h-[400px] h-[350px]  group-hover:rotate-2 group-hover:scale-110 group-hover:transition group-hover:ease-in-out group-hover:duration-500 bg-[#f4f4f4]">
                    <Image
                      src={item.image[0].img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 360px) 90vw"
                      className=" object-fill"
                    />
                  </div>
                  <span className="absolute left-5 top-5 bg-[#EF9A9A] md:p-3 p-[6px] text-gray-800 group-hover:opacity-0 md:text-[16px] text-[12px]">
                    Sale 70%
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-4 ml-4 pb-3 text-[#5e5c5c]">
                  <h2 className="md:text-2xl text-[16px] text-gray-700">
                    {item.title}
                  </h2>
                  <p className="flex gap-5 ml-[1px] text-lg">
                    <del
                      className={`text-[#EF9A9A] ${
                        item.disPrice ? "block" : "hidden"
                      } pr-10`}
                    >
                      ${item.disPrice}
                    </del>
                    <span className={`text-gray-800`}>${item.price}</span>
                  </p>
                  <p className={`flex items-center text-[${item.color}]`}>
                    {item.icon?.map((iconName: string, ind: number) => {
                      const IconObj = iconComponent[iconName];
                      if (!IconObj) {
                        return null;
                      }
                      return <IconObj key={ind} />;
                    })}
                    <span
                      className={`ml-4 text-gray-800 text-sm ${
                        item.review ? "block" : "hidden"
                      }`}
                    >
                      {item.review} review
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BagsCarousel;
