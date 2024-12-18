import HeroSection from "../components/HeroSection";

import heroPic from "../../public/images/hero-image.png";

export default function Home() {
  return (
    // In figma `Page body` -> `main`
    <main className='mx-auto my-0 flex min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] p-4'>
      <HeroSection
        title='Well crafted abstract images'
        description='High quality abstract images for your projects, wallpaper&nbsp;and presentations.'
        imageUrl={heroPic.src}
        alt='An abstract arty image'
      />
    </main>
  );
}
