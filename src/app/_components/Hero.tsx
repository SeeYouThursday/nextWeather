import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';
import SearchInput from '../_components/Search';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-2">
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
        <SearchInput />
      </div>
    </>
  );
};

export default Hero;
