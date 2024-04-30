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
    const newSearch = e.target.value.trim();
    setSearch(newSearch);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setCity(search);
      console.log(city);
      setSubmit(true);
      return;
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
        ></Input>
        <Button type="submit">Submit</Button>
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
