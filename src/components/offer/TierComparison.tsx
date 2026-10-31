import { Check } from "lucide-react";
import { METRICS, OFFER, PRICING_NOTES, TIERS, cld } from "@/config/offer-config";
import { AutoVideo } from "./AutoVideo";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { WhatsAppLink } from "./WhatsAppLink";

const formatPrice = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");

// 5 bölməli göstərici — səviyyələr arasındakı fərq bir baxışda görünsün
function Meter({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[13px] text-label-2">{label}</span>
      <span className="flex gap-1" role="img" aria-label={`${label}: ${score} / 5`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`w-4 sm:w-5 h-1.5 rounded-full ${n <= score ? "bg-white" : "bg-white/10"}`} />
        ))}
      </span>
    </div>
  );
}

// Eyni 10 video — üç səviyyə yan-yana, qiyməti ilə
export function TierComparison() {
  return (
    <section id="seviyye" className="max-w-6xl mx-auto px-5 py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeader
          eyebrow={`${OFFER.videoCount} video · çəkiliş + montaj + kontent`}
          title="Eyni 10 video, üç fərqli səviyyə"
          description="Hər səviyyədə peşəkar kamera ilə çəkiliş, ssenari, montaj və cover daxildir. Fərq — avadanlıq, işıq, komanda və montajın dərinliyidir. Özünüz baxın."
        />

        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pt-3 items-stretch">
          {TIERS.map((tier, i) => (
            <article
              key={tier.id}
              className={`relative surface rounded-[28px] p-3 sm:p-4 flex flex-col w-[82%] shrink-0 snap-center md:w-auto ${
                tier.recommended ? "surface-glow border-white/40" : ""
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-white text-black text-[12px] font-semibold z-10">
                  Sizin üçün tövsiyə
                </span>
              )}

              <header className="flex items-start justify-between gap-3 px-2 pt-2 pb-4">
                <div>
                  <h3 className="text-[24px] font-semibold tracking-tight text-label">{tier.name}</h3>
                  <p className="text-[15px] text-label-2">{tier.tagline}</p>
                </div>
                <span className="text-[13px] text-label-3 tabular-nums pt-1.5">0{i + 1}</span>
              </header>

              <AutoVideo
                src={cld(tier.sample, "w_540,q_auto")}
                poster={cld(tier.sample, "so_1,w_540,q_auto", "jpg")}
                label={`${tier.name} səviyyəsi üçün nümunə video`}
                className="aspect-[9/16] rounded-[20px]"
              />

              <div className="px-2 mt-5">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-[38px] font-light tracking-tight text-label leading-none tabular-nums">
                    {formatPrice(tier.price)}
                  </span>
                  <span className="text-[15px] text-label-2">{OFFER.currency}</span>
                </p>
                <p className="mt-1.5 text-[13px] text-label-3 tabular-nums">
                  {OFFER.videoCount} video · 1 video ≈ {Math.round(tier.price / OFFER.videoCount)} {OFFER.currency}
                </p>
              </div>

              <div className="px-2 mt-5 space-y-3">
                {METRICS.map((m, j) => (
                  <Meter key={m} label={m} score={tier.scores[j]} />
                ))}
              </div>

              <ul className="px-2 mt-5 pt-5 space-y-2.5 border-t border-white/[0.06]">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] text-label leading-snug">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-label-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mx-2 mt-5 rounded-2xl bg-white/[0.05] px-4 py-3 text-[14px] leading-snug text-label-2 flex-1">
                <span className="text-label font-medium">Sizin üçün: </span>
                {tier.forYou}
              </p>

              <WhatsAppLink
                tier={tier.id}
                className={`mt-4 w-full h-12 inline-flex items-center justify-center rounded-full text-[15px] font-semibold active:opacity-70 transition-opacity ${
                  tier.recommended ? "bg-white text-black" : "bg-white/[0.08] text-label hover:bg-white/[0.12]"
                }`}
              >
                {tier.name} seçirəm
              </WhatsAppLink>
            </article>
          ))}
        </div>

        <div className="mt-8 space-y-1 text-center text-[13px] text-label-2">
          {PRICING_NOTES.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
