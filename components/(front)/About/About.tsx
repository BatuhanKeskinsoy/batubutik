import { generalsTypes } from "@/types/generalTypes";
import Image from "next/image";
import React from "react";

interface IAboutProps {
  generals: generalsTypes;
}

function About({ generals }: IAboutProps) {
  return (
    <div className="container mx-auto px-4 flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col lg:gap-6 gap-4 lg:w-3/5 w-full text-lg tracking-wide">
        <span className="font-gemunu lg:text-4xl text-3xl tracking-wider font-medium">
          Hakkımızda
        </span>
        <div className="flex flex-col lg:gap-6 gap-4 w-full text-gray-600 dark:text-gray-400">
          <p>
            {generals.site_name} olarak 2005 yılından bu yana kadın iç giyim
            sektöründe hizmet vermekteyiz. Kurulduğumuz günden itibaren müşteri
            memnuniyetini en ön planda tutmakla birlikte her sezon modayı
            yakından takip ederek, en yeni trendleri ve en rahat tasarımları
            müşterilerimizle buluşturuyoruz.
          </p>
          <p>
            Müşterilerimize sadece ürün satışı değil, aynı zamanda tarz ve
            konfor da sunmayı amaçlıyoruz.
          </p>
          <p>
            Müşteri odaklı hizmet anlayışımızla, her zaman kaliteli ve güvenilir
            alışveriş deneyimi sağlamaya özen gösteriyoruz. Online alışveriş
            sitemiz ile Türkiye'nin dört bir yanındaki müşterilerimize
            ulaşmaktayız. Güvenilir kargo hizmetlerimiz ve hızlı teslimat
            sürelerimizle alışverişi keyifli hale getiriyoruz.
          </p>
          <p>
            {generals.site_name} olarak, sektördeki yenilikleri ve gelişmeleri
            yakından takip ederek, her zaman en iyi hizmeti vermeyi amaçlıyoruz.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col gap-4 lg:w-2/5 min-h-[265px] w-full">
        <Image
          src={"/assets/about/about.png"}
          alt="Hakkımızda"
          width={630}
          height={420}
          quality={100}
          className="object-contain lg:rounded-xl"
        />
      </div>
    </div>
  );
}

export default About;
