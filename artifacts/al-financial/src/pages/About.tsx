import { PageMeta } from "@/components/PageMeta";
import { Link } from "wouter";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    num: "01",
    title: "Book an appointment",
    desc: "Home, office, or phone, whichever works best for you. There is no need to travel.",
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

export default function About() {
  const { ref: bodyRef, inView: bodyInView } = useInView();
  const { ref: stepsRef, inView: stepsInView } = useInView();

  return (
    <>
      <PageMeta
        title="About A&L Financial | Protection advice from someone who listens"
        description="A&L Financial Solutions was founded by Anthony Thackeray and is based in Hull, providing expert advice on mortgages and protection."
      />

      {/* Dark navy page hero */}
      <section className="bg-navy pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="gold-rule" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-3xl">
            Protection advice from someone who listens
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={bodyRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <div className={`reveal ${bodyInView ? "in-view" : ""}`}>
              <div className="space-y-7 text-lg text-gray-600 leading-relaxed">
                <p>
                  A&L Financial Solutions was founded by Anthony Thackeray and
                  is based in Hull. Anthony works directly with clients, which
                  means you will always deal with the same person from the first
                  conversation through to the point where your cover is arranged.
                </p>
                <p>
                  The firm holds appointed representative status with PRIMIS
                  Mortgage Network, a trading name of First Complete Limited,
                  which is authorised and regulated by the Financial Conduct
                  Authority. This means the advice you receive is regulated, and
                  you have the protections that come with that.
                </p>
                <p>
                  Anthony advises on a wide range of products: life cover,
                  critical illness, income protection, accident cover, family
                  income benefit, home insurance, mortgage protection, and
                  mortgage brokering. He also helps clients consider trusts and
                  wills where relevant. Each client's situation is different, and
                  that is where Anthony starts, with your circumstances, not a
                  standard product menu.
                </p>
                <p>
                  Appointments can be arranged at your home, at an office, or by
                  phone. Whatever works best for you.
                </p>
              </div>
            </div>

            <div
              className={`relative reveal reveal-delay-2 ${bodyInView ? "in-view" : ""}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://aandlfinancial.com/wp-content/uploads/2018/06/team-meeting.png"
                  alt="Anthony in a client meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-gold hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-24">
        <div
          ref={stepsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`mb-16 reveal ${stepsInView ? "in-view" : ""}`}>
            <span className="gold-rule" />
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`py-10 md:py-0 md:px-12 first:pl-0 last:pr-0 reveal reveal-delay-${i + 1} ${stepsInView ? "in-view" : ""}`}
              >
                <div className="text-5xl font-serif text-gold/20 leading-none mb-8 select-none">
                  {step.num}
                </div>
                <h3 className="text-xl font-serif text-gold mb-4">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-navy/50 mb-3">
              No obligation
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy">
              Ready to find the right cover for your situation?
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-al btn-al-navy shrink-0"
            data-testid="link-about-cta"
          >
            Book a free appointment
          </Link>
        </div>
      </section>
    </>
  );
}
