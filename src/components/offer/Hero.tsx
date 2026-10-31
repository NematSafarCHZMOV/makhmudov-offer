"use client";

import { useSyncExternalStore } from "react";
import { ArrowDownRight } from "lucide-react";
import { CLIENT, OFFER } from "@/config/offer-config";
import { PartnerLockup } from "./PartnerLockup";

const noopSubscribe = () => () => {};
// Bəzi brauzerlərdə "az-AZ" lokalı yoxdur, ay adları əl ilə verilir
const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
const getToday = () => {
  const d = new Date();
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

// Tarix yalnız brauzerdə hesablanır, build vaxtı köhnə tarix qalmasın deyə
function TodayLabel() {
  const today = useSyncExternalStore(noopSubscribe, getToday, () => null);
  return <>{today}</>;
}

const delay = (i: number) => ({ animationDelay: `${0.15 + i * 0.12}s` });

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow" aria-hidden />
      <div className="absolute inset-0 stars opacity-70" aria-hidden />

      <div className="relative max-w-5xl mx-auto px-5 pt-36 pb-16 sm:pt-44 sm:pb-24 text-center flex flex-col items-center">
        {/* Biz × müştəri */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 blur-in" style={delay(0)}>
          <PartnerLockup />
          <span className="text-label-3 text-[20px] font-light" aria-hidden>
            →
          </span>
          <span className="inline-flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CLIENT.logo} alt="" className="w-11 h-11 rounded-full bg-white object-cover ring-2 ring-black" />
            <span className="text-[17px] font-semibold text-label">{CLIENT.name}</span>
          </span>
        </div>

        <span className="badge mt-8 blur-in" style={delay(1)}>
          <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden />
          Fərdi təklif · <TodayLabel />
        </span>

        <h1 className="mt-6 text-[40px] leading-[1.04] sm:text-[76px] font-semibold tracking-[-0.035em] max-w-4xl text-gradient pb-2 blur-in" style={delay(2)}>
          Layihələriniz premiumdur. Videolarınız da elə olmalıdır.
        </h1>

        <p className="mt-6 text-[17px] sm:text-[21px] leading-relaxed text-label-2 max-w-2xl blur-in" style={delay(3)}>
          {CLIENT.name} səhifəsini təhlil etdik. Aşağıda {OFFER.videoCount} videoluq çəkiliş, montaj və kontentin
          Basic, Standart və Premium səviyyədə necə görünəcəyini yan-yana göstəririk.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 blur-in" style={delay(4)}>
          <a
            href="#seviyye"
            className="inline-flex items-center gap-2 px-7 h-[52px] rounded-full bg-white text-black text-[17px] font-semibold active:opacity-70 transition-opacity"
          >
            Fərqə baxın
            <ArrowDownRight className="w-4 h-4" />
          </a>
          <a
            href="#tehlil"
            className="inline-flex items-center px-7 h-[52px] rounded-full surface text-label text-[17px] font-semibold active:opacity-70 transition-opacity"
          >
            Səhifə təhlili
          </a>
        </div>
      </div>
    </section>
  );
}
