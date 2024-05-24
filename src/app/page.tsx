'use client';
import { Suspense } from 'react';
import Image from 'next/image';
import Hero from './_components/Hero';
import Features from './_components/Features';
import SearchHist from './_components/SearchHist';
import FiveDayForeCast from './_components/FiveDayForecast';
import { useGlobalContext, useErrAndSubmitContext } from '@/app/providers';
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
  // const { error, setError, submitted, setSubmit } = useErrAndSubmitContext();

  return (
    <main className="grid">
      {/* Hero Image 100% screen */}
      <Swiper
        direction="vertical"
        className="h-screen w-screen"
        mousewheel={{ enabled: true, sensitivity: 1 }}
        keyboard={{ enabled: true, onlyInViewport: false }}
        // effect="fade"
        speed={500}
        // https://swiperjs.com/swiper-api#param-eventsTarget
      >
        <SwiperSlide className="backgroundImage bgImageBasic">
          <div className="flex justify-evenly">
            <Hero />
            <SearchHist />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/LGFiveDayLabel.gif"
            height={500}
            width={500}
            quality={100}
            alt="Five Day Forecast"
            className="ms-auto me-auto mt-14 rounded-lg bg-white"
          />
          <FiveDayForeCast city={city} />
        </SwiperSlide>
        <SwiperSlide className="backgroundFeature bgImageBasic">
          <Features />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
