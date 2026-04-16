import { ProjectsHeader } from "@/sections/ProjectsSection/components/ProjectsHeader";
import { ProjectsCarousel } from "@/sections/ProjectsSection/components/ProjectsCarousel";

export const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="bg-neutral-100 text-zinc-500 py-[60px] md:py-[100px]"
    >
      <ProjectsHeader />
      <ProjectsCarousel />
    </section>
  );
};