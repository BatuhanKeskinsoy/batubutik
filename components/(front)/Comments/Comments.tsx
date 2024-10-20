import { useGlobalContext } from "@/app/Context/store";
import { getShortName } from "@/lib/functions/getShortName";
import { getStar } from "@/lib/functions/getStar";
import { getStarredName } from "@/lib/functions/getStarredName";
import { generalsTypes } from "@/types/generalTypes";
import { ProductCommentsTypes } from "@/types/product/comments/productCommentsTypes";
import Link from "next/link";
import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

interface ICommentsProps {
  comments: ProductCommentsTypes[];
  generals: generalsTypes;
}

function Comments({ comments, generals }: ICommentsProps) {
  const { isMobile } = useGlobalContext();

  if (comments.length === 0) {
    return (
      <>
        <div
          className={`flex flex-col gap-4 w-full py-4 justify-start items-start text-gray-500 dark:text-zinc-500`}
        >
          <div className={`flex lg:gap-4 gap-2 justify-center items-center`}>
            <div className="lg:min-w-20 lg:w-20 lg:h-20 min-w-16 w-16 h-16 flex items-center justify-center">
              <IoChatboxEllipsesOutline
                className={`text-5xl lg:text-6xl min-w-[60px]`}
              />
            </div>
            <span className="font-gemunu tracking-wide lg:text-xl text-lg">
              Bu ürüne henüz yorum yapılmamış. Doğru değerlendirme amacıyla
              ürünü satın almadan yorum yapamazsınız, eğer ürünü zaten satın
              aldıysanız giriş yaptıktan sonra ilk yorumu{" "}
              <Link
                href={"/profilim/siparislerim"}
                className="dark:text-white text-site dark:hover:text-site transition-all duration-300 tracking-wider"
              >
                Siparişlerim
              </Link>{" "}
              'den yapabilirsiniz.
            </span>
          </div>
        </div>
        <hr className="dark:border-zinc-800 my-4" />
      </>
    );
  } else {
    return (
      <>
        <div
          className={`flex flex-col gap-4 w-full justify-start items-start text-gray-500 dark:text-zinc-500`}
        >
          <div className={`flex lg:gap-4 gap-2 justify-center items-center`}>
            <div className="lg:min-w-20 lg:w-20 lg:h-20 min-w-16 w-16 h-16 flex items-center justify-center">
              <IoChatboxEllipsesOutline
                className={`text-5xl lg:text-6xl min-w-[60px]`}
              />
            </div>
            <span className="font-gemunu tracking-wide lg:text-xl text-lg">
              Doğru değerlendirme amacıyla ürünü satın almadan yorum
              yapamazsınız, eğer ürünü zaten satın aldıysanız giriş yaptıktan
              sonra ilk yorumu{" "}
              <Link
                href={"/profilim/siparislerim"}
                className="dark:text-white text-site dark:hover:text-site transition-all duration-300 tracking-wider"
              >
                Siparişlerim
              </Link>{" "}
              'den yapabilirsiniz.
            </span>
          </div>
        </div>
        <hr className="dark:border-zinc-800 my-4" />
        <ul className="flex flex-col w-full gap-6 mt-4 mb-8">
          {comments
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((comment, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="flex max-lg:flex-col gap-4 lg:items-center">
                    <div className="flex gap-4 max-lg:items-center">
                      <div className="flex items-center justify-center lg:min-w-20 lg:w-20 lg:h-20 min-w-16 w-16 h-16 bg-site/10 text-site rounded-full select-none font-gemunu text-3xl uppercase font-light">
                        {getShortName(
                          comment.user.firstName,
                          comment.user.lastName
                        )}
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex max-lg:flex-col lg:items-center lg:gap-4 gap-2">
                          <span className="font-gemunu text-xl tracking-wide">
                            {getStarredName(
                              comment.user.firstName,
                              comment.user.lastName
                            )}
                          </span>
                          {(() => {
                            const size = 16;
                            return (
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1 items-center min-w-max">
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <div
                                      key={index}
                                      className={`relative min-w-[${size}px] w-[${size}px] h-[${size}px]`}
                                    >
                                      {getStar(
                                        index + 1,
                                        comment.rating || 0,
                                        size
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <p
                                  className={`-mb-1`}
                                  style={{ fontSize: size - 4 }}
                                >
                                  ({comment.rating})
                                </p>
                              </div>
                            );
                          })()}
                        </div>
                        {!isMobile && (
                          <p className="text-gray-500 dark:text-gray-400">
                            {comment.comment}
                          </p>
                        )}
                        {!isMobile && comment.reply && (
                          <div className="flex flex-col w-full gap-2 px-4 py-3 border-l-4 border-site/70 bg-site/10">
                            <span className="text-site font-gemunu text-xl font-semibold tracking-wide">
                              {generals.site_name} Yanıtladı :
                            </span>
                            <p className="text-gray-600 dark:text-gray-300">
                              {comment.reply}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    {isMobile && (
                      <p className="text-gray-500 dark:text-gray-400">
                        {comment.comment}
                      </p>
                    )}
                    {isMobile && comment.reply && (
                      <div className="flex flex-col w-full gap-2 px-4 py-3 border-l-4 border-site/70 bg-site/10">
                        <span className="text-site font-gemunu text-xl font-semibold tracking-wide">
                          {generals.site_name} Yanıtladı :
                        </span>
                        <p className="text-gray-600 dark:text-gray-300">
                          {comment.reply}
                        </p>
                      </div>
                    )}
                  </li>
                  <hr className="dark:border-zinc-800" />
                </React.Fragment>
              );
            })}
        </ul>
      </>
    );
  }
}

export default Comments;
