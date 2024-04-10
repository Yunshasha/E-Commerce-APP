import Categories from "@/components/Categories";

import FeaturedProducts from "@/components/FeaturedProducts";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </>
  );
}
