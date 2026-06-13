import { PageMeta } from "@/components/PageMeta";
import { Link } from "wouter";

export default function Home() {
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
      <section className="relative bg-navy pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://aandlfinancial.com/wp-content/uploads/2018/06/iStock-672386182-5a78f5346bf0690037752017.jpg" 
            alt="Family in home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Protection built around your life. Not a product brochure.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Anthony Thackeray at A&L Financial takes time to understand your situation, then finds cover that actually fits it.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/contact" className="inline-block bg-gold text-navy font-semibold px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors">
                Start a conversation
              </Link>
              <a href="#services" onClick={scrollToServices} className="text-white font-medium underline underline-offset-4 hover:text-gold transition-colors">
                See our services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-16">What we help with</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Life Cover",
                desc: "A lump sum to ensure the people who depend on you are not left struggling financially.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/pregnant.jpg",
                href: "/services/life-cover"
              },
              {
                title: "Critical Illness",
                desc: "A tax-free lump sum if you are diagnosed with a specified serious condition, giving you breathing room.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/critical-ilness.jpg",
                href: "/services/critical-illness"
              },
              {
                title: "Income Protection",
                desc: "A regular income if illness or injury leaves you unable to work and earn.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/critical-ilness.jpg",
                href: "/services/income-protection"
              },
              {
                title: "Mortgage Broker",
                desc: "Expert market searches to find a mortgage deal that fits your specific circumstances.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/07/family-hands-house.png",
                href: "/services/mortgage-broker"
              },
              {
                title: "Mortgage Protection",
                desc: "Ensure your outstanding mortgage balance is paid off so your family keeps the home.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/07/family-hands-house.png",
                href: "/services/mortgage-protection"
              },
              {
                title: "Home Insurance",
                desc: "Cover the cost of repairing your home and replacing your belongings if something goes wrong.",
                img: "https://aandlfinancial.com/wp-content/uploads/2018/06/yellow-house.jpg",
                href: "/services/home-insurance"
              }
            ].map((s) => (
              <div key={s.href} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-navy mb-3">{s.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{s.desc}</p>
                  <Link href={s.href} className="text-navy font-semibold hover:text-gold transition-colors inline-flex items-center gap-1">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why A&L */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">The difference is in how we work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold">We come to you</h3>
              <p className="text-white/80 leading-relaxed">Appointments at home, at your office, or by phone, whichever works for you. There is no need to take time out of your day to travel to us.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold">We search the market</h3>
              <p className="text-white/80 leading-relaxed">Anthony has access to a panel of insurers and lenders, not just one. That means the recommendations you get are based on what fits your situation, not what one company offers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold">We explain everything</h3>
              <p className="text-white/80 leading-relaxed">Financial products can be confusing. Anthony will talk you through your options in plain English, without jargon or pressure, so you can make the decision that is right for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-16 text-center">What clients say</h2>
          
          <div className="space-y-12">
            {[
              {
                name: "Rebecca Poole",
                text: "Anthony at A&L has been professional, understanding, efficient and kind. Our mortgage was sorted the same day we sent our documentation. I can't recommend him enough."
              },
              {
                name: "Siobhan Dunn",
                text: "As first-time buyers with specific requirements, Anthony was instrumental in making it happen. Quick, responsive, and he went above and beyond from start to finish."
              },
              {
                name: "Alexander Marsh",
                text: "We didn't have a clue where to start. Anthony set our minds at ease, took all the stress out of the process, and found us the best mortgage rate possible. Would recommend to anyone."
              }
            ].map((t) => (
              <div key={t.name} className="border-l-4 border-gold pl-6 py-2">
                <p className="text-xl md:text-2xl font-serif text-navy leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-navy">
            Not sure what cover you need? That's exactly what we're here for.
          </h2>
          <Link href="/contact" className="shrink-0 bg-navy text-white font-semibold px-8 py-4 rounded-sm hover:bg-gray-900 transition-colors">
            Book a free appointment
          </Link>
        </div>
      </section>
    </>
  );
}
