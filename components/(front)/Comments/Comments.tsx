import { useGlobalContext } from "@/app/Context/store";
import { getShortName } from "@/lib/functions/getShortName";
import { getStar } from "@/lib/functions/getStar";
import { getStarredName } from "@/lib/functions/getStarredName";
import { generalsTypes } from "@/types/generalTypes";
import React from "react";

interface ICommentsProps {
  comments?: any[];
  generals: generalsTypes;
}

function Comments({ comments, generals }: ICommentsProps) {
  const { isMobile } = useGlobalContext();

  return (
    <ul className="flex flex-col w-full gap-6">
      {Array.from({ length: 3 }).map((_, index) => {
        const firstName = "Batuhan";
        const lastName = "Keskinsoy";

        const commentName = "Batuhan Keskinsoy"
        return (
          <React.Fragment key={index}>
            <li className="flex max-lg:flex-col gap-4 lg:items-center">
              <div className="flex gap-4 max-lg:items-center">
                {firstName && lastName && (
                  <div className="flex items-center justify-center lg:min-w-20 lg:w-20 lg:h-20 min-w-16 w-16 h-16 bg-site/10 text-site rounded-full select-none font-gemunu text-3xl uppercase font-light">
                    {getShortName(firstName, lastName)}
                  </div>
                )}
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex max-lg:flex-col lg:items-center lg:gap-4 gap-2">
                    <span className="font-gemunu text-xl tracking-wide">
                      {getStarredName(commentName)}
                    </span>
                    {(() => {
                      const size = 16;
                      const productRating = 4; // DATA GELINCE SILINECEK KULLANILAN YERLERE RATE PUANI GELCEK
                      return (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1 items-center min-w-max">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <div
                                key={index}
                                className={`relative min-w-[${size}px] w-[${size}px] h-[${size}px]`}
                              >
                                {getStar(index + 1, productRating || 0, size)}
                              </div>
                            ))}
                          </div>
                          <p className={`-mb-1`} style={{ fontSize: size - 4 }}>
                            ({productRating})
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                  {!isMobile && (
                    <p className="text-gray-500 dark:text-gray-400">
                      Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım
                      kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel
                      ürün ben aldım kullanıyorum. Güzel ürün ben aldım
                      kullanıyorum. Güzel ürün ben aldım kullanıyorum.
                    </p>
                  )}
                  {!isMobile && (
                    <div className="flex flex-col w-full gap-2 px-4 py-3 border-l-4 border-site/70 bg-site/10">
                      <span className="text-site font-gemunu text-xl font-semibold tracking-wide">
                        {generals.site_name} Yanıtladı :
                      </span>
                      <p className="text-gray-600 dark:text-gray-300">
                        Beğenmenize sevindik, iyi günler beğenmenize sevindik,
                        iyi günlerde kullanın. Beğenmenize sevindik, iyi
                        günlerde kullanın.{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {isMobile && (
                <p className="text-gray-500 dark:text-gray-400">
                  Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım
                  kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün
                  ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum.
                  Güzel ürün ben aldım kullanıyorum.
                </p>
              )}
              {isMobile && (
                <div className="flex flex-col w-full gap-2 px-4 py-3 border-l-4 border-site/70 bg-site/10">
                  <span className="text-site font-gemunu text-xl font-semibold tracking-wide">
                    {generals.site_name} Yanıtladı :
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Beğenmenize sevindik, iyi günler beğenmenize sevindik, iyi
                    günlerde kullanın. Beğenmenize sevindik, iyi günlerde
                    kullanın.{" "}
                  </p>
                </div>
              )}
            </li>
            <hr />
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Comments;
