import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export function MessageSection() {
  const revealTl = useRef<gsap.core.Timeline | null>(null);
  const paragraphTl = useRef<gsap.core.Timeline | null>(null);
  const container = useRef(null);

  useGSAP(
    () => {
      const splitFirstMessage = SplitText.create(".first-message", {
        type: "words",
      });

      const splitSecondMessage = SplitText.create(".second-message", {
        type: "words",
      });

      const splitParagraph = SplitText.create(".paragraph", {
        type: "words, lines",
        linesClass: "text-nowrap overflow-hidden",
      });

      gsap.to(splitFirstMessage.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: ".message-content",
          start: "top center",
          end: "30% center",
          scrub: true,
        },
      });

      gsap.to(splitSecondMessage.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: ".second-message",
          start: "top center",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
      });

      revealTl.current = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: ".msg-text-scroll ",
          start: "top 60%",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
      });
      revealTl.current.to(".msg-text-scroll", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      });

      paragraphTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".paragraph",
          start: "top center",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
      });

      paragraphTl.current.from(splitParagraph.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });
    },
    { scope: container }
  );
  return (
    <section
      className=" bg-red-brown text-milk min-h-dvh overflow-hidden flex-center relative z-20"
      ref={container}
    >
      <div className="message-content container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-14">
            <h1 className="first-message 2xl:max-w-4xl md:max-w-2xl max-w-xs text-center  text-[#faeade10] leading-none">
              Stir up your fearless past and
            </h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll rotate-3 2xl:translate-y-5 -translate-y-5 absolute z-10 border-[.5vw] border-red-brown"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown leading-none">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message leading-none 2xl:max-w-7xl md:max-w-4xl max-w-xs text-center  text-[#faeade10]">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p className="paragraph text-center font-paragraph">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
