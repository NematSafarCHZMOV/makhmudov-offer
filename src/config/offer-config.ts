/**
 * Makhmudov Design Studio üçün fərdi video təklifi
 * Səhifədəki bütün mətn, qiymət və media buradan idarə olunur.
 */

export const OFFER = {
  brand: "Chizzgy",
  currency: "₼",
  whatsappNumber: "994557795504",
  whatsappDisplay: "+994 55 779 55 04",
  videoCount: 10,
} as const;

export const CLIENT = {
  name: "Makhmudov Design Studio",
  handle: "@makhmudov_design_studio",
  instagram: "https://www.instagram.com/makhmudov_design_studio/",
  logo: "/client/profile.jpg",
} as const;

// Cloudinary linkinə ölçü/keyfiyyət transformasiyası əlavə edir (yüngül yükləmə üçün)
export function cld(url: string, transform: string, ext?: string) {
  const out = url.replace("/upload/", `/upload/${transform}/`);
  return ext ? out.replace(/\.[a-z0-9]+$/i, `.${ext}`) : out;
}

// ---------------------------------------------------------------------------
// Tərəfdaşlıq — Chizzgy × Nemət Səfərov
// ---------------------------------------------------------------------------
export const PARTNERS = [
  { name: "Chizzgy", role: "Dynamic Design Studio", image: "/brands/chizzgy.jpg", isLogo: true },
  { name: "Nemət Səfərov", role: "Reels və Motion Dizayn", image: "/brands/nemat-safarov.jpg", isLogo: false },
] as const;

// ---------------------------------------------------------------------------
// Səhifə təhlili — @makhmudov_design_studio (Instagram, oktyabr 2026)
// ---------------------------------------------------------------------------
export const CLIENT_STATS = [
  { value: "42.6K", label: "izləyici" },
  { value: "15 il", label: "təcrübə" },
  { value: "3 / 12", label: "son paylaşımda video" },
] as const;

// Səhifədən götürülmüş kadrlar (public/client)
export const CLIENT_SHOTS = [
  { src: "/client/post05.jpg", caption: "Nobel Tower · 185 m²" },
  { src: "/client/post02.jpg", caption: "Təsisçi kadrları" },
  { src: "/client/post09.jpg", caption: "Renessans Palace · 180 m²" },
  { src: "/client/post04.jpg", caption: "Yemək zonası" },
  { src: "/client/post08.jpg", caption: "Lifestyle kadr" },
  { src: "/client/post11.jpg", caption: "Çəkiliş prosesi" },
] as const;

export const FINDINGS = [
  {
    kind: "strength",
    title: "Güclü baza var",
    text: "42.6K izləyici, 15 illik təcrübə və Nobel Tower, Renessans Palace kimi premium layihələr. Auditoriya hazırdır.",
  },
  {
    kind: "strength",
    title: "Vizual dil premiumdur",
    text: "Neytral tonlar, mərmər, ağac və işıq. Kadrlar səliqəlidir — video da bu səviyyədə olmalıdır, aşağı yox.",
  },
  {
    kind: "gap",
    title: "Kontent əsasən statikdir",
    text: "Son 12 paylaşımdan yalnız 3-ü videodur. Instagram reels-i daha çox insana çatdırır — foto ilə böyümə yavaşdır.",
  },
  {
    kind: "gap",
    title: "Məkan hiss olunmur",
    text: "185 m²-lik layihə bir şəkildə göstərilir. Müştəri evin içində gəzmək, işığı və miqyası görmək istəyir.",
  },
  {
    kind: "strength",
    title: "Təsisçi kamera qarşısındadır",
    text: "Təsisçinin danışdığı videolar var — etibarın ən güclü mənbəyi. Premium çəkiliş və montajla bu təsir daha da güclənir.",
  },
] as const;

// ---------------------------------------------------------------------------
// Üç səviyyə — eyni 10 video: çəkiliş + montaj + kontent
// Qiymətlər vergisizdir (ƏDV ayrıca hesablanır).
// ---------------------------------------------------------------------------
export type TierId = "basic" | "standard" | "premium";

export const METRICS = ["Çəkiliş", "İşıq və kadr", "Montaj", "Rəng", "Motion və effekt"] as const;

export const TIERS: readonly {
  id: TierId;
  name: string;
  tagline: string;
  price: number;
  sample: string;
  scores: number[]; // METRICS sırası ilə
  includes: string[];
  forYou: string; // bu səviyyə Makhmudov üçün nə deməkdir
  recommended?: boolean;
}[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Səliqəli və ardıcıl",
    price: 1499,
    sample: "https://res.cloudinary.com/o7779yth/video/upload/v1793410590/Maines_1_Agent_on_Social_panosundaki_Pin.mp4",
    scores: [3, 2, 3, 2, 1],
    includes: [
      "10 video ssenarisi və kontent planı",
      "Peşəkar kamera ilə çəkiliş, bir məkan",
      "Təbii işıq və peşəkar mikrofon",
      "Dinamik montaj və altyazı",
      "10 cover dizayn",
    ],
    forYou: "Layihələr təmiz göstərilir, amma premium interyerin dəyəri tam çatmır.",
  },
  {
    id: "standard",
    name: "Standart",
    tagline: "Hekayə və hərəkət",
    price: 2599,
    sample: "https://res.cloudinary.com/o7779yth/video/upload/v1793410588/Social_panosundaki_Pin.mp4",
    scores: [4, 3, 4, 4, 2],
    includes: [
      "10 video ssenarisi və kontent planı",
      "Peşəkar kamera, əlavə optika və işıq qurulumu",
      "Bir neçə məkan, təsisçi ilə danışan kadrlar və tur",
      "Rəng korreksiyası, animasiyalı mətn",
      "10 cover dizayn",
    ],
    forYou: "Təsisçinin videoları və layihə turları daha peşəkar görünür — səhifə canlanır, etibar artır.",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Kino dili, layihənizin səviyyəsində",
    price: 3999,
    sample: "https://res.cloudinary.com/o7779yth/video/upload/v1793396833/Karyl_Allen_Prince_William_Fauquier_County_VA_Realtor_karyl.alle.mp4",
    scores: [5, 5, 5, 5, 5],
    includes: [
      "10 video ssenarisi və kontent planı",
      "Kino kamerası, bir neçə optika, dron və çəkiliş qrupu",
      "İşıq dizaynı, detal (makro) kadrlar",
      "Color grading, səs dizaynı, motion",
      "10 premium cover dizayn",
    ],
    forYou: "Videolar layihələrinizin qiymətinə uyğun görünür — premium müştəri məhz bunu axtarır.",
    recommended: true,
  },
];

