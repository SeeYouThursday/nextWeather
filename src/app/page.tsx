'use client';
import { Suspense } from 'react';
import Hero from './_components/Hero';
import Features from './_components/Features';
import FiveDayForeCast from './_components/FiveDayForecast';
import { useGlobalContext, useGlobalSubmit } from '@/app/providers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

SwiperCore.use([Mousewheel, Keyboard]); //option to use EffectFade here

const sections = [<Hero key={'hero'} />, <Features key={'features'} />];

//https://stackoverflow.com/questions/66196963/swiper-react-mouse-wheel-scrolling-and-keyboard-control-not-working
export default function Home() {
  const { city } = useGlobalContext();
  const { submitted } = useGlobalSubmit();

  return (
    <main className="grid">
      {/* Hero Image 100% screen */}
      <Swiper
        direction="vertical"
        className="h-screen w-screen backgroundImage"
        mousewheel={{ enabled: true, sensitivity: 1 }}
        keyboard={{ enabled: true, onlyInViewport: false }}
        // effect="fade"
        speed={500}

        // https://swiperjs.com/swiper-api#param-eventsTarget
      >
        {/* {sections.map((section, index) => {
          return <SwiperSlide key={index}>{section}</SwiperSlide>;
        })} */}{' '}
        <SwiperSlide className="backgroundImage">
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Features />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          {submitted ? (
            <Suspense fallback={<div>Loading</div>}>
              <FiveDayForeCast city={city} />
            </Suspense>
          ) : null}
        </SwiperSlide>
        {/* Get Started Btn */}
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
