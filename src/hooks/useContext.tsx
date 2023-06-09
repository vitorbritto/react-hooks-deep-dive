/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, PropsWithChildren, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;