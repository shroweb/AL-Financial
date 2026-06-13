import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/al-logo-white.png";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location === path;
  const isServicesActive = location.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans">
      <header
        className={`sticky top-0 z-50 bg-navy text-white transition-all duration-300 ${
          scrolled ? "shadow-xl shadow-navy/30" : ""
        }`}
      >
        <div className="hidden border-b border-white/10 bg-[#091420] lg:block">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs text-white/55 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Hull based, UK focused
              </span>
              <span>Authorised and regulated advice</span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="tel:07715832346"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone className="h-3.5 w-3.5" />
                07715 832346
              </a>
              <a
                href="mailto:Info@aandlfinancial.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="h-3.5 w-3.5" />
                Info@aandlfinancial.com
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src={logoPath}
                alt="A&L Financial Solutions"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              <Link
                href="/"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isActive("/") ? "text-gold" : "text-white/80"
                }`}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    isServicesActive ? "text-gold" : "text-white/80"
                  }`}
                >
                  Services{" "}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 pt-5 w-56 transition-all duration-200 ${
                    servicesDropdownOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none -translate-y-1"
                  }`}
                >
                  <div className="border-t-2 border-gold bg-white shadow-2xl shadow-navy/20">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block border-b border-gray-100 px-5 py-3 text-sm transition-colors last:border-0 hover:bg-surface hover:text-gold ${
                          isActive(service.href)
                            ? "text-gold font-medium bg-surface"
                            : "text-gray-800"
                        }`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isActive("/about") ? "text-gold" : "text-white/80"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="btn-al btn-al-outline-gold ml-2 text-xs"
                data-testid="link-nav-book"
              >
                Book a consultation
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 top-20 bg-navy z-40 overflow-y-auto transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-0 divide-y divide-white/10 p-8">
            <Link
              href="/"
              className={`py-5 text-2xl font-serif ${
                isActive("/") ? "text-gold" : "text-white"
              }`}
            >
              Home
            </Link>

            <div className="py-5 flex flex-col gap-4">
              <div
                className={`text-2xl font-serif ${
                  isServicesActive ? "text-gold" : "text-white"
                }`}
              >
                Services
              </div>
              <div className="flex flex-col gap-3 pl-5 border-l-2 border-gold/30">
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`text-base ${
                      isActive(service.href) ? "text-gold" : "text-white/70"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className={`py-5 text-2xl font-serif ${
                isActive("/about") ? "text-gold" : "text-white"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`py-5 text-2xl font-serif ${
                isActive("/contact") ? "text-gold" : "text-white"
              }`}
            >
              Contact
            </Link>

            <div className="pt-8">
              <Link href="/contact" className="btn-al btn-al-gold inline-block">
                Book a free appointment
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Pre-footer contact strip */}
      <div className="border-t border-white/5 bg-[#091420] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
              Speak to Anthony directly
            </p>
            <a
              href="tel:07715832346"
              className="text-3xl font-serif text-gold hover:text-yellow-300 transition-colors"
              data-testid="link-footer-phone"
            >
              07715 832346
            </a>
          </div>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:Info@aandlfinancial.com"
              className="text-sm text-white/50 hover:text-gold transition-colors"
            >
              Info@aandlfinancial.com
            </a>
            <Link
              href="/contact"
              className="btn-al btn-al-gold"
              data-testid="link-prefooter-book"
            >
              Book a free appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy pt-16 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
            <div className="md:col-span-4">
              <img
                src={logoPath}
                alt="A&L Financial Solutions"
                className="h-14 w-auto mb-3"
              />
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-7">
                Authorised and Regulated by the FCA
              </p>
              <div className="space-y-3 text-sm leading-relaxed text-white/60">
                <p>20 The Pines, Kingswood, Hull, HU7 3GT</p>
                <a
                  href="tel:07715832346"
                  className="block transition-colors hover:text-gold"
                >
                  07715 832346
                </a>
                <a
                  href="mailto:Info@aandlfinancial.com"
                  className="block transition-colors hover:text-gold"
                >
                  Info@aandlfinancial.com
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-white/35 leading-relaxed max-w-4xl">
              Your home may be repossessed if you do not keep up repayments on
              your mortgage. A&L Financial Solutions Ltd is an appointed
              representative of PRIMIS Mortgage Network, a trading name of First
              Complete Limited. First Complete Limited is authorised and
              regulated by the Financial Conduct Authority. Registered in
              England and Wales. Registered office: 20 The Pines, Kingswood,
              Hull, England, HU7 3GT. Registration No: 09731522. For mortgage
              advice, we charge a fee of between £457 and £997, agreed before we
              begin. For insurance services, we receive commission from the
              product provider, no fee is charged to you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
