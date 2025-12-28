import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export function Test() {
  return (
    <div className="min-h-dvh w-screen testing">
      <Text />
    </div>
  );
}

function Text() {
  useGSAP(() => {
    const splitFirstText = SplitText.create(".split-first-text", {
      type: "chars",
    });

    const splitSecondText = SplitText.create(".split-second-text", {
      type: "chars",
    });

    gsap.from(splitFirstText.chars, {
      yPercent: 500,
      stagger: 0.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".testing", // The parent element of the title
        start: "top 30%",
        end: "bottom 80%",
        markers: true,
        scrub: true,
      },
    });
  });
  return (
    <div className="h-full w-full flex-center">
      <h1 className="text-5xl font-bold split-first-text">First Text</h1>
      {/* <br />
      <h1 className="text-5xl font-bold split-second-text">Second Text</h1> */}
    </div>
  );
}
