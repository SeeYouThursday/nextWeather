import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';

const Hero = () => {
  return (
    <>
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
        <h1 className="font-satisfyregular text-7xl swiper-no-swiping">
          Next Weather
        </h1>
        {/* Subheading "Your..." */}
        <h4 className="font-nunito font-light text-xl ps-20 pt-2 swiper-no-swiping">
          Your Mom&apos;s Weather App
        </h4>
        <Button as={Link} className="m-30 ms-40 my-20" href="/login">
          Get Started
        </Button>
      </div>
    </>
  );
};

export default Hero;
