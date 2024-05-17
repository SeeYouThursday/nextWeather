'use client';
import { useState, Suspense, useEffect } from 'react';
import { Input, Button } from '@nextui-org/react';
import FiveDayForeCast from '../FiveDayForecast';
import { useGlobalContext, useErrAndSubmitContext } from '@/app/providers';
// import { getAuth } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { error, setError, submitted, setSubmit } = useErrAndSubmitContext();

  const { city, setCity } = useGlobalContext();

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const updateCity = async () => {
      try {
        setError(false);
        await fetch('/api/search-history/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ city: city }),
        });
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };

    // Add a condition to check if the city is not empty and has changed before running the effect
    if (city && city !== '') {
      updateCity();
    }
  }, [city]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    if (search) {
      setCity(search.trim());
      console.log(city);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter City, State, or Zip"
          value={search}
          onChange={handleSearchInput}
          isInvalid={error}
          errorMessage="uh oh, I can't find this"
          classNames={{
            base: 'max-w-full sm:max-w-[90rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500  dark:bg-default-500/20',
          }}
        ></Input>
        {/* <Button type="submit">Submit</Button> */}
      </form>

      <hr></hr>
    </>
  );
};

export default SearchInput;
