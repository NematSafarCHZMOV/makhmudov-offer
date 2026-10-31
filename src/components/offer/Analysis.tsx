import { ArrowUpRight, Check, TrendingUp } from "lucide-react";
import { CLIENT, CLIENT_SHOTS, CLIENT_STATS, FINDINGS } from "@/config/offer-config";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Müştərinin Instagram səhifəsinin təhlili — onların öz kadrları ilə
export function Analysis() {
  return (
    <section id="tehlil" className="max-w-6xl mx-auto px-5 py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeader
          eyebrow="Səhifə təhlili"
          title="Səhifənizə diqqətlə baxdıq"
          description={
            <>
              Təklif şablon deyil — {CLIENT.handle} səhifəsindəki paylaşımlarınıza baxaraq hazırlanıb.{" "}
              <a href={CLIENT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-label underline-offset-4 hover:underline">
                Instagram <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </>
          }
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Sizin kadrlarınız */}
          <div className="surface rounded-[28px] p-3 sm:p-4">
            <div className="flex items-center gap-3 px-1 pb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CLIENT.logo} alt="" className="w-10 h-10 rounded-full bg-white object-cover" />
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-label truncate">{CLIENT.handle}</p>
                <p className="text-[13px] text-label-2">İnteryer dizayn və təmir</p>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-2 mb-3">
              {CLIENT_STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.04] px-3 py-3 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-[22px] font-light text-label tabular-nums leading-none">{s.value}</dd>
                  <dd className="mt-1.5 text-[12px] text-label-2 leading-tight">{s.label}</dd>
                </div>
              ))}
            </dl>
            <ul className="grid grid-cols-3 gap-1.5">
              {CLIENT_SHOTS.map((shot) => (
                <li key={shot.src} className="relative aspect-[4/5] rounded-xl overflow-hidden bg-elevated">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.caption} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <span className="absolute inset-x-0 bottom-0 p-2 pt-6 bg-gradient-to-t from-black/80 to-transparent text-[11px] text-white/90 leading-tight">
                    {shot.caption}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nəticələr */}
          <ul className="space-y-3">
            {FINDINGS.map((f) => {
              const strength = f.kind === "strength";
              return (
                <li key={f.title} className={`surface rounded-[22px] p-5 flex gap-4 ${strength ? "" : "surface-glow"}`}>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      strength ? "bg-white/[0.08] text-label" : "bg-white text-black"
                    }`}
                  >
                    {strength ? <Check className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                  </span>
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-wider text-label-3">{strength ? "Güclü tərəf" : "İmkan"}</p>
                    <h3 className="mt-0.5 text-[17px] font-semibold text-label">{f.title}</h3>
                    <p className="mt-1 text-[15px] leading-snug text-label-2">{f.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
