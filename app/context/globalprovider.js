"use client";
import React, { createContext, useContext, useState } from "react";
import themes from "./themes";

export const Globalcontext = createContext();
export const Globalupdatecontext = createContext();

export const GlobalProvider = ({ children }) => {

    const [selectedtheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedtheme];

  return (
    <Globalcontext.Provider value={{
        theme,
    }}>
      <Globalupdatecontext.Provider value={{}}>
        
      {children}
      </Globalupdatecontext.Provider>
    </Globalcontext.Provider>
  );
};

export const useGlobalstate  = () => useContext(Globalcontext);
export const useGlobalUpdate  = () => useContext(Globalupdatecontext);
