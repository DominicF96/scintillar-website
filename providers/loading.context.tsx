import React, { createContext, useContext } from "react";
import { useTheme } from "next-themes";
import Loader from "@/components/shared/loader/loader.component";

const LoadingContext = createContext<boolean>(true);

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { resolvedTheme } = useTheme();
  const themeLoaded = resolvedTheme !== undefined;

  const isLoaded = themeLoaded;

  return (
    <LoadingContext.Provider value={isLoaded}>
      <Loader isLoaded={isLoaded} />
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
