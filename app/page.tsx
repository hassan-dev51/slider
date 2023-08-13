import {
  LeatherBagData,
  ShoulderBagData,
  StoryPageCarousel,
  TateBagData,
  collectionData,
} from "@/components/utils/homeslidesarray";
import CollectionCarousel from "@/components/views/home/collectionslide";
import BagsCarousel from "@/components/views/home/homebagscarousel";
import BigImageInCarousel from "@/components/views/home/imagebtwslide";
import LeatherLikeCollection from "@/components/views/story/leatherlikecollectionslide";

export default function Home() {
  return (
    <main>
      <BagsCarousel
        data={TateBagData}
        title="Tote Bags"
        link="https://google.com"
      />
      <BagsCarousel
        data={ShoulderBagData}
        title="Shoulder Bags"
        link="https://google.com"
      />
      <BigImageInCarousel />
      <BagsCarousel
        data={LeatherBagData}
        title="Leather like Bags"
        link="https://google.com"
      />
      <CollectionCarousel data={collectionData} />
      <LeatherLikeCollection
        data={StoryPageCarousel}
        title="New Leather Like Collection"
        link="https://google.com"
      />
    </main>
  );
}
