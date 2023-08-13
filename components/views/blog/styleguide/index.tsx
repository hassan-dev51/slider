import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  image: StaticImageData;
  title: string;
  time: string;
};

const BlogPageStyle = ({ id, image, title, time }: Props) => {
  return (
    <div className="group px-2">
      <Link href={`/blog/${id}`}>
        <div className="lg:max-h-full">
          <div className="overflow-hidden relative h-[400px] max-w-[650px] lg:max-h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 360px) 100vw"
              className="mb-2 lg:h-full max-w-full group-hover:scale-110 transition duration-300"
            />
          </div>
          <time dateTime={time} className="text-[#5E5C5C] text-[12px]">
            {time}
          </time>
          <h3 className="text-[15px] text-[#5E5C5C] font-semibold ">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default BlogPageStyle;
