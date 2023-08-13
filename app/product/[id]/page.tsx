"use client";

import {
  LeatherBagData,
  ShoulderBagData,
  StoryPageCarousel,
  TateBagData,
} from "@/components/utils/homeslidesarray";
import ProdDescription from "@/components/views/home/product/ProdDescription";
import ProductCategorySlider from "@/components/views/home/product/ProductCategorySlider";
import ProductImages from "@/components/views/home/product/ProductImages";
import { usePathname } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const CarouselDetailPage = ({ params }: Props) => {
  const mergeArrays = [
    ...TateBagData,
    ...ShoulderBagData,
    ...LeatherBagData,
    ...StoryPageCarousel,
  ];
  const newArray = mergeArrays.filter((item) => item.id === params.id);
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-7/12 lg:w-3/5 xl:w-2/3">
          {/* @ts-ignore */}
          <ProductImages data={newArray} />
        </div>
        <div className="md:w-5/12 lg:w-2/5 xl:1/3">
          {/* @ts-ignore */}
          <ProdDescription data={newArray} />
        </div>
      </div>
      <div className="flex flex-col items-center py-16 md:py-28 text-gray-700">
        <h2 className="text-4xl text-center w-2/3 md:w-7/12">
          It&apos;s Great To Have A Great Bag
        </h2>
        <p className="w-10 h-1 bg-gray-700 mb-10 mt-5 md:mt-3"></p>
        <p className="w-2/3 md:w-7/12 text-center">
          All our bags are stain & water resistant. They look great, wear great
          and will beautifully complement your life & style.
        </p>
      </div>
      {/* @ts-ignore */}
      {pathname.includes("totebag") ? (
        <ProductCategorySlider data={TateBagData} title="Pairs well with" />
      ) : pathname.includes("shoulderbag") ? (
        <ProductCategorySlider data={ShoulderBagData} title="Pairs well with" />
      ) : pathname.includes("leatherbag") ? (
        <ProductCategorySlider data={LeatherBagData} title="Pairs well with" />
      ) : (
        <ProductCategorySlider
          data={StoryPageCarousel}
          title="Pairs well with"
        />
      )}
    </>
  );
};

export default CarouselDetailPage;
