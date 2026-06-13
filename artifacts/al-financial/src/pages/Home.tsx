import { PageMeta } from "@/components/PageMeta";
import { Link } from "wouter";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    title: "Life Cover",
    desc: "A lump sum to ensure the people who depend on you are not left struggling financially.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/pregnant.jpg",
    href: "/services/life-cover",
    span: "md:col-span-7",
    imgHeight: "h-80",
  },
  {
    title: "Critical Illness",
    desc: "A tax-free lump sum if you are diagnosed with a specified serious condition, giving you breathing room.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/critical-ilness.jpg",
    href: "/services/critical-illness",
    span: "md:col-span-5",
    imgHeight: "h-80",
  },
  {
    title: "Income Protection",
    desc: "A regular income if illness or injury leaves you unable to work and earn.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/critical-ilness.jpg",
    href: "/services/income-protection",
    span: "md:col-span-5",
    imgHeight: "h-72",
  },
  {
    title: "Mortgage Broker",
    desc: "Expert market searches to find a mortgage deal that fits your specific circumstances.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/07/family-hands-house.png",
    href: "/services/mortgage-broker",
    span: "md:col-span-7",
    imgHeight: "h-72",
  },
  {
    title: "Mortgage Protection",
    desc: "Ensure your outstanding mortgage balance is paid off so your family keeps the home.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/07/family-hands-house.png",
    href: "/services/mortgage-protection",
    span: "md:col-span-6",
    imgHeight: "h-64",
  },
  {
    title: "Home Insurance",
    desc: "Cover the cost of repairing your home and replacing your belongings if something goes wrong.",
    img: "https://aandlfinancial.com/wp-content/uploads/2018/06/yellow-house.jpg",
    href: "/services/home-insurance",
    span: "md:col-span-6",
    imgHeight: "h-64",
  },
];

const whyPoints = [
  {
    num: "01",
    title: "We come to you",
    desc: "Appointments at home, at your office, or by phone, whichever works for you. There is no need to take time out of your day to travel to us.",
  },
  {
    num: "02",
    title: "We search the market",
    desc: "Anthony has access to a panel of insurers and lenders, not just one. The recommendations you get are based on what fits your situation, not what one company offers.",
  },
  {
    num: "03",
    title: "We explain everything",
    desc: "Financial products can be confusing. Anthony will talk you through your options in plain English, without jargon or pressure, so you can make the decision that is right for you.",
  },
];

const testimonials = [
  {
    name: "Rebecca Poole",
    text: "Anthony at A&L has been professional, understanding, efficient and kind. Our mortgage was sorted the same day we sent our documentation. I can't recommend him enough.",
  },
  {
    name: "Siobhan Dunn",
    text: "As first-time buyers with specific requirements, Anthony was instrumental in making it happen. Quick, responsive, and he went above and beyond from start to finish.",
  },
  {
    name: "Alexander Marsh",
    text: "We didn't have a clue where to start. Anthony set our minds at ease, took all the stress out of the process, and found us the best mortgage rate possible. Would recommend to anyone.",
  },
];

export default function Home() {
  const { ref: servicesRef, inView: servicesInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageMeta
        title="A&L Financial Solutions | Protection built around your life"
        description="Hull-based financial advice firm specialising in mortgages, life cover, and personal protection insurance."
      />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://aandlfinancial.com/wp-content/uploads/2018/06/iStock-672386182-5a78f5346bf0690037752017.jpg"
            alt="Family at home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="gold-rule" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.06] mb-7">
              Protection built around your life.{" "}
              <em className="not-italic text-white/60">
                Not a product brochure.
              </em>
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
              Anthony Thackeray at A&L Financial takes time to understand your
              situation, then finds cover that actually fits it.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Link
                href="/contact"
                className="btn-al btn-al-gold"
                data-testid="link-hero-cta"
              >
                Start a conversation
              </Link>
              <a
                href="#services"
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 text-white/70 text-sm tracking-wide hover:text-gold transition-colors pt-4"
                data-testid="link-hero-services"
              >
                <span className="w-8 h-px bg-white/40 inline-block" />
                See our services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FCA Trust Strip */}
      <div className="bg-[#0a1622] border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              "FCA Regulated",
              "Whole of Market Access",
              "Hull-based Adviser",
              "No fee for insurance advice",
            ].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3 sm:gap-6">
                <span className="text-xs uppercase tracking-widest text-white/45 whitespace-nowrap">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-gold/40 text-sm">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef}
            className={`mb-16 reveal ${servicesInView ? "in-view" : ""}`}
          >
            <span className="gold-rule" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              What we help with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {services.map((s, i) => (
              <div
                key={s.href}
                className={`group relative overflow-hidden bg-white ${s.span} reveal reveal-delay-${Math.min(i + 1, 4)} ${servicesInView ? "in-view" : ""}`}
              >
                <div
                  className={`w-full overflow-hidden ${s.imgHeight}`}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/90 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-serif text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="text-gold text-xs uppercase tracking-widest font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                {/* Default label (visible when not hovering) */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-navy mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why A&L */}
      <section className="py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whyRef}
            className={`mb-0 reveal ${whyInView ? "in-view" : ""}`}
          >
            <span className="gold-rule" />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-0">
              The difference is in how we work
            </h2>
          </div>

          <div className="mt-0 divide-y divide-white/10">
            {whyPoints.map((point, i) => (
              <div
                key={point.num}
                className={`grid grid-cols-12 gap-6 py-14 reveal reveal-delay-${i + 1} ${whyInView ? "in-view" : ""}`}
              >
                <div className="col-span-2 sm:col-span-1 flex items-start pt-1">
                  <span className="text-5xl md:text-6xl font-serif text-gold/15 leading-none select-none">
                    {point.num}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">
                    {point.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-lg">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsRef}
            className={`mb-16 reveal ${testimonialsInView ? "in-view" : ""}`}
          >
            <span className="gold-rule" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              What clients say
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`py-14 first:pt-0 last:pb-0 reveal reveal-delay-${i + 1} ${testimonialsInView ? "in-view" : ""}`}
              >
                <p className="text-2xl md:text-3xl font-serif text-navy leading-snug mb-7">
                  "{t.text}"
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        ref={ctaRef}
        className={`bg-gold py-20 reveal ${ctaRef ? "in-view" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-navy/50 mb-3">
              Free consultation
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy max-w-lg">
              Not sure what cover you need? That's exactly what we're here for.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-al btn-al-navy shrink-0"
            data-testid="link-cta-book"
          >
            Book a free appointment
          </Link>
        </div>
      </section>
    </>
  );
}
