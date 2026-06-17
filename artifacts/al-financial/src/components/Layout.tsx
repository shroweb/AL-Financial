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

// Update these with your actual social profile URLs
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/aandlfinancial",
  facebook: "https://www.facebook.com/aandlfinancial",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const isActive = (path: string) => location === path;
  const isServicesActive = location.startsWith("/services");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setPastHero(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex shrink-0 items-center">
              <img
                src={logoPath}
                alt="A&L Financial Solutions"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-7 md:flex">
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
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full w-56 pt-5 transition-all duration-200 ${
                    servicesDropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="border-t-2 border-gold bg-white shadow-2xl shadow-navy/20">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block border-b border-gray-100 px-5 py-3 text-sm transition-colors last:border-0 hover:bg-surface hover:text-gold ${
                          isActive(service.href)
                            ? "bg-surface font-medium text-gold"
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

              {/* Nav CTA — switches to phone number after scrolling past hero */}
              {pastHero ? (
                <a
                  href="tel:07715832346"
                  className="btn-al btn-al-gold ml-2 inline-flex items-center gap-2 text-xs"
                >
                  <Phone className="h-3.5 w-3.5" />
                  07715 832346
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="btn-al btn-al-outline-gold ml-2 text-xs"
                  data-testid="link-nav-book"
                >
                  Book a consultation
                </Link>
              )}
            </nav>

            {/* Mobile menu button */}
            <button
              className="p-2 text-white transition-colors hover:text-gold md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 top-20 z-40 overflow-y-auto bg-navy transition-all duration-300 ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
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

            <div className="flex flex-col gap-4 py-5">
              <div
                className={`text-2xl font-serif ${
                  isServicesActive ? "text-gold" : "text-white"
                }`}
              >
                Services
              </div>
              <div className="flex flex-col gap-3 border-l-2 border-gold/30 pl-5">
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

      <main className="flex-grow pb-[72px] md:pb-0">{children}</main>

      {/* Sticky mobile call button */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <a
          href="tel:07715832346"
          className="flex items-center justify-center gap-3 bg-gold py-5 text-sm font-semibold uppercase tracking-[0.1em] text-navy shadow-[0_-4px_24px_rgba(13,27,42,.18)]"
        >
          <Phone className="h-4 w-4" />
          Call Anthony — 07715 832346
        </a>
      </div>

      {/* Pre-footer contact strip */}
      <div className="border-t border-white/5 bg-[#091420] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
              Speak to Anthony directly
            </p>
            <a
              href="tel:07715832346"
              className="font-serif text-3xl text-gold transition-colors hover:text-yellow-300"
              data-testid="link-footer-phone"
            >
              07715 832346
            </a>
          </div>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:Info@aandlfinancial.com"
              className="text-sm text-white/50 transition-colors hover:text-gold"
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
      <footer className="bg-navy pb-10 pt-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <img
                src={logoPath}
                alt="A&L Financial Solutions"
                className="mb-3 h-14 w-auto"
              />
              <p className="mb-7 text-xs uppercase tracking-widest text-gold/60">
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
                {/* Opening hours */}
                <div className="pt-1">
                  <p className="text-white/40">Mon–Fri 9am–6pm</p>
                  <p className="text-white/40">
                    Evenings &amp; weekends by arrangement
                  </p>
                </div>
              </div>

              {/* Social links — update SOCIAL_LINKS at the top of this file */}
              <div className="mt-6 flex gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="A&L Financial on LinkedIn"
                  className="text-white/40 transition-colors hover:text-gold"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="A&L Financial on Facebook"
                  className="text-white/40 transition-colors hover:text-gold"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>

              {/* Regulatory badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 bg-[#003882] px-3 py-2">
                  <span className="text-base font-bold leading-none text-white">
                    FCA
                  </span>
                  <span className="text-[9px] font-medium uppercase leading-tight text-white/80">
                    Financial
                    <br />
                    Conduct
                    <br />
                    Authority
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-white/20 px-3 py-2">
                  <span className="text-sm font-bold tracking-wider text-white">
                    PRIMIS
                  </span>
                  <span className="text-[9px] leading-tight text-white/50">
                    Mortgage
                    <br />
                    Network
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <h3 className="mb-6 text-xs uppercase tracking-widest text-white/40">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="mb-6 text-xs uppercase tracking-widest text-white/40">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="max-w-4xl text-xs leading-relaxed text-white/35">
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
