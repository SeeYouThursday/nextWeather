'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, EffectFade, EffectCube } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

SwiperCore.use([Mousewheel, Keyboard, EffectFade]);

//https://stackoverflow.com/questions/66196963/swiper-react-mouse-wheel-scrolling-and-keyboard-control-not-working
export default function Home() {
  return (
    <main className="grid">
      {/* Hero Image 100% screen */}
      <Swiper
        direction="vertical"
        className="h-screen w-screen"
        mousewheel={{ enabled: true, sensitivity: 1 }}
        keyboard={{ enabled: true, onlyInViewport: false }}
        effect="fade"
        speed={500}
        // https://swiperjs.com/swiper-api#param-eventsTarget
      >
        <SwiperSlide>
          <Image
            className="h-screen w-full object-cover overflow-hidden relative"
            src="/road2.jpeg" //?? change source to change initial b
            width={500}
            height={500}
            sizes="(100vw, 100vh)"
            quality={100}
            alt="road background image"
          />
          <div
            className="absolute top-20 xl:top-30
           left-20 right-20 bottom-0 flex flex-col items-center"
          >
            {/* Heading - Title */}
            <h1 className="font-satisfyregular text-7xl">Next Weather</h1>
            {/* Subheading "Your..." */}
            <h4 className="font-nunito font-light text-xl ps-20 pt-2 backdrop-contrast-50">
              Your Mom&apos;s Weather App
            </h4>
          </div>
        </SwiperSlide>
        {/* Features */}
        <SwiperSlide>
          <Image
            className="h-screen w-full object-cover overflow-hidden relative"
            src="/summerroad.jpeg" //?? change source to change initial b
            width={500}
            height={500}
            sizes="(100vw, 100vh)"
            quality={100}
            alt="road background image"
          />
          <div className="absolute"></div>
        </SwiperSlide>

        <section></section>
        {/* Get Start Btn */}
        {/* Search Bar --- sign up to save your searches */}
        {/*// Login/Signup Modal? with refresh to actual route (.)  */}
        {/* On Login Show Dashboard? or Show Search Page? */}
        {/* Search/Results Page */}
        {/* On showing Results use a save icon that changes based on state (optimistic) --//! Add functionality after DB connection*/}
        {/* //TODO To be completed after hooking up DB */}
        {/*//TODO: Dashboard //*/}
        {/*slots */}
        {/* --- Saved Searches */}
        {/* Search bar */}
      </Swiper>
    </main>
  );
}
