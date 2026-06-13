import { PageMeta } from "@/components/PageMeta";
import { Link } from "wouter";
import { useInView } from "@/hooks/use-in-view";

const servicesData = {
  "life-cover": {
    title: "Life Cover",
    intro:
      "Life cover pays a lump sum to your family if you die during the policy term. It is one of the simplest ways to make sure that, if the worst happens, the people who depend on you are not left struggling financially.",
    covers: [
      "A lump sum paid to your beneficiaries if you die within the policy term",
      "Can be used to pay off a mortgage, replace lost income, or provide a financial cushion for your family",
      "Premiums are fixed at the outset, based on your age, health, the amount of cover, and the term length",
      "Joint and single policies are available depending on your circumstances",
    ],
    who: "Life cover is relevant for anyone with financial dependants, a mortgage, or both. It matters most when your income is keeping others afloat, whether that is a partner, children, or a parent. If you are not sure whether you need it or how much cover makes sense, that is exactly the kind of question Anthony can help you work through.",
    how: "Anthony searches across a panel of insurers, not just one provider. The policy he recommends will be based on your situation: what you need to cover, how long for, and what fits your budget. There is no obligation, and no pressure to proceed.",
  },
  "critical-illness": {
    title: "Critical Illness Cover",
    intro:
      "Critical illness cover pays a tax-free lump sum if you are diagnosed with one of a list of specified serious conditions. Unlike life insurance, it pays out while you are still alive, giving you financial breathing room when you need it most.",
    covers: [
      "A tax-free lump sum on diagnosis of a specified serious illness, typically including cancer, heart attack, and stroke",
      "Can be used for private treatment, adaptations to your home, or to replace income while you recover",
      "The list of covered conditions varies between providers, which is why comparison matters",
      "Some policies include children's critical illness cover as standard or as an add-on",
    ],
    who: "Critical illness cover is worth considering if you would struggle financially in the event of a serious diagnosis. Statutory sick pay and employer sick pay only go so far. If you have a mortgage, dependants, or a job that you could not do from a hospital bed, a critical illness payout could make a significant difference to your recovery.",
    how: "Not all critical illness policies cover the same conditions. Anthony will compare policies from across his panel of providers and explain the key differences in plain terms, so you can choose the cover that actually reflects your needs.",
  },
  "income-protection": {
    title: "Income Protection",
    intro:
      "Income protection pays a regular income if you are unable to work due to illness or injury. It is designed to cover the gap between what you earn and what you would receive from statutory or employer sick pay.",
    covers: [
      "A regular monthly income if you cannot work due to illness or injury",
      "Typically covers a percentage of your pre-illness earnings",
      "Continues paying until you return to work, reach the end of the benefit period, or retire",
      "The deferred period and benefit period are agreed when you take out the policy",
    ],
    who: "Most people have more financial commitments than their employer sick pay or statutory sick pay will cover. If you are self-employed, statutory sick pay does not apply at all. Income protection is particularly relevant for anyone whose income would stop within weeks of being unable to work, and who has mortgage payments, rent, or a family to support.",
    how: "Anthony will look at what you already have in place, whether that is employer sick pay, savings, or other cover, and help you work out what gap exists and how to fill it. He then searches the market to find cover that fits your occupation, your income, and your budget.",
  },
  "mortgage-broker": {
    title: "Mortgage Broker",
    intro:
      "Finding the right mortgage is rarely straightforward. Rates change, lender criteria differ, and the deal you can get depends on your specific circumstances. Anthony searches the mortgage market on your behalf to find an option that fits.",
    covers: [
      "Mortgage searches across a wide panel of lenders, including products not available direct to consumers",
      "Advice for first-time buyers, home movers, and those remortgaging",
      "A clear explanation of your options before you commit to anything",
      "A fixed fee of between £457 and £997, agreed before any work begins and payable on completion",
    ],
    who: "Anthony helps first-time buyers who are not sure where to start, existing homeowners looking to remortgage at the end of a fixed term, and people moving to a new property. If your situation is straightforward or complex, it is worth getting advice before applying directly.",
    how: "As a mortgage broker, Anthony has access to lenders and rates that you may not find by going direct. He will take the time to understand your income, your deposit, and what you are trying to achieve, and present you with clear options. His fee is fixed and agreed in advance, so there are no surprises.",
  },
  "mortgage-protection": {
    title: "Mortgage Protection",
    intro:
      "Mortgage protection insurance is designed to pay off your outstanding mortgage balance if you die during the term of your loan. It means your family keeps the home even if you are no longer there to make the payments.",
    covers: [
      "Pays off the outstanding mortgage balance on death during the policy term",
      "Usually set up as decreasing term insurance, where the cover reduces roughly in line with the mortgage balance",
      "Can be combined with critical illness cover for additional protection",
      "Premiums are typically lower than level term life cover, reflecting the decreasing nature of the cover",
    ],
    who: "If you have a mortgage and people who depend on you, mortgage protection gives them a degree of security. It is particularly relevant for families where one income covers the majority of the mortgage payment, or where losing the home would have a significant impact.",
    how: "Anthony will look at your mortgage details, your existing life cover if you have any, and your wider circumstances before recommending the right type and level of protection. He works across a panel of providers to find an appropriate policy at the right price.",
  },
  "home-insurance": {
    title: "Home Insurance",
    intro:
      "Home insurance covers the cost of repairing or rebuilding your home and replacing your belongings if something goes wrong. Most mortgage lenders require buildings insurance as a condition of your loan.",
    covers: [
      "Buildings insurance: covers the structure of your home against damage from fire, flooding, subsidence, and other events",
      "Contents insurance: covers your belongings against theft, fire, flooding, and accidental damage",
      "Combined buildings and contents policies are available and often represent better value",
      "Level of cover and exclusions vary significantly between policies",
    ],
    who: "If you own your home and have a mortgage, buildings insurance is almost certainly a requirement of your lender. Contents insurance is worth considering for anyone who would struggle to replace their belongings out of pocket. If you are renting, contents insurance still applies to your possessions, even though your landlord covers the building.",
    how: "Anthony can search for home insurance alongside your mortgage or as a standalone policy. He will take the time to understand what you need covered and match you with an appropriate policy, rather than selling you the most expensive option on a panel.",
  },
};

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = servicesData[params.id as keyof typeof servicesData];
  const { ref: contentRef, inView: contentInView } = useInView();

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-serif text-navy">Service not found</h1>
        <Link href="/" className="text-gold mt-4 inline-block">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageMeta
        title={`${service.title} | A&L Financial Solutions`}
        description={service.intro}
      />

      {/* Dark navy page hero */}
      <section className="bg-navy pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/35 text-xs uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#services"
              className="hover:text-gold transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </nav>

          <span className="gold-rule" />
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-8">
            {service.title}
          </h1>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="bg-white py-20">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            className={`mb-14 reveal ${contentInView ? "in-view" : ""}`}
          >
            <h2 className="text-2xl font-serif text-navy mb-8 pb-4 border-b border-gray-100">
              What it covers
            </h2>
            <ul className="space-y-5">
              {service.covers.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-gray-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`mb-14 reveal reveal-delay-1 ${contentInView ? "in-view" : ""}`}
          >
            <h2 className="text-2xl font-serif text-navy mb-6 pb-4 border-b border-gray-100">
              Who it's for
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{service.who}</p>
          </div>

          <div
            className={`reveal reveal-delay-2 ${contentInView ? "in-view" : ""}`}
          >
            <h2 className="text-2xl font-serif text-navy mb-6 pb-4 border-b border-gray-100">
              How A&L helps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{service.how}</p>
          </div>
        </div>
      </div>

      {/* Full-width navy CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="gold-rule" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 max-w-xl">
            Ready to talk about {service.title.toLowerCase()}?
          </h2>
          <p className="text-white/55 mb-10 max-w-lg leading-relaxed">
            There's no obligation. Anthony will listen to your situation first
            and give you honest advice on what makes sense.
          </p>
          <Link
            href="/contact"
            className="btn-al btn-al-gold"
            data-testid={`link-service-cta-${params.id}`}
          >
            Talk to Anthony about {service.title}
          </Link>
        </div>
      </section>
    </>
  );
}
