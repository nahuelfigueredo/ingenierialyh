const headerVideo = "https://res.cloudinary.com/djos2a5dj/video/upload/v1772394456/header_video-converter.com_1_xqao3v.mp4";

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