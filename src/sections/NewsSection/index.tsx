import { NewsHeader } from "@/sections/NewsSection/components/NewsHeader";
import { NewsCarousel } from "@/sections/NewsSection/components/NewsCarousel";

export const NewsSection = () => {
  return (
    <section id="news-section" className="text-zinc-500 py-10 md:py-[100px]">
      <NewsHeader />
      <NewsCarousel />
    </section>
  );
};