import { useMediaQuery, useTheme } from "@mui/material";
import React, { createContext } from "react";

export const providerContext = createContext(null);

const Provider = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <providerContext.Provider value={isMobile}>
      {children}
    </providerContext.Provider>
  );
};

export default Provider;
