import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { DataTable } from "@/components/DataTable";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Partnerships Manager KPI & Commission Scorecard | Ray Advertising" },
      {
        name: "description",
        content:
          "Monthly KPIs, daily activity matrix, required tools and the tiered commission structure for the Partnerships Manager role in performance marketing.",
      },
      { property: "og:title", content: "Partnerships Manager KPI & Commission Scorecard" },
      {
        property: "og:description",
        content:
          "KPI targets, activity matrix and tiered commission ladder for advertiser and publisher partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-10">
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-base font-bold text-teal-foreground">
          {index}
        </span>
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <div className="hero-surface relative">
        <SiteHeader />
        <div className="mx-auto max-w-5xl px-6 pt-40 pb-28 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
            Performance Marketing — Advertiser &amp; Publisher
          </p>
          <h1 className="mt-4 text-4xl font-bold text-navy-foreground md:text-5xl">
            KPI &amp; Commission Scorecard
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-navy-foreground/75 md:text-lg">
            Partnerships Manager — owns and grows both sides of the performance marketing
            marketplace: sourcing and onboarding publishers (supply) while building a qualified
            advertiser pipeline and closing deals (demand).
          </p>
        </div>
        <div className="h-16 rounded-t-[50%] bg-background" />
      </div>

      <Section index="1" title="Monthly Performance KPIs">
        <DataTable
          headers={["KPI", "Target", "Notes"]}
          boldColumns={[1]}
          rows={[
            [
              "New Qualified Publisher Onboarding",
              "15 / month",
              "Signed & activated publishers (supply side)",
            ],
            ["Qualified Meetings Booked", "12 / month", "Advertiser only — meets qualification criteria"],
            [
              "Opportunities Created",
              "5–6 / month",
              "Qualified advertiser opportunities entered in pipeline",
            ],
            ["Closed Deals", "5 / month", "Won advertiser deals"],
            ["Meeting-to-Opportunity Rate", "> 50%", "Efficiency / qualification quality metric"],
          ]}
        />
      </Section>

      <Section index="2" title="Required Tools & Systems">
        <DataTable
          headers={["Category", "Tool / Platform", "Usage Requirement"]}
          boldColumns={[1]}
          rows={[
            ["CRM", "HubSpot", "All pipeline, contact, and deal management"],
            ["Dialer", "HubSpot Dialer", "All outbound calls — must be logged automatically"],
            ["Email Outreach", "HubSpot Sequences", "Tracked opens, clicks, and replies"],
            [
              "LinkedIn",
              "LinkedIn Sales Navigator",
              "Deep outreach & connection tracking (not mandatory)",
            ],
            ["EOD Reporting", "Company ERP — Project Board", "Daily work log — mandatory"],
            ["Video Calls", "Google Meet / Zoom", "Qualified meetings — record where permitted"],
            ["Document Sharing", "Google Drive / Proposal Tool", "Pitch decks, one-pagers, contracts"],
          ]}
        />
      </Section>

      <Section index="3" title="Daily Activity Matrix (Advertiser + Publisher)">
        <DataTable
          headers={["Activity Channel", "Daily Target", "Weekly Target"]}
          highlightLastRow
          rows={[
            ["Targeted Cold Calls", "30 – 40", "150 – 200"],
            ["Personalized Emails", "20 – 30", "100 – 150"],
            ["LinkedIn Deep Outreach", "20 – 30", "100 – 150"],
            ["Follow-Ups", "30 – 40", "150 – 200"],
            ["Total Daily Touches", "~100 – 140", "~500 – 700"],
          ]}
        />
      </Section>

      <Section index="4" title="Additional Daily Requirements">
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            "CRM Updates: 100% daily logging required in HubSpot — all calls, emails, and LinkedIn touches.",
            "EOD Report: submitted to the designated ERP project board before close of business each day.",
            "Follow-ups tracked separately and actioned within 24–48 hours of initial outreach.",
          ].map((item) => (
            <li
              key={item}
              className="card-elevated rounded-xl border border-border bg-card p-5 text-[15px] leading-relaxed text-foreground/80"
            >
              <span className="mb-3 block h-1 w-10 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section index="5" title="Tiered Commission Structure">
        <div className="mb-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
          <p>
            Commission is earned on <strong className="text-primary">gross profit generated</strong>,
            tiered by the monthly gross profit brought in. The ladder below is applied{" "}
            <strong className="text-primary">independently to each side</strong> — once on the gross
            profit from the advertiser (demand) side, and separately on the gross profit from the
            publisher (supply) side. The rate for the band reached applies to that side&apos;s full
            monthly gross profit.
          </p>
          <p className="rounded-xl border-l-4 border-teal bg-secondary p-5">
            <strong className="text-primary">Special note:</strong> commission is applicable only for
            the first six (6) months following the onboarding of a buyer or publisher. After the
            initial six-month period, no commission will be payable on revenue generated from that
            specific buyer or publisher. If the gross profit generated by either side meets the
            applicable commission threshold in any month during that period, the Partnership Manager
            receives the corresponding commission for that month.
          </p>
          <p className="font-semibold text-primary">
            Applies to both: Advertiser Track + Publisher Track
          </p>
        </div>
        <DataTable
          headers={["Tier", "Monthly Gross Profit Range", "Commission Rate"]}
          boldColumns={[0, 2]}
          rows={[
            ["S", "$5,000 – $10,000", "20% of salary"],
            ["A", "$10,001 – $20,000", "30% of salary"],
            ["B", "$20,001 – $30,000", "40% of salary"],
            ["C", "$30,001 – $40,000", "50% of salary"],
            ["D", "$50,001 – $60,000", "100% of salary"],
            ["E", "$60,001 – $70,000", "200% of salary"],
            ["F", "$70,001 – $80,000", "500% of salary"],
            ["G", "$80,000+", "700% of salary"],
          ]}
        />
      </Section>

      <Section index="6" title="Payout Rules">
        <ul className="space-y-3">
          {[
            "Each side is calculated separately, then added together for the month's total commission.",
            "Commission is paid on invoiced and collected gross profit only — not on signed or projected deals.",
            "90-day clawback: commission is reversed if the account churns or refunds within 90 days of payout.",
          ].map((rule) => (
            <li
              key={rule}
              className="flex gap-3 rounded-xl border border-border bg-card p-5 text-[15px] text-foreground/80"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
              {rule}
            </li>
          ))}
        </ul>
      </Section>

      <footer className="mt-10 bg-navy py-10 text-center text-sm text-navy-foreground/70">
        <img
          src="https://www.rayadvertising.com/static/images/Assets/Logo-118.webp"
          alt="Ray Advertising logo"
          className="mx-auto mb-4 h-12 w-auto"
        />
        KPI &amp; Commission Scorecard — Partnerships Manager, Performance Marketing
      </footer>
    </main>
  );
}
