import React, { createContext, useState } from 'react';

export const LearnContext = createContext();

export const LearnProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true); // Mark user as logged in
  };
  
  const logout = () => {
    setIsLoggedIn(false); // Mark user as logged out
  };

  return (
    <LearnContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LearnContext.Provider>
  );
};
