import { BRAND_COUNT, BRAND_LOGOS, BrandLogo } from "@/config/offer-config";

function Logo({ logo }: { logo: BrandLogo }) {
  if (logo.kind === "avatar") {
    return (
      <span className="flex items-center gap-2 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="" loading="lazy" className="w-7 h-7 rounded-full object-cover grayscale" />
        <span className="text-[14px] font-semibold text-label whitespace-nowrap">{logo.name}</span>
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className={`h-6 w-auto max-w-[110px] object-contain shrink-0 ${logo.kind === "mono" ? "brightness-0 invert" : ""}`}
    />
  );
}

// Bizimlə işləyən brendlər — kiçik, sakit lent (status üçün)
export function Portfolio() {
  return (
    <section id="brendler" aria-label="Bizimlə işləyən brendlər" className="py-8 border-y border-white/[0.06]">
      <p className="text-center text-[12px] font-medium uppercase tracking-wider text-label-3 mb-6">
        Bizimlə işləyən {BRAND_COUNT} brenddən bəziləri
      </p>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee flex w-max items-center opacity-60">
          {/* Lent kəsilməsin deyə siyahı iki dəfə təkrarlanır */}
          {[0, 1].map((copy) =>
            BRAND_LOGOS.map((logo) => (
              <li key={`${copy}-${logo.name}`} aria-hidden={copy === 1} className="px-6 sm:px-8 flex items-center">
                <Logo logo={logo} />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
