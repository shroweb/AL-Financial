import { PageMeta } from "@/components/PageMeta";
import { Link } from "wouter";

export default function About() {
  return (
    <>
      <PageMeta 
        title="About A&L Financial | Protection advice from someone who listens" 
        description="A&L Financial Solutions was founded by Anthony Thackeray and is based in Hull, providing expert advice on mortgages and protection." 
      />
      
      <div className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
                A&L Financial, Protection advice from someone who listens
              </h1>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A&L Financial Solutions was founded by Anthony Thackeray and is based in Hull. Anthony works directly with clients, which means you will always deal with the same person from the first conversation through to the point where your cover is arranged.
                </p>
                <p>
                  The firm holds appointed representative status with PRIMIS Mortgage Network, a trading name of First Complete Limited, which is authorised and regulated by the Financial Conduct Authority. This means the advice you receive is regulated, and you have the protections that come with that.
                </p>
                <p>
                  Anthony advises on a wide range of products: life cover, critical illness, income protection, accident cover, family income benefit, home insurance, mortgage protection, and mortgage brokering. He also helps clients consider trusts and wills where relevant. Each client's situation is different, and that is where Anthony starts, with your circumstances, not a standard product menu.
                </p>
                <p>
                  Appointments can be arranged at your home, at an office, or by phone. Whatever works best for you.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                <img 
                  src="https://aandlfinancial.com/wp-content/uploads/2018/06/team-meeting.png" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-navy p-8 rounded-sm shadow-lg max-w-sm hidden md:block">
                <h3 className="font-serif text-2xl text-gold mb-2">Our Process</h3>
                <ol className="space-y-3 text-white text-sm">
                  <li><strong>Step 1:</strong> Book an appointment (home, office, or phone)</li>
                  <li><strong>Step 2:</strong> Anthony reviews your situation and what you need</li>
                  <li><strong>Step 3:</strong> He recommends the most suitable option from across the market</li>
                </ol>
              </div>
            </div>

          </div>

          <div className="mt-16 md:hidden bg-navy p-8 rounded-sm shadow-lg">
            <h3 className="font-serif text-2xl text-gold mb-4">Our Process</h3>
            <ol className="space-y-4 text-white">
              <li><strong>Step 1:</strong> Book an appointment (home, office, or phone)</li>
              <li><strong>Step 2:</strong> Anthony reviews your situation and what you need</li>
              <li><strong>Step 3:</strong> He recommends the most suitable option from across the market</li>
            </ol>
          </div>
        </div>
      </div>
      
      <section className="bg-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-navy">
            Ready to find the right cover for your situation?
          </h2>
          <Link href="/contact" className="shrink-0 bg-navy text-white font-semibold px-8 py-4 rounded-sm hover:bg-gray-900 transition-colors">
            Book a free appointment
          </Link>
        </div>
      </section>
    </>
  );
}
