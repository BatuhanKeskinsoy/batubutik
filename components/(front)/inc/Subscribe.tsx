"use client";
import CustomButton from "@/components/others/CustomButton";
import Image from "next/image";
import React, { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function Subscribe() {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: any) => {
    e.preventDefault();

    setEmail("");
    toast.success(`Bültene Abone Oldunuz. ${email}`);
  };
  return (
    <div className="relative py-12 bg-site/20 overflow-hidden">
      <Image
        src={"/theme/subscribe.webp"}
        alt="subscribe"
        fill
        className="object-cover -z-20 blur-[1px]"
      />
      <div className="absolute w-full left-0 top-0 h-full bg-black-900/70 -z-10"></div>
      <div className="container mx-auto px-4 flex max-lg:flex-col gap-8 justify-between items-center">
        <div className="flex flex-col gap-4 max-lg:items-center max-lg:*:text-center">
          <span className="font-gemunu tracking-wider text-4xl text-white font-medium">
            Bültene Abone Ol
          </span>
          <p className="text-white opacity-70 tracking-wider font-light">
            Bültene abone olarak en yeni ve size özel kampanyalı ürünlerimizden
            haberdar olabilirsiniz!
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubscribe(e)}
          className="flex max-lg:flex-col gap-4 max-lg:w-full"
        >
          <input
            type="email"
            required
            className="bg-white/20 border border-transparent focus:border-site/50 focus:bg-site/20 rounded-lg py-3 px-8 text-white outline-none text-lg lg:min-w-[350px] max-lg:w-full transition-all duration-300"
            placeholder="E-Mail Adresiniz"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomButton
            title="ABONE OL"
            btnType="submit"
            rightIcon={<IoChevronForwardOutline className="text-2xl -mr-2" />}
            containerStyles="flex items-center justify-center text-center gap-4 py-3 px-8 w-fit bg-white/20 text-white max-lg:w-full rounded-lg font-gemunu tracking-widest shadow-[0_-5px_30px_0_rgba(0,0,0,0.15)] hover:bg-site/20 hover:text-site transition-all duration-300"
            textStyles="uppercase font-medium lg:text-2xl text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
