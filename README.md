# 🥤 SPYLT - Awward Winning Landing Page

![Project Banner](/public/images/Final.png)

> A high-performance, immersive landing page for **SPYLT** (Protein + Caffeine), featuring complex scroll-driven animations and a modern tech stack. Built to replicate "Site of the Day" quality experiences.

## ✨ Features

- **🚀 Modern Tech Stack**: Built with [TanStack Start](https://tanstack.com/start) and **React 19**.
- **🎨 Tailwind CSS v4**: Utilizing the latest alpha/beta features of Tailwind's new engine for zero-runtime styles.
- **🎬 Advanced Animations**: Powered by **GSAP** (GreenSock Animation Platform).
  - **ScrollSmoother**: Silky smooth momentum scrolling (with hydration-safe implementation).
  - **ScrollTrigger**: Pinning, scrubbing, and parallax effects.
  - **SplitText**: Character-by-character text reveal animations.
- **📱 Fully Responsive**: Optimized for Mobile, Tablet, and Desktop experiences.
- **⚡ Server-Side Rendering (SSR)**: Leveraging TanStack Start for optimal performance and SEO.

---

## 📸 Visual Showcase

### Hero Section

_Immersive video background with split-text reveal animations._
![Hero Section](/public/images/hero-img.png)

### Flavour Slider

_Horizontal scroll-triggered slider showcasing different product flavors._

<!-- Add a GIF or screenshot of the flavour slider here -->

### Video Pinning

_Scroll-based video pinning with circular mask reveal._

<!-- Add a GIF or screenshot of the video pin section here -->

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Vite-based SSR)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- **Animation**: [GSAP](https://gsap.com/) (Premium Plugins: ScrollSmoother, SplitText, ScrollTrigger)
- **Icons**: Lucide React
- **Deployment**: Netlify

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/awward.git
   cd awward
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

---

## 📂 Project Structure

```
src/
├── components/        # UI Components (Hero, Sections, Navbar)
├── routes/            # TanStack Router file-based routes
│   ├── __root.tsx     # Root layout (GSAP initialization)
│   └── index.tsx      # Main landing page
├── styles.css         # Global styles & Tailwind directives
└── ...
```

## 🧩 Key Implementation Details

### GSAP & SSR Hydration

We solve common SSR hydration mismatches with GSAP's `ScrollSmoother` by using `useGSAP` hooks and `suppressHydrationWarning` on wrapper elements.

```tsx
// Example from src/routes/index.tsx
<div id="smooth-wrapper" suppressHydrationWarning>
  <div id="smooth-content" suppressHydrationWarning>
    {/* Content */}
  </div>
</div>
```

### Tailwind v4

This project uses the new Tailwind v4 Vite plugin for faster builds and simplified configuration.

---

## 📄 License

This project is for educational purposes. All product imagery and branding belong to **SPYLT**.

---

<p align="center">
  Built with ❤️ by Tolani
</p>
