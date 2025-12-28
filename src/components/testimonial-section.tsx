import { cards } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function TestimonialSection() {
  const vdRef = useRef<(HTMLVideoElement | null)[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pinTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.current
      .to(".testimonials-section .first-title", {
        xPercent: 70,
      })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    pinTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.current.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  const handlePlay = (index: number) => {
    const video = vdRef.current[index];
    video?.play();
  };

  const handlePause = (index: number) => {
    const video = vdRef.current[index];
    video?.pause();
  };

  return (
    <section className="testimonials-section bg-milk relative w-full h-[120dvh]">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
          What's
        </h1>
        <h1 className="text-light-brown sec-title uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
          Everyone
        </h1>
        <h1 className="text-black third-title uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">
          Talking
        </h1>
      </div>

      <div className="pin-box flex items-center justify-center w-full ps-52 absolute 2xl:bottom-32 bottom-[50vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card md:w-96 w-80 flex-none md:rounded-[2vw] rounded-3xl -ms-44 overflow-hidden 2xl:relative absolute border-[.5vw] border-milk ${card.translation} ${card.rotation} `}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => {
                vdRef.current[index] = el;
              }}
              //   ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
