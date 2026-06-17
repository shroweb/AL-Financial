import { PageMeta } from "@/components/PageMeta";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import { type MouseEvent } from "react";
import { Link } from "wouter";

const services = [
  {
    title: "Mortgage Broker",
    desc: "A search across a wide panel of lenders for a mortgage that fits your circumstances.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/family-at-home.png",
    href: "/services/mortgage-broker",
    proof: "Lender panel",
  },
  {
    title: "Mortgage Protection",
    desc: "Cover designed to help your family keep the home if the worst happens.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/636367553381306204-yellow-door-ThinkstockPhotos-156211936.jpg",
    href: "/services/mortgage-protection",
    proof: "Home security",
  },
  {
    title: "Home Insurance",
    desc: "Buildings and contents cover matched to the home and belongings you actually have.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/house-insurance-premiums.jpg",
    href: "/services/home-insurance",
    proof: "Practical cover",
  },
];

const audiencePaths = [
  {
    title: "Buying your first home",
    desc: "Understand what you can borrow, which lender is likely to fit, and what protection belongs beside the mortgage.",
    href: "/services/mortgage-broker",
  },
  {
    title: "Protecting your family",
    desc: "Put the right mix of life cover, critical illness, and income protection around the people who rely on you.",
    href: "/services/life-cover",
  },
  {
    title: "Reviewing old policies",
    desc: "Check whether existing cover still matches your mortgage, income, family, and current health situation.",
    href: "/contact",
  },
];

const whyPoints = [
  {
    num: "01",
    title: "We come to you",
    desc: "Appointments can happen at home, at your office, or by phone. Advice fits around real life, not the other way around.",
  },
  {
    num: "02",
    title: "We search the market",
    desc: "Anthony has access to a panel of insurers and lenders. The recommendation is shaped by your situation, not one provider's product list.",
  },
  {
    num: "03",
    title: "We explain everything",
    desc: "You get plain English, clear costs, and time to ask questions. No pressure, no mystery, no jargon dressed up as expertise.",
  },
];

const testimonials = [
  {
    name: "Rebecca Poole",
    meta: "Mortgage and protection client",
    text: "Anthony at A&L has been professional, understanding, efficient and kind. Our mortgage was sorted the same day we sent our documentation. I can't recommend him enough.",
  },
  {
    name: "Siobhan Dunn",
    meta: "First-time buyer",
    text: "As first-time buyers with specific requirements, Anthony was instrumental in making it happen. Quick, responsive, and he went above and beyond from start to finish.",
  },
  {
    name: "Alexander Marsh",
    meta: "Home buyer",
    text: "We didn't have a clue where to start. Anthony set our minds at ease, took all the stress out of the process, and found us the best mortgage rate possible. Would recommend to anyone.",
  },
];

const trustItems = [
  "FCA regulated advice",
  "Appointed representative of PRIMIS",
  "Hull based, UK focused",
  "No fee for insurance advice",
];

