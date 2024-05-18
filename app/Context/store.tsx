"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface IContextProps {
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  sidebarStatus: string;
  setSidebarStatus: Dispatch<SetStateAction<string>>;
  basketItems: string[] | null;
  setBasketItems: Dispatch<SetStateAction<string[] | null>>;
  favoriteItems: string[] | null;
  setFavoriteItems: Dispatch<SetStateAction<string[] | null>>;
}

const GlobalContext = createContext<IContextProps>({
  isMobile: false,
  setIsMobile: (): boolean => false,
  sidebarStatus: "" /* Basket, MobileMenu, Favorite, Search, Auth */,
  setSidebarStatus: (): string => "",
  basketItems: null,
  setBasketItems: (): void => {},
  favoriteItems: null,
  setFavoriteItems: (): void => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [sidebarStatus, setSidebarStatus] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [basketItems, setBasketItems] = useState<string[] | null>(() => {
    const localStorageBasket = typeof window !== "undefined" && localStorage.getItem("basketItems");
    return localStorageBasket ? JSON.parse(localStorageBasket) : null;
  });
  const [favoriteItems, setFavoriteItems] = useState<string[] | null>(() => {
    const localStorageFavorite = typeof window !== "undefined" && localStorage.getItem("favoriteItems");
    return localStorageFavorite ? JSON.parse(localStorageFavorite) : null;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <body className={sidebarStatus ? "overflow-hidden" : ""}>
      <GlobalContext.Provider
        value={{
          isMobile,
          setIsMobile,
          sidebarStatus,
          setSidebarStatus,
          basketItems,
          setBasketItems,
          favoriteItems,
          setFavoriteItems,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </body>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
