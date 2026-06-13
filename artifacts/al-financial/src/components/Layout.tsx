import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/al-logo-white.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  { name: "Life Cover", href: "/services/life-cover" },
  { name: "Critical Illness", href: "/services/critical-illness" },
  { name: "Income Protection", href: "/services/income-protection" },
  { name: "Mortgage Broker", href: "/services/mortgage-broker" },
  { name: "Mortgage Protection", href: "/services/mortgage-protection" },
  { name: "Home Insurance", href: "/services/home-insurance" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (path: string) => location === path;
  const isServicesActive = location.startsWith("/services");

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans">
      <header className="bg-navy text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img src={logoPath} alt="A&L Financial Solutions" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className={`text-sm font-medium transition-colors hover:text-gold ${isActive("/") ? "text-gold" : "text-white"}`}>Home</Link>
              
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold ${isServicesActive ? "text-gold" : "text-white"}`}>
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-4 w-56">
                    <div className="bg-white rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5">
                      {SERVICES.map((service) => (
                        <Link 
                          key={service.href} 
                          href={service.href}
                          className={`block px-4 py-2 text-sm hover:bg-surface hover:text-gold ${isActive(service.href) ? "text-gold font-medium bg-surface" : "text-gray-900"}`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className={`text-sm font-medium transition-colors hover:text-gold ${isActive("/about") ? "text-gold" : "text-white"}`}>About</Link>
              <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-gold ${isActive("/contact") ? "text-gold" : "text-white"}`}>Contact</Link>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-20 bg-navy z-40 overflow-y-auto pb-20">
            <nav className="flex flex-col p-6 gap-6">
              <Link href="/" className={`text-2xl font-serif ${isActive("/") ? "text-gold" : "text-white"}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              <div className="flex flex-col gap-4">
                <div className={`text-2xl font-serif ${isServicesActive ? "text-gold" : "text-white"}`}>Services</div>
                <div className="flex flex-col gap-3 pl-4 border-l border-white/20">
                  {SERVICES.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href}
                      className={`text-lg ${isActive(service.href) ? "text-gold" : "text-white/80"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className={`text-2xl font-serif ${isActive("/about") ? "text-gold" : "text-white"}`} onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className={`text-2xl font-serif ${isActive("/contact") ? "text-gold" : "text-white"}`} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <img src={logoPath} alt="A&L Financial Solutions" className="h-12 w-auto mb-6" />
              <p className="text-white/80 mb-2">20 The Pines, Kingswood</p>
              <p className="text-white/80 mb-2">Hull, HU7 3GT</p>
              <p className="text-white/80 mb-2">07715832346</p>
              <p className="text-white/80">Info@aandlfinancial.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-serif mb-6">Services</h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-white/80 hover:text-gold transition-colors">{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-white/80 hover:text-gold transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-gold transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-xs text-white/50 leading-relaxed max-w-4xl">
              Your home may be repossessed if you do not keep up repayments on your mortgage. A&L Financial Solutions Ltd is an appointed representative of PRIMIS Mortgage Network, a trading name of First Complete Limited. First Complete Limited is authorised and regulated by the Financial Conduct Authority. Registered in England and Wales. Registered office: 20 The Pines, Kingswood, Hull, England, HU7 3GT. Registration No: 09731522. For mortgage advice, we charge a fee of between £457 and £997, agreed before we begin. For insurance services, we receive commission from the product provider, no fee is charged to you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
