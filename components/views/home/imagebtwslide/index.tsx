import { bigImage } from "@/components/assets/images";
import Image from "next/image";

const BigImageInCarousel = () => {
  return (
    <div
      className="flex justify-center items-center h-screen w-full bg-cover max-w-full max-h-full bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${bigImage.src})`,
      }}
      // className="bg-[linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))] max-w-full max-h-full"
    >
      {/* <Image src={bigImage} alt="background-image" fill /> */}
      <div className="flex justify-center items-center flex-col gap-10 text-gray-100 tracking-[2px] transition-all text-center">
        <h1 className="md:text-5xl text-[32px] md:px-2 px-4 text-center">
          Ethically Manufactured
        </h1>
        <h2 className="md:text-2xl text-[14px]">
          Suitable for vegans BPA free
        </h2>
        <button className="cursor-pointer h-14 px-10 text-sm bg-white rounded-sm hover:transform hover:scale-105 duration-300 text-[#353839]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BigImageInCarousel;
