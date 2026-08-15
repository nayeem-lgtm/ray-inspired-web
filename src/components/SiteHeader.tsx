import { ChevronDown } from "lucide-react";

const NAV = [
  { label: "About", href: "https://www.rayadvertising.com/", caret: false },
  { label: "Services", href: "https://www.rayadvertising.com/paypercall", caret: true },
  { label: "Events", href: "https://www.rayadvertising.com/events", caret: false },
  { label: "Company", href: "https://www.rayadvertising.com/careers", caret: true },
  { label: "Blog", href: "https://www.rayadvertising.com/blog", caret: false },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="https://www.rayadvertising.com/" className="shrink-0">
          <img
            src="https://www.rayadvertising.com/static/images/Assets/Logo-118.webp"
            alt="Ray Advertising logo"
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[15px] font-semibold text-navy-foreground/90 transition-colors hover:text-teal"
            >
              {item.label}
              {item.caret ? <ChevronDown className="h-4 w-4" strokeWidth={3} /> : null}
            </a>
          ))}
          <a
            href="https://rayadvertising.everflowclient.io/advertiser/signup"
            className="flex items-center gap-2 rounded-md bg-background px-6 py-3 text-[15px] font-bold text-primary shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Get Started
            <ChevronDown className="h-4 w-4" strokeWidth={3} />
          </a>
        </nav>

        <a
          href="https://rayadvertising.everflowclient.io/advertiser/signup"
          className="rounded-md bg-background px-4 py-2 text-sm font-bold text-primary lg:hidden"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
