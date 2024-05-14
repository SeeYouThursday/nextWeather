'use client';
import { useState, Suspense } from 'react';
import { Input, Button } from '@nextui-org/react';
import FiveDayForeCast from '../FiveDayForecast';
import { useGlobalContext, useGlobalSubmit } from '@/app/providers';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSubmit } = useGlobalSubmit();
  const { city, setCity } = useGlobalContext();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setCity(search.trim());
      console.log(city);
      setSubmit(true);
      try {
        await fetch('/api/search-history/create', {
          method: 'POST',
          body: JSON.stringify({ city: city }),
        });
      } catch (err) {
        console.log(err);
      }
    }

    //TODO: Write code here for if user is signed in once NextAuth is set up
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter City, State, or Zip"
          value={search}
          onChange={handleSearchInput}
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

      {/* {submit ? (
        <Suspense fallback={<div>Loading</div>}>
          <FiveDayForeCast />
        </Suspense>
      ) : null} */}
    </>
  );
};

export default SearchInput;
