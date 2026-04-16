import headerVideo from "@/assets/header.mp4";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        src={headerVideo}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="absolute h-full w-full object-cover"
        style={{ objectPosition: "center 90%" }}
      />
    </div>
  );
};