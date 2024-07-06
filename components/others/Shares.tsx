"use client";
import React from "react";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";
import { TelegramShareButton, TelegramIcon } from "next-share";
import { RedditShareButton, RedditIcon } from "next-share";
import { EmailShareButton, EmailIcon } from "next-share";
import { usePathname } from "next/navigation";

function ProductShares(props: any) {
  const pathname = usePathname();
  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  return (
    <div className="flex flex-wrap gap-3">
      <FacebookShareButton
        url={fullUrl}
        quote={props.title}
        hashtag={props.tags}
        windowWidth={800}
        windowHeight={800}
      >
        <FacebookIcon
          size={40}
          round
          className="hover:scale-110 transition-all duration-300"
        />
      </FacebookShareButton>

      <TwitterShareButton
        url={fullUrl}
        title={props.title}
        windowWidth={800}
        windowHeight={800}
      >
        <TwitterIcon
          size={40}
          round
          className="hover:scale-110 transition-all duration-300"
        />
      </TwitterShareButton>

      <WhatsappShareButton
        url={fullUrl}
        title={props.title}
        windowWidth={800}
        windowHeight={800}
      >
        <WhatsappIcon
          size={40}
          round
          className="hover:scale-110 transition-all duration-300"
        />
      </WhatsappShareButton>

      <LinkedinShareButton url={fullUrl} windowWidth={800} windowHeight={800}>
        <LinkedinIcon
          size={40}
          round
          className="hover:scale-110 transition-all duration-300"
        />
      </LinkedinShareButton>

      <TelegramShareButton
        url={fullUrl}
        title={props.title}
        windowWidth={800}
        windowHeight={800}
      >
        <TelegramIcon
          size={40}
          round
          className="hover:scale-110 transition-all duration-300"
        />
      </TelegramShareButton>

      <RedditShareButton
        url={fullUrl}
        title={props.title}
        windowWidth={800}
        windowHeight={800}
      >
        <RedditIcon
          size={40}
          round
          className="hover:scale-110 transition-all duration-300"
        />
      </RedditShareButton>

      <EmailShareButton
        url={fullUrl}
        subject={props.title}
        body={props.description}
      >
        <EmailIcon size={40} round className="hover:scale-110 transition-all duration-300" />
      </EmailShareButton>
    </div>
  );
}

export { ProductShares };
