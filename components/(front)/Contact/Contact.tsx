"use client";
import { getSocialIcon } from "@/components/functions/getSocialIcon";
import CustomButton from "@/components/others/CustomButton";
import { generals } from "@/constants/(front)";
import Link from "next/link";
import React, { useState } from "react";
import {
  IoCallOutline,
  IoChevronForwardOutline,
  IoMailOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { toast } from "react-toastify";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [suspect, setSuspect] = useState("");
  const [message, setMessage] = useState("");

  const formattedPhoneNumber = generals.phone.replace(/[\s()]/g, "");

  const handleContact = (e: any) => {
    e.preventDefault();

    setFullName("");
    setEmail("");
    setSuspect("");
    setMessage("");
    toast.success(`Mesajınız Gönderildi. Sayın, ${fullName}`);
  };

  return (
    <div className="container mx-auto px-4 flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col gap-4 lg:w-2/3 w-full lg:order-1 order-2">
        <span className="font-gemunu text-3xl tracking-wider font-medium">
          Bize Ulaşın
        </span>
        <hr />
        <form
          onSubmit={(e) => handleContact(e)}
          className="flex flex-col w-full gap-6"
        >
          <div className="flex lg:flex-row flex-col items-center gap-6 w-full">
            <label htmlFor="fullname" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 tracking-wide">İsminiz</span>
              <input
                type="text"
                id="fullname"
                required
                className="bg-white border border-gray-200 focus:border-site/50 rounded-lg py-3 px-6  outline-none text-lg lg:min-w-[350px] max-lg:w-full"
                placeholder="İsminizi giriniz"
                value={fullName}
                autoComplete="name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 tracking-wide">
                E-Posta Adresiniz
              </span>
              <input
                type="email"
                id="email"
                required
                className="bg-white border border-gray-200 focus:border-site/50 rounded-lg py-3 px-6  outline-none text-lg lg:min-w-[350px] max-lg:w-full"
                placeholder="E-Posta Adresinizi giriniz"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <label htmlFor="suspect" className="flex flex-col gap-4 w-full">
            <span className="text-gray-600 tracking-wide">Konu</span>
            <input
              type="text"
              required
              className="bg-white border border-gray-200 focus:border-site/50 rounded-lg py-3 px-6  outline-none text-lg lg:min-w-[350px] max-lg:w-full"
              placeholder="Konu giriniz"
              value={suspect}
              onChange={(e) => setSuspect(e.target.value)}
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-4 w-full">
            <span className="text-gray-600 tracking-wide">Mesajınız</span>
            <textarea
              cols={6}
              rows={6}
              required
              className="bg-white border border-gray-200 focus:border-site/50 rounded-lg py-3 px-6  outline-none text-lg lg:min-w-[350px] max-lg:w-full"
              placeholder="Mesajınızı giriniz"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <div className="flex items-end">
            <CustomButton
              title="Mesajı Gönder"
              btnType="submit"
              rightIcon={<IoChevronForwardOutline className="text-2xl -mr-2" />}
              containerStyles="flex items-center justify-center text-center gap-4 py-3 px-6 w-fit bg-white/20 border border-gray-200  max-lg:w-full rounded-lg font-gemunu tracking-widest hover:border-transparent hover:bg-site/10 hover:text-site transition-all duration-300"
              textStyles="font-medium text-xl"
            />
          </div>
        </form>
      </div>
      <div className="w-0.5 h-[600px] border-r border-gray-200 order-2 max-lg:hidden"></div>
      <div className="flex flex-col gap-4 lg:w-1/3 w-full tracking-wide lg:order-2 order-1">
        <span className="font-gemunu text-3xl tracking-wider font-medium">
          Sosyal Medya
        </span>
        <div className="flex flex-wrap gap-4 items-center *:transition-all *:duration-300">
          {generals.socials.map((social, key) => (
            <Link
              key={key}
              href={social.url}
              className="flex items-center gap-2 hover:text-site text-gray-600 text-3xl"
              target="_blank"
            >
              {getSocialIcon(social.platform)}
              <span className="text-base">{social.platform}</span>
            </Link>
          ))}
        </div>
        <hr />
        <span className="font-gemunu text-3xl tracking-wider font-medium">
          İletişim
        </span>
        <div className="flex items-center gap-3 text-gray-600 leading-6">
          <IoStorefrontOutline className="size-6 min-w-[24px]" />
          <p>{generals.address}</p>
        </div>
        <Link
          href={`tel:+9${formattedPhoneNumber}`}
          className="flex items-center gap-3 text-gray-600 leading-6 hover:text-site transition-all duration-300 w-fit"
        >
          <IoCallOutline className="size-6 min-w-[24px]" />
          <p>{generals.phone}</p>
        </Link>
        <Link
          href={`mailto:${generals.email}`}
          className="flex items-center gap-3 text-gray-600 leading-6 hover:text-site transition-all duration-300 w-fit"
        >
          <IoMailOutline className="size-6 min-w-[24px]" />
          <p>{generals.email}</p>
        </Link>
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3010.6196665425136!2d29.188785612436945!3d41.01169707123056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1719828314969!5m2!1str!2str"
          className="w-full border-0"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
