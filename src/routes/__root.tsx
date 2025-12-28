import { useGSAP } from "@gsap/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import appCss from "../styles.css?url";

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="smooth-wrapper" suppressHydrationWarning={true}>
          <div id="smooth-content" suppressHydrationWarning={true}>
            {children}
          </div>
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
