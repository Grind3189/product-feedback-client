import { createContext, useEffect, useState } from "react";

interface WidthContextProviderProp {
  children: React.ReactNode;
}

interface CreateContextType {
    width: number
}

export const WidthContext = createContext({} as CreateContextType);

const WidthContextProvider = ({ children }: WidthContextProviderProp) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);
  return (
    <WidthContext.Provider value={{width}}>{children}</WidthContext.Provider>
  );
};

export default WidthContextProvider;
