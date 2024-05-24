import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';
import SearchInput from '../_components/Search';
import { useUser } from '@clerk/nextjs';
const Hero = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <>
      <div className="flex flex-col items-center justify-center m-2 swiper-no-swiping">
        {isLoaded && isSignedIn ? <h2>Welcome, {user?.firstName}</h2> : null}
        {/* Heading - Title */}
        <h1 className="font-satisfyregular text-7xl">Next Weather</h1>
        {/* Subheading "Your..." */}
        <h4 className="font-nunito font-light text-xl ps-20 pt-2 mb-4">
          Your Mom&apos;s Weather App
        </h4>
        {/* <Button as={Link} className="m-30 ms-40 my-20" href="/login">
          Get Started
        </Button> */}
        <SearchInput />
      </div>
    </>
  );
};

export default Hero;