// Hər videoya hazırlanan cover nümunələri (referans)
export const COVER_SAMPLES = [
  "https://res.cloudinary.com/dtb73ihs1/image/upload/v1793405953/dc954f02c89fb0be84a24a3e84570575_v5a6ci.jpg",
  "https://res.cloudinary.com/dtb73ihs1/image/upload/v1793405954/bab9de6aba4236547e9949f7851d6f55_i98j97.jpg",
  "https://res.cloudinary.com/dtb73ihs1/image/upload/v1793405955/859b35fc60e7a9a13fd8c03553aa3a28_bxxadd.png",
] as const;

export const PRICING_NOTES = [
  "Qiymətlər vergisiz göstərilib. Rəsmi qaydalara uyğun olaraq ƏDV ayrıca hesablanır.",
  "Nümunə videolar istiqamət üçün seçilmiş referanslardır — eyni səviyyəni sizin layihələrinizlə çəkirik.",
] as const;

// ---------------------------------------------------------------------------
// Yüksək büdcəli (high-ticket) xidmət üçün tövsiyə olunan 10 videoluq plan
// ---------------------------------------------------------------------------
export const CONTENT_PLAN = [
  { count: 3, title: "Layihə turu", text: "Nobel Tower kimi təhvil verilmiş layihələrdə kinematik gəzinti: giriş, işıq, miqyas." },
  { count: 2, title: "Təsisçi danışır", text: "Artıq çəkdiyiniz danışan videoların davamı — bu dəfə kino işığı və montajla: niyə bu material, niyə bu planlama." },
  { count: 2, title: "Əvvəl / sonra", text: "Boş beton divardan açar təhvilinə qədər — 15 illik təcrübəni bir videoda göstəririk." },
  { count: 2, title: "Müəllif nəzarəti", text: "Tikinti meydançasından kadrlar: detallara necə nəzarət etdiyinizi müştəri öz gözü ilə görür." },
  { count: 1, title: "Müştəri rəyi", text: "Təhvil günü, yeni evində müştəri danışır. Satışı ən çox bağlayan video budur." },
] as const;

export const HIGH_TICKET_POINTS = [
  "İnteryer layihəsi on minlərlə manatlıq qərardır — müştəri sizi videonun keyfiyyətinə görə qiymətləndirir.",
  "Ucuz görünən video premium xidməti ucuzlaşdırır. Kadr layihənin səviyyəsində olmalıdır.",
  "Premium müştəri az, amma dəyərlidir: tək bir yeni müqavilə aylarla video büdcəsini qaytara bilər.",
] as const;

// ---------------------------------------------------------------------------
// Bizimlə işləyən brendlər — kiçik lent
// ---------------------------------------------------------------------------
export const BRAND_COUNT = "35+";

export type BrandLogo = { name: string; src: string; kind: "mark" | "mono" | "avatar" };

const mark = (file: string, name: string): BrandLogo => ({ name, src: `/logos/${file}.png`, kind: "mark" });
const mono = (path: string, name: string): BrandLogo => ({
  name,
  src: `https://res.cloudinary.com/o7779yth/image/upload/w_240,q_auto,f_auto/${path}`,
  kind: "mono",
});
const avatar = (file: string, name: string): BrandLogo => ({ name, src: `/brands/${file}.jpg`, kind: "avatar" });

export const BRAND_LOGOS: BrandLogo[] = [
  mark("samsung", "Samsung"),
  mono("v1793397312/Pasha_Holding_logo.png", "Pasha Holding"),
  mark("pepsi", "Pepsi"),
  mono("v1793397308/audi-14-logo-black-and-white.png", "Audi"),
  mark("lays", "Lay's"),
  mono("v1793397309/Binance_Logo.png", "Binance"),
  mark("abb", "ABB"),
  avatar("graco", "Graco"),
  avatar("titan", "Titan"),
  avatar("skytemplex", "SkyTemple X"),
  avatar("auropainting", "Auro Painting"),
  avatar("papropainting", "Papro Painting"),
  avatar("vvs-autodetail", "VVS Auto Detail"),
  avatar("john-rothman", "John Rothman"),
  avatar("illustration-ca", "Illustration"),
];

// WhatsApp mesajı
export function buildWhatsAppUrl(tierId?: TierId) {
  const tier = TIERS.find((t) => t.id === tierId);
  const body = tier
    ? `${tier.name} səviyyəsində ${OFFER.videoCount} video (${tier.price} ${OFFER.currency}) ilə maraqlanırıq.`
    : "Video təklifinə baxdıq, ətraflı danışmaq istərdik.";
  const text = encodeURIComponent(`Salam, ${CLIENT.name} adından yazırıq. ${body}`);
  return `https://wa.me/${OFFER.whatsappNumber}?text=${text}`;
}
