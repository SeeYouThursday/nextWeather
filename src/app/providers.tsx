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

// Create a context
const ErrorAndSubmitContext = createContext<{
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  submitted: boolean; // Add the missing property 'submitted'
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>; // Add the missing property 'setSubmit'
}>({ error: false, setError: () => {}, submitted: false, setSubmit: () => {} });

export const useErrAndSubmitContext = () => useContext(ErrorAndSubmitContext);

export function ErrorAndSubmitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState(false);
  const [submitted, setSubmit] = useState(false); // assuming you want to use state for 'submitted'

  // Use the .Provider property on the context object
  return (
    <ErrorAndSubmitContext.Provider
      value={{ error, setError, submitted, setSubmit }}
    >
      {children}
    </ErrorAndSubmitContext.Provider>
  );
}
