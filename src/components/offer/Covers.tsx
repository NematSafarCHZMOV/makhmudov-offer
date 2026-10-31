import { COVER_SAMPLES, OFFER, cld } from "@/config/offer-config";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Hər videoya hazırladığımız cover dizaynları
export function Covers() {
  return (
    <section id="cover" className="max-w-5xl mx-auto px-5 py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeader
          eyebrow={`${OFFER.videoCount} video · ${OFFER.videoCount} cover`}
          title="Hər videoya öz cover dizaynı"
          description="Səhifəniz qrid kimi də premium görünsün deyə hər videonun cover-ini ayrıca dizayn edirik. Bütün səviyyələrə daxildir."
        />

        <div className="grid grid-cols-3 gap-2 sm:gap-4 items-start">
          {COVER_SAMPLES.map((src, i) => (
            <div
              key={src}
              className={`surface rounded-[20px] sm:rounded-[28px] p-1.5 sm:p-2 ${
                i === 1 ? "surface-glow sm:scale-105" : "sm:mt-10"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cld(src, "w_600,q_auto,f_auto")}
                alt={`Cover dizayn nümunəsi ${i + 1}`}
                loading="lazy"
                className="w-full aspect-[9/16] object-cover rounded-[15px] sm:rounded-[22px]"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-label-2">
          Referans nümunələr — sizin cover-lər brendinizin rəng və şriftləri ilə hazırlanır.
        </p>
      </Reveal>
    </section>
  );
}
