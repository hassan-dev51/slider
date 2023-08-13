import {
  firstThreeCards,
  secondThreeCards,
} from "@/components/utils/blogdetailpagedata";
import BlogPageStyle from "@/components/views/blog/styleguide";

const BlogPage = () => {
  return (
    <div>
      <h2 className="text-5xl text-[#423F3F] text-center mb-3 py-16">
        Style Guides
      </h2>
      <div>
        <div className="pb-[60px] grid md:gap-0 gap-2 max-w- md:grid-cols-2 grid-cols-1 px-[70px] md:mb-7 lg:grid-cols-[1fr,1fr,2fr]">
          {firstThreeCards.map((card, index) => (
            <BlogPageStyle key={index} {...card} />
          ))}
        </div>

        <div className="pb-[70px] grid md:gap-0 gap-2 md:grid-cols-2 grid-cols-1 px-[70px] lg:grid-cols-[2fr,1fr,1fr]">
          {secondThreeCards.map((card, index) => (
            <BlogPageStyle key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
