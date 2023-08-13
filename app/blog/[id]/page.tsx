import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import {
  firstThreeCards,
  secondThreeCards,
} from "@/components/utils/blogdetailpagedata";
import { blogTypes } from "@/interface";

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  return {
    title: params.id,
  };
};

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const mergeArrays = [...firstThreeCards, ...secondThreeCards];
  const filteredData = mergeArrays.filter((item) => item.id == params.id);

  return (
    <div>
      {filteredData.map((item: blogTypes) => (
        <div key={item.id}>
          <div className="relative h-[95vh] max-w-full">
            <Image src={item.image} alt="hero-image" fill  className="
            object-cover"/>
            <div className="absolute left-[10%] lg:left-[20%] bottom-28 flex flex-col gap-y-4">
              <time dateTime={item.time} className="text-[13px] text-[#efefef]">
                {item.time}
              </time>
              <h2 className="md:text-[45px] text-[35px] text-[#efefef] max-w-2xl">
                {item.title}
              </h2>
            </div>
          </div>
          {/* detail paragraph in blog  */}
          <div className="max-w-3xl m-auto text-justify">
            <div className="p-[50px]">
              <h2 className="text-[27px] text-[#423F3F] italic text-center ">
                {item.heading}
              </h2>
              <div className="text-[15px] text-[#5E5C5C] ">
                <p className="mt-[15px]">{item.paragraphOne}</p>
                <p className="my-[15px]">{item.paragraphTwo}</p>
                <div className="my-3 md:my-6 relative h-[400px] max-w-[650px]">
                  <Image
                    src={item.secondImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 360px) 100vw"
                    className="max-w-full"
                  />
                </div>
                <h3 className="text-[18px] font-normal">{item.subheading}</h3>
                <p className="my-[15px]">{item.paragraphThree}</p>
                <p className="my-[15px]">{item.paragraphFour}</p>
                <p className="my-[15px]">{item.paragraphFive}</p>
                <div
                  className={`my-3 md:my-6 relative h-[400px] max-w-[650px] ${
                    item.thirdImage ? "block" : "hidden"
                  }`}
                >
                  <Image
                    src={item.thirdImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="max-w-full"
                  />
                </div>
                <p className="my-[15px]">{item.paragraphSix}</p>
                <p className="my-[15px]">{item.paragraphSeven}</p>
              </div>
              {/* socail media links */}
              <div className="border-b">
                <div className="flex justify-center items-center gap-7 py-9">
                  <Link href={`${item.facebookLink}`}>
                    <FaFacebookF
                      fill="#4A5568"
                      className="w-6 h-6 hover:fill-[#6b7280] "
                    />
                  </Link>
                  <Link href={`${item.pintrestLink}`}>
                    <FaPinterest
                      fill="#4A5568"
                      className="w-6 h-6 hover:fill-[#6b7280]"
                    />
                  </Link>
                  <Link href={`${item.twitterLink}`}>
                    <FaTwitter
                      fill="#4A5568"
                      className="w-6 h-6 hover:fill-[#6b7280]"
                    />
                  </Link>
                </div>
              </div>
              {/* comment form  */}
              <div className="max-w-[530px] my-8 m-auto">
                <h2 className="uppercase text-center text-[21px] text-[#423F3F] font-normal mb-3">
                  Leave a comment
                </h2>

                <form>
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="blog-comment-input"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="blog-comment-input"
                    />
                    <textarea
                      placeholder="Comment"
                      required
                      className="blog-comment-input"
                    />
                    <button
                      type="submit"
                      className="uppercase mt-4 bg-slate-950 p-3 text-slate-50 rounded-md hover:bg-transparent hover:border hover:border-slate-950 hover:transition-all hover:text-slate-950 border"
                    >
                      Post comment
                    </button>
                  </div>
                </form>

                <div className="text-center py-12">
                  <Link
                    href="/blog"
                    className="text-[14px] text-[#423F3F] tracking-wider "
                  >
                    BACK TO STYLE GUIDES
                  </Link>
                </div>
              </div>
              {/* subscribe use letter */}
            </div>
          </div>
          {/* subscrbe news letter */}
          {/* <div
            className="bg-cover bg-no-repeat bg-center h-screen bg-fixed max-w-full relative"
            style={{ backgroundImage: `url(${item.image.src})` }}
          >
            <div className="absolute flex flex-col justify-center items-center w-full h-full gap-y-8 px-3">
              <h3 className="text-[45px] text-[#efefef]">
                Subscribe to our newsletter
              </h3>
              <p className="text-[15px] text-[#efefef]">
                Sign up to our newsletter and we’ll keep you up to date with the
                latest arrivals
              </p>
              <input
                type="email"
                placeholder="Email"
                className="placeholder:text-[#efefef] bg-transparent py-3 md:w-[400px] max-w-[400px] border-b-[2px] outline-none text-[#efefef]"
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default BlogDetailPage;
