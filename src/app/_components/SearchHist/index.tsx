import { Suspense, useEffect, useState } from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';

const SearchHist = () => {
  const [searchHistory, setSearchHistory] = useState<Cities>([]);

  type Cities = {
    cities: string[];
  }[];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/search-history');
        const { rows } = await response.json();
        console.log(rows[0].cities, 'looking for cities');
        setSearchHistory(rows);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Suspense fallback="loading">
        <ListboxWrapper>
          <Listbox
            className="flex flex-wrap flex-col overflow-scroll"
            aria-label="search history"
          >
            {searchHistory[0] &&
              searchHistory[0].cities?.map((item: string, index: number) => (
                <ListboxItem key={index}>{item} Blue</ListboxItem>
              ))}
          </Listbox>
        </ListboxWrapper>
      </Suspense>
    </>
  );
};

export default SearchHist;

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
