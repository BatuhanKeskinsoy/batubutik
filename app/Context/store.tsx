"use client";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface IContextProps {
  user: userAuthTypes | null;
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  sidebarStatus: string;
  setSidebarStatus: Dispatch<SetStateAction<string>>;
  basketItems: basketItemTypes[] | null;
  setBasketItems: Dispatch<SetStateAction<basketItemTypes[] | null>>;
  favoriteItems: string[] | null;
  setFavoriteItems: Dispatch<SetStateAction<string[] | null>>;
}

const GlobalContext = createContext<IContextProps>({
  user: null,
  setUser: (): void => {},
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
  const [user, setUser] = useState<userAuthTypes | null>(null);
  const [sidebarStatus, setSidebarStatus] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [basketItems, setBasketItems] = useState<basketItemTypes[] | null>(
    () => {
      const localStorageBasket =
        typeof window !== "undefined" && localStorage.getItem("basketItems");
      return localStorageBasket ? JSON.parse(localStorageBasket) : null;
    }
  );
  const [favoriteItems, setFavoriteItems] = useState<string[] | null>(() => {
    const localStorageFavorite =
      typeof window !== "undefined" && localStorage.getItem("favoriteItems");
    return localStorageFavorite ? JSON.parse(localStorageFavorite) : null;
  });

  useEffect(() => {
    const userDataFromStorage =
      (typeof window !== "undefined" && localStorage.getItem("user")) ||
      (typeof window !== "undefined" && sessionStorage.getItem("user"));

    const storedUser = userDataFromStorage
      ? JSON.parse(userDataFromStorage)
      : null;

    setUser(() => {
      if (storedUser) {
        return {
          uid: storedUser.uid,
          fullName: storedUser.fullName,
          email: storedUser.email,
          role: storedUser.role,
        };
      } else {
        return null;
      }
    });
  }, []);

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
    <body className={`${sidebarStatus !== "" ? "noScroll" : ""}`}>
      <GlobalContext.Provider
        value={{
          user,
          setUser,
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