const partners = [
  { name: "Aviva", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/logo-aviva-200x125.jpg" },
  { name: "Legal & General", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/legal-and-general.gif" },
  { name: "Vitality", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/vitality-200x115.jpg" },
  { name: "Cirencester", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/download-1-1-200x74.png" },
  { name: "Royal London", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/royal-london-logo-200x117.png" },
  { name: "LV", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/lv-logo-1000x284-1-200x57.jpg" },
  { name: "AIG", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/AIG_logo.svg-1-200x108.png" },
  { name: "Exeter", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/http_2F2Fs3-eu-west-1.amazonaws.com2Ffta-assets-development2Fez2Fimages2F22F92F92F72F1167992-1-eng-GB2FEX_Logo_CMYK1-200x77.jpg" },
  { name: "Zurich", img: "https://aandlfinancial.com/wp-content/uploads/2018/06/Zurich-Logo-Wallpaper-200x145.jpg" },
];

const howItWorks = [
  {
    num: "01",
    title: "Book an appointment",
    desc: "Home, office, or phone — whichever works best for you. No need to travel.",
  },
  {
    num: "02",
    title: "Anthony reviews your situation",
    desc: "He takes time to understand your circumstances and what you actually need, not what looks good on paper.",
  },
  {
    num: "03",
    title: "He recommends the right option",
    desc: "A recommendation from across the market, explained clearly and without pressure to proceed.",
  },
];

const brokerComparison = {
  bank: [
    "Limited to that bank's mortgage products",
    "Rate may not be the most competitive available",
    "Staff incentivised to sell their lender's products",
    "No cross-lender comparison in one place",
    "Protection advice rarely included",
  ],
  broker: [
    "Whole-of-market search across the panel",
    "Anthony finds what fits your circumstances",
    "Advice shaped by you, not a product menu",
    "Compare dozens of lenders in one conversation",
    "Mortgage and protection planned together",
  ],
};

const GOOGLE_RATING = 5.0;
const GOOGLE_REVIEW_COUNT = 59;
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=a+and+l+financial#lrd=0x4878bfb14866fee9:0xbf37845f49d8ef65,1,,,,";

// Update these with your actual business stats
const statsData = [
  { value: "500+", label: "Clients helped" },
  { value: "£0", label: "Insurance advice fee" },
  { value: "90+", label: "Lenders on the panel" },
  { value: "24hr", label: "Typical first response" },
];

export default function Home() {
  const { ref: servicesRef, inView: servicesInView } = useInView();
  const { ref: pathsRef, inView: pathsInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();
  const { ref: howRef, inView: howInView } = useInView();
  const { ref: brokerRef, inView: brokerInView } = useInView();
  const { ref: lendersRef, inView: lendersInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  const scrollToServices = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageMeta
        title="A&L Financial Solutions | Mortgage and protection advice in Hull"
        description="Premium local mortgage and protection advice from Anthony Thackeray at A&L Financial Solutions in Hull."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src="https://aandlfinancial.com/wp-content/uploads/2018/06/iStock-672386182-5a78f5346bf0690037752017.jpg"
            alt="Family relaxing together at home"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0D1B2A_0%,rgba(13,27,42,.92)_38%,rgba(13,27,42,.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(88vh-5rem)] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/72 backdrop-blur">
              Hull mortgage and protection advice
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Protection built around your life.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              Anthony Thackeray takes time to understand what matters, then
              searches across a panel of lenders and insurers for cover that
              actually fits.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-al btn-al-gold">
                Start a conversation
              </Link>
              <a
                href="#services"
                onClick={scrollToServices}
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white/72 transition-colors hover:text-gold"
              >
                See our services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#091420] py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-4 sm:px-6 lg:px-8">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/52"
            >
              <CheckCircle2 className="h-4 w-4 text-gold/80" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Choose your protection */}
      <section className="bg-gold py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="block w-12 h-0.5 bg-navy/30 mb-6" />
            <h2 className="text-4xl text-navy md:text-5xl">
              Choose your protection
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-navy/60">
              Personal cover tailored to you — not a standard product from a shelf.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Life Cover",
                desc: "A lump sum paid to the people who depend on you if you die during the policy term.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/pregnant.jpg",
                href: "/services/life-cover",
              },
              {
                title: "Critical Illness",
                desc: "Tax-free support the moment you are diagnosed with a specified serious illness.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/critical-ilness.jpg",
                href: "/services/critical-illness",
              },
              {
                title: "Income Protection",
                desc: "A regular replacement income if illness or injury stops you working.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/iStock-642036060.jpg",
                href: "/services/income-protection",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#091420] via-[#091420]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-2xl font-serif text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{card.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-opacity group-hover:opacity-80">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef}
            className={`mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end reveal ${servicesInView ? "in-view" : ""}`}
          >
            <div className="max-w-2xl">
              <span className="gold-rule" />
              <h2 className="text-4xl text-navy md:text-5xl">
                We also help with
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group bg-white reveal reveal-delay-${Math.min(index + 1, 4)} ${servicesInView ? "in-view" : ""}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-88 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="min-h-[15rem] p-7">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">
                      {service.proof}
                    </span>
                    <ArrowRight className="h-4 w-4 text-navy/35 transition group-hover:translate-x-1 group-hover:text-gold" />
                  </div>
                  <h3 className="text-2xl text-navy">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section ref={lendersRef} className="border-b border-navy/10 bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className={`mb-10 text-center text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 reveal ${lendersInView ? "in-view" : ""}`}
          >
            Who we work with
          </p>
          <div
            className={`flex flex-wrap items-center justify-center gap-6 reveal reveal-delay-1 ${lendersInView ? "in-view" : ""}`}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center border border-navy/10 bg-white px-6 py-4 w-36 h-20 transition-all hover:border-navy/20 hover:shadow-sm"
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why use a broker */}
      <section ref={brokerRef} className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`mb-14 reveal ${brokerInView ? "in-view" : ""}`}>
            <span className="gold-rule" />
            <h2 className="text-4xl text-navy md:text-5xl">
              Why use a broker?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Going directly to a bank gets you one lender's range. A broker
              gets you the market.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className={`border border-navy/10 p-8 reveal reveal-delay-1 ${brokerInView ? "in-view" : ""}`}
            >
              <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Going to your bank
              </h3>
              <ul className="space-y-5">
                {brokerComparison.bank.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-500"
                  >
                    <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border border-gray-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`border border-gold/40 bg-navy p-8 reveal reveal-delay-2 ${brokerInView ? "in-view" : ""}`}
            >
              <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Using A&L Financial
              </h3>
              <ul className="space-y-5">
                {brokerComparison.broker.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-white/80"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why us — redesigned as cards */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={whyRef}
            className={`max-w-3xl reveal ${whyInView ? "in-view" : ""}`}
          >
            <span className="gold-rule" />
            <h2 className="text-4xl leading-tight text-white md:text-5xl">
              The difference is in how we work
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyPoints.map((point, index) => (
              <div
                key={point.num}
                className={`border border-white/10 p-8 reveal reveal-delay-${index + 1} ${whyInView ? "in-view" : ""}`}
              >
                <span className="text-6xl font-serif leading-none text-gold">
                  {point.num}
                </span>
                <h3 className="mt-6 text-xl font-serif text-white">
                  {point.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/60">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section ref={howRef} className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`mb-14 reveal ${howInView ? "in-view" : ""}`}>
            <span className="gold-rule" />
            <h2 className="text-4xl text-navy md:text-5xl">How it works</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Three straightforward steps from first contact to cover in place.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <div
                key={step.num}
                className={`border border-navy/10 bg-white p-8 reveal reveal-delay-${i + 1} ${howInView ? "in-view" : ""}`}
              >
                <span className="text-6xl font-serif leading-none text-navy/10">
                  {step.num}
                </span>
                <h3 className="mt-6 text-xl font-serif text-navy">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsRef}
            className={`mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end reveal ${testimonialsInView ? "in-view" : ""}`}
          >
            <div>
              <span className="gold-rule" />
              <h2 className="text-4xl text-navy md:text-5xl">
                What clients say
              </h2>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* Google Reviews badge — update GOOGLE_RATING, GOOGLE_REVIEW_COUNT, and GOOGLE_REVIEWS_URL */}
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-3 border border-navy/10 bg-white p-3 shadow-sm transition-colors hover:border-navy/20"
                aria-label={`${GOOGLE_REVIEW_COUNT} Google reviews, rated ${GOOGLE_RATING}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]"
                      />
                    ))}
                    <span className="ml-1.5 text-sm font-semibold text-navy">
                      {GOOGLE_RATING}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {GOOGLE_REVIEW_COUNT} reviews on Google
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`flex flex-col border border-navy/10 bg-white p-7 shadow-[0_20px_60px_rgba(13,27,42,.06)] reveal reveal-delay-${Math.min(index + 1, 4)} ${testimonialsInView ? "in-view" : ""}`}
              >
                <div className="mb-4 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="flex-grow text-base leading-7 text-gray-700">
                  "{testimonial.text}"
                </p>
                <div className="mt-7 border-t border-navy/8 pt-5">
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                    {testimonial.meta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — redesigned with phone number prominent */}
      <section
        ref={ctaRef}
        className={`bg-gold py-24 reveal ${ctaInView ? "in-view" : ""}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/55">
                Free first conversation
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-navy md:text-5xl">
                Not sure what cover you need? That's exactly what Anthony is
                here for.
              </h2>
              <div className="mt-8 flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-navy/60" />
                <a
                  href="tel:07715832346"
                  className="text-3xl font-serif text-navy transition-opacity hover:opacity-70"
                >
                  07715 832346
                </a>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <Link href="/contact" className="btn-al btn-al-navy">
                Book a free appointment
              </Link>
              <p className="text-center text-xs text-navy/55">
                No obligation. No pressure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
