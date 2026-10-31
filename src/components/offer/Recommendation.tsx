import { CONTENT_PLAN, HIGH_TICKET_POINTS, OFFER } from "@/config/offer-config";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Yüksək büdcəli xidmət üçün tövsiyə + 10 videonun bölgüsü
export function Recommendation() {
  return (
    <section id="tovsiye" className="max-w-6xl mx-auto px-5 py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeader
          eyebrow="Tövsiyəmiz"
          title="Yüksək büdcəli xidmət — yüksək səviyyəli video"
          description="Premium interyer satan brend üçün nəyi tövsiyə etdiyimizi və 10 videonu necə bölməyi düşündüyümüzü göstəririk."
        />

        <ul className="grid gap-3 md:grid-cols-3 mb-12">
          {HIGH_TICKET_POINTS.map((p, i) => (
            <li key={p} className="surface rounded-[22px] p-5 sm:p-6">
              <span className="text-[32px] font-light leading-none text-label-3 tabular-nums">0{i + 1}</span>
              <p className="mt-6 text-[16px] leading-snug text-label">{p}</p>
            </li>
          ))}
        </ul>

        {/* 10 videonun bölgüsü */}
        <div className="surface surface-glow rounded-[28px] p-5 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <p className="text-[13px] text-label-2">Aylıq kontent planı</p>
              <h3 className="text-[24px] sm:text-[28px] font-semibold tracking-tight text-label">
                {OFFER.videoCount} video necə bölünür
              </h3>
            </div>
          </div>

          {/* Bölgü zolağı */}
          <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-8" aria-hidden>
            {CONTENT_PLAN.map((c, i) => (
              <span key={c.title} className="h-full" style={{ flex: c.count, background: `rgba(255,255,255,${0.9 - i * 0.16})` }} />
            ))}
          </div>

          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT_PLAN.map((c, i) => (
              <li key={c.title} className="flex gap-4">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-[17px] font-semibold text-black tabular-nums"
                  style={{ background: `rgba(255,255,255,${0.9 - i * 0.16})` }}
                >
                  {c.count}
                </span>
                <div>
                  <h4 className="text-[17px] font-semibold text-label">{c.title}</h4>
                  <p className="mt-1 text-[14px] leading-snug text-label-2">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
