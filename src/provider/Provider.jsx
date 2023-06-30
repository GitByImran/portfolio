import { useMediaQuery, useTheme } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

export const providerContext = createContext(null);

const Provider = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const share = { isMobile, isLoading };

  return (
    <providerContext.Provider value={share}>
      {children}
    </providerContext.Provider>
  );
};

export default Provider;
