import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export function HeroSection() {
  // Select the hero container element as a scope for all GSAP animations
  const container = useRef(null);
  //   It is important to have a stable reference for timeline object as every re-render might produce a new reference which would break the animation
  const tl = useRef<gsap.core.Timeline | null>(null);
  const heroTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const splitHeroTitle = SplitText.create(".hero-title", {
        type: "chars",
      });

      tl.current = gsap.timeline({
        delay: 1,
      });

      //Since this is a to animation, we have to set an initial state to element with class split-hero-content
      tl.current
        .to(".hero-content", {
          opacity: 1,
          y: 0,
          ease: "power1.inOut",
        })
        .to(
          ".hero-text-scroll",
          {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
          },
          "-=0.7"
        )
        .from(
          splitHeroTitle.chars,
          {
            yPercent: 200,
            stagger: 0.02,
            ease: "power2.out",
          },
          "-=0.7"
        );

      heroTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "1% top",
          end: "bottom top",
          scrub: true,
          //   markers: true,
        },
      });

      heroTl.current.to(".hero-container", {
        rotate: 7,
        scale: 0.9,
        yPercent: 30,
        ease: "power1.inOut",
      });
    },
    { scope: container }
  );

  return (
    <section className="bg-main-bg" ref={container}>
      <div className="hero-container relative bg-milk w-screen h-dvh overflow-hidden">
        <img
          src="/images/hero-bg.png"
          className="absolute bottom-40 size-full object-cover md:hidden"
        />
        <img
          src="/images/hero-img.png"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto lg:hidden"
        />
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        <div className="hero-content opacity-0 relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-24">
          <div className="overflow-hidden">
            <h1 className="hero-title text-dark-brown 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0 mb-5">
              Freaking Delicious
            </h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll -rotate-3 mb-8 border-[.5vw] border-milk"
          >
            <div className="hero-subtitle bg-mid-brown">
              <h1 className="uppercase 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold text-[#fce1cd] leading-[9vw] tracking-[-.35vw] 2xl:px-[1.2vw] px-3 2xl:pb-[1vw] pb-5 2xl:py-0 py-3">
                Protein + Caffeine{" "}
              </h1>
            </div>
          </div>

          <h2 className="font-paragraph text-dark-brown text-center md:max-w-lg max-w-sm px-5 md:text-lg leading-[115%] mt-3">
            Live life to the fullest  with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button md:mt-16 mt-10 text-dark-brown bg-light-brown uppercase font-bold text-lg rounded-full md:p-5 p-3 md:px-16 px-10">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
