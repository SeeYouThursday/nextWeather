'use client';
import Image from 'next/image';
import { cn } from '@/app/_lib/cn';
import { HoverEffect } from './ui/card-hover-effect';

const Features = () => {
  return (
    <>
      {/* <Image
        className="h-screen w-full object-cover overflow-hidden relative"
        src="/summerroad.jpeg" //?? change source to change initial b
        width={500}
        height={500}
        sizes="(100vw, 100vh)"
        quality={100}
        alt="road background image"
      /> */}
      <div className="absolute max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default Features;

export const projects = [
  {
    card: 1,
    title: 'Up to Date Weather',
    description:
      'A technology company that builds economic infrastructure for the internet.',
  },
  {
    card: 2,
    title: 'Save Searches for Later!',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    card: 3,
    title: 'Plan out your day with Next Weather',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
  },
];
