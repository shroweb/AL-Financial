import { PageMeta } from "@/components/PageMeta";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type MouseEvent } from "react";
import { Link } from "wouter";

const services = [
  {
    title: "Life Cover",
    desc: "A lump sum for the people who depend on you if you die during the policy term.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/pregnant.jpg",
    href: "/services/life-cover",
    proof: "Family protection",
  },
  {
    title: "Critical Illness",
    desc: "Tax-free support if you are diagnosed with a specified serious illness.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/critical-ilness.jpg",
    href: "/services/critical-illness",
    proof: "Breathing room",
  },
  {
    title: "Income Protection",
    desc: "A regular income if illness or injury means you cannot work.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/iStock-642036060.jpg",
    href: "/services/income-protection",
    proof: "Monthly income",
  },
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

export default function Home() {
  const { ref: servicesRef, inView: servicesInView } = useInView();
  const { ref: pathsRef, inView: pathsInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

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

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src="https://aandlfinancial.com/wp-content/uploads/2018/06/iStock-672386182-5a78f5346bf0690037752017.jpg"
            alt="Family relaxing together at home"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0D1B2A_0%,rgba(13,27,42,.92)_38%,rgba(13,27,42,.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(88vh-5rem)] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/72 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Hull mortgage and protection advice
            </div>
            <h1 className="max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Protection built around your life.
              <span className="block text-white/58">
                Not a product brochure.
              </span>
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

      <section ref={pathsRef} className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-10 lg:grid-cols-[.75fr_1.25fr] reveal ${pathsInView ? "in-view" : ""}`}
          >
            <div>
              <span className="gold-rule" />
              <h2 className="text-4xl leading-tight text-navy md:text-5xl">
                Start with what is happening in your life.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {audiencePaths.map((path, index) => (
                <Link
                  key={path.title}
                  href={path.href}
                  className={`group border border-navy/10 bg-white p-6 shadow-[0_24px_60px_rgba(13,27,42,.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/70 reveal reveal-delay-${index + 1} ${pathsInView ? "in-view" : ""}`}
                >
                  <p className="text-xl leading-tight text-navy">
                    {path.title}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {path.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-gold">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef}
            className={`mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end reveal ${servicesInView ? "in-view" : ""}`}
          >
            <div className="max-w-2xl">
              <span className="gold-rule" />
              <h2 className="text-4xl text-navy md:text-5xl">
                What we help with
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-gray-600">
              Mortgage advice and personal protection sit together. The right
              plan should protect the loan, the income, and the people behind
              it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
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
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
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

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {whyPoints.map((point, index) => (
              <div
                key={point.num}
                className={`grid gap-8 py-10 md:grid-cols-[8rem_1fr_1.5fr] md:items-start reveal reveal-delay-${index + 1} ${whyInView ? "in-view" : ""}`}
              >
                <span className="text-5xl leading-none text-gold/25">
                  {point.num}
                </span>
                <h3 className="text-3xl text-gold">{point.title}</h3>
                <p className="text-lg leading-8 text-white/66">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEE9DC] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="gold-rule" />
            <h2 className="text-4xl leading-tight text-navy md:text-5xl">
              A small firm feel with proper market access.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-700">
              A&L is personal by design. You speak to Anthony, you know what is
              being recommended, and you understand why it suits your
              circumstances.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Mortgage fee", "£457 to £997, agreed before work begins"],
              [
                "Insurance advice",
                "No client fee, commission paid by provider",
              ],
              ["Advice style", "Home, office, or phone appointments"],
              [
                "Regulatory status",
                "Appointed representative of PRIMIS Mortgage Network",
              ],
            ].map(([label, value]) => (
              <div key={label} className="border border-navy/10 bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {label}
                </p>
                <p className="mt-4 text-xl leading-snug text-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <p className="max-w-sm text-base leading-7 text-gray-600">
              Real feedback from people Anthony has helped with mortgages,
              protection, and the decisions around both.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <article
              className={`border border-navy/10 bg-navy p-8 text-white shadow-[0_28px_80px_rgba(13,27,42,.14)] md:p-10 lg:col-span-7 lg:min-h-[31rem] reveal reveal-delay-1 ${testimonialsInView ? "in-view" : ""}`}
            >
              <div className="flex h-full flex-col justify-between gap-12">
                <p className="text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  “{testimonials[0].text}”
                </p>
                <div>
                  <p className="text-2xl text-gold">{testimonials[0].name}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                    {testimonials[0].meta}
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-5 lg:col-span-5">
              {testimonials.slice(1).map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className={`border border-navy/10 bg-white p-7 shadow-[0_24px_70px_rgba(13,27,42,.05)] reveal reveal-delay-${index + 2} ${testimonialsInView ? "in-view" : ""}`}
                >
                  <p className="text-2xl leading-snug text-navy">
                    “{testimonial.text}”
                  </p>
                  <div className="mt-8 border-t border-navy/10 pt-5">
                    <p className="text-xl text-navy">{testimonial.name}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                      {testimonial.meta}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:col-span-12">
              {[
                ["Same-day progress", "Mortgage sorted once documents were in"],
                ["First-time buyers", "Support through specific requirements"],
                ["Stress reduced", "Clear answers from start to finish"],
              ].map(([label, value], index) => (
                <article
                  key={label}
                  className={`border border-navy/10 bg-[#EEE9DC] p-6 reveal reveal-delay-${index + 1} ${testimonialsInView ? "in-view" : ""}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {label}
                  </p>
                  <p className="mt-4 text-xl leading-snug text-navy">{value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`bg-gold py-20 reveal ${ctaInView ? "in-view" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/55">
              Free first conversation
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-navy md:text-5xl">
              Not sure what cover you need? That's exactly what Anthony is here
              for.
            </h2>
          </div>
          <Link href="/contact" className="btn-al btn-al-navy shrink-0">
            Book a free appointment
          </Link>
        </div>
      </section>
    </>
  );
}
