import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export function getStar(index: number, rating: number, size: number): JSX.Element {
  const starClass = `text-yellow-400`;

  if (index <= Math.floor(rating)) {
    return <IoStar className={starClass} style={{ fontSize : size}} />;
  } else if (index === Math.ceil(rating) && rating % 1 >= 0.5) {
    return <IoStarHalf className={starClass} style={{ fontSize : size}} />;
  } else {
    return <IoStarOutline className={starClass} style={{ fontSize : size}} />;
  }
}

/* if (index <= Math.round(rating)) {
    return <IoStar key={index} className={starClass} />;
  } else if (index === Math.round(rating) + 0.5) {
    return <IoStarHalf key={index} className={starClass} />;
  } else {
    return <IoStarOutline key={index} className={starClass} />;
  } */
