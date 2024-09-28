import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export function getStar(index: number, rating: number, size: number): JSX.Element {
  const starClass = `#facc15`;

  if (index <= Math.floor(rating)) {
    return <IoStar style={{ fontSize : size, color: starClass}} />;
  } else if (index === Math.ceil(rating) && rating % 1 >= 0.5) {
    return <IoStarHalf style={{ fontSize : size, color: starClass}} />;
  } else {
    return <IoStarOutline style={{ fontSize : size, color: starClass}} />;
  }
}

/* if (index <= Math.round(rating)) {
    return <IoStar key={index} className={starClass} />;
  } else if (index === Math.round(rating) + 0.5) {
    return <IoStarHalf key={index} className={starClass} />;
  } else {
    return <IoStarOutline key={index} className={starClass} />;
  } */
