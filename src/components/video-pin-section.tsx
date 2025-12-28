import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export function VideoPinSection() {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.current.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section md:h-[110vh] h-dvh overflow-hidden md:-translate-y-[15%]! md:mt-0 mt-20">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="/videos/pin-video.mp4"
          className="size-full absolute inset-0 object-cover"
          playsInline
          muted
          loop
          autoPlay
        /> 

        <div className="abs-center md:scale-100 scale-200">
          <img
            src="/images/circle-text.svg"
            alt=""
            className="spin-circle size-[15vw]"
          />
          <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
            <img
              src="/images/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
