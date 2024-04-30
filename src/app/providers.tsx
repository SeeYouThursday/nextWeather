'use client';

import { NextUIProvider } from '@nextui-org/react';
import { createContext, useContext, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

const GlobalContext = createContext<{
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}>({ city: '', setCity: () => {} });

export const useGlobalContext = () => useContext(GlobalContext);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [city, setCity] = useState('');
  return (
    <GlobalContext.Provider value={{ city, setCity }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Search Submission Signal
const SearchSubmitState = createContext<{
  submitted: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}>({ submitted: false, setSubmit: () => {} });

export const useGlobalSubmit = () => useContext(SearchSubmitState);

export function SearchSubmitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [submitted, setSubmit] = useState(false);
  return (
    <SearchSubmitState.Provider value={{ submitted, setSubmit }}>
      {children}
    </SearchSubmitState.Provider>
  );
}
