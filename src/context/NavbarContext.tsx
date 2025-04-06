"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type NavbarContextType = {
  setNavbarBackground: (background: string) => void;
  navbarBackground: string;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [navbarBackground, setNavbarBackground] = useState('');

  return (
    <NavbarContext.Provider value={{ navbarBackground, setNavbarBackground }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}