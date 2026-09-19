import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Green Tech Minerals",
  description: "Reliable metal recycling, scrap trading, and sustainable material processing since 2000. Serving key industrial hubs across Eastern and Central India.",
  openGraph: {
    title: "About Us | Green Tech Minerals",
    description: "Reliable metal recycling, scrap trading, and sustainable material processing since 2000. Serving key industrial hubs across Eastern and Central India.",
    url: "https://greentechminerals.com/about",
    images: [{ url: "/assets/Ranchi.jpg", width: 1200, height: 630, alt: "Green Tech Minerals Facilities" }],
  },
};

export default function AboutPage() {
  const offices = [
    {
      id: "tata",
      name: "Tatanagar Office (Jharkhand)",
      badgeIcon: "inventory_2",
      // badgeText: "Primary Processing & Baling Operations",
      // description:
      //   "Regional headquarters and processing coordination hub in the steel heart of India. Equipped with heavy industrial shear lines, hydraulic baling presses, and direct dispatch railway feeder connectivity.",
      // addressLabel: "Operational Address",
      address:
        "Plot No. FE-33, Adityapur Industrial Area, Phase-7, Jamshedpur (Tata), Jharkhand - 831013",
      image: "/assets/Ranchi.jpg",
      imageLeft: false, // Text Left, Image Right
    },
    {
      id: "calcutta",
      name: "Kolkata Office (West Bengal)",
      badgeIcon: "local_shipping",
      // badgeText: "Trading & Logistics Hub",
      // description:
      //   "Commercial trading, logistics dispatch, and port liaison office handling high-volume regional transport. Supervises coastal cargo movements, customs regulatory documentation, and trade settlements.",
      // addressLabel: "Commercial Address",
      address:
        "8/1/2, Dr. U.N. Brahmachari Street, 3rd Floor, Kolkata, 700017",
      image: "/assets/kolkata.jpg",
      imageLeft: true, // Image Left, Text Right
    },
    {
      id: "bhubaneswar",
      name: "Bhubaneswar Office (Odisha)",
      badgeIcon: "handshake",
      // badgeText: "Procurement & Strategic Partnerships",
      // description:
      //   "Minerals sourcing, regional industrial tie-ups, and mining scrap procurement center. Coordinates closely with extraction belts and regional steel mills to ensure raw material flow continuity.",
      // addressLabel: "Regional Office Address",
      address:
        "714, Lingipur, Bhubaneswar, Odisha - 751002",
      image: "/assets/BBS.jpg",
      imageLeft: false, // Text Left, Image Right
    },
    {
      id: "raipur",
      name: "Raipur Office (Chhattisgarh)",
      badgeIcon: "foundation",
      // badgeText: "Foundry Supply & Regional Logistics",
      // description:
      //   "Foundry supply coordination, heavy metal sorting, and central India logistics station. Anchoring high-grade melt stock distribution and recycled material supply for regional casting units.",
      // addressLabel: "Facility Address",
      address:
        "Zenith Coworking, 7th Floor, Currency Tower, VIP Square, Telibandha Road, Raipur, Chattisgarh, India, 492001",
      image: "/assets/Raipur.jpg",
      imageLeft: true, // Image Left, Text Right
    },
  ];

  const stats = [
    {
      icon: "history",
      tag: "Track Record",
      value: "2000",
      title: "Year Established",
      subtitle: "24+ Years of Industry Trust",
    },
    {
      icon: "pin_drop",
      tag: "Coverage",
      value: "4 States",
      title: "Operational Footprint",
      subtitle: "JH, WB, OD, and CG",
    },
    {
      icon: "precision_manufacturing",
      tag: "Infrastructure",
      value: "In-House",
      title: "Advanced Facilities",
      subtitle: "Processing, Shearing & Baling",
    },
    {
      icon: "verified_user",
      iconFilled: true,
      tag: "Assurance",
      value: "100%",
      title: "Verified Standards",
      subtitle: "Certified Industrial Compliance",
    },
  ];

  return (
    <div className="w-full pt-20 bg-background min-h-screen text-on-surface antialiased">
      <div className="flex flex-col w-full">
        {/* 1. HERO SECTION */}
        <section className="relative w-full h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Green Tech Minerals Ranchi facility"
              className="object-center object-cover"
              src="/assets/Ranchi.jpg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary-container/85 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 lg:px-16 flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest/15 backdrop-blur-sm rounded-lg text-surface-container-lowest">
              <span
                className="material-symbols-outlined text-[16px] text-tertiary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-xs tracking-wider uppercase font-semibold text-surface-container-lowest">
                Corporate Profile
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-container-lowest tracking-tight">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-secondary-fixed max-w-2xl leading-relaxed">
              Reliable metal recycling, scrap trading, and sustainable material
              processing since 2000.
              <br className="hidden sm:inline" /> Serving key industrial hubs
              across Eastern and Central India.
            </p>
          </div>
        </section>

        {/* 2. COMPANY INTRODUCTION SECTION */}
        <section className="w-full py-16 lg:py-20 bg-background">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16 flex flex-col gap-12">
            {/* Narrative Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col gap-2">
                <span className="text-sm font-semibold text-tertiary tracking-wider uppercase">
                  Our Journey &amp; Core Business
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface leading-tight">
                  Commanding Excellence in Metal Processing Since 2000
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Established in the year 2000, Green Tech Minerals has cultivated
                  more than two decades of industrial trust, exceptional market
                  standing, and enduring client partnerships. What began as a
                  focused regional venture has evolved into a dependable
                  powerhouse in ethical metal recovery and circular economy
                  solutions.
                </p>
                <p>
                  Our core operations center on transparent scrap dealing,
                  multi-grade ferrous and non-ferrous metal trading, and fully
                  equipped in-house material processing facilities. With an active
                  multi-state footprint spanning Jharkhand, West Bengal, Odisha,
                  and Chhattisgarh, we deliver seamless supply-chain consistency
                  to the nation&apos;s primary foundries and manufacturing
                  heavyweights.
                </p>
              </div>
            </div>

            {/* Key Metrics Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_10px_15px_-3px_rgba(27,43,72,0.1)] border border-outline-variant/60 flex flex-col justify-between h-full transition-transform hover:-translate-y-1 duration-200"
                >
                  <div className="flex items-center justify-between pb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center ${stat.iconFilled ? "text-tertiary" : "text-primary-container"
                        }`}
                    >
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={
                          stat.iconFilled
                            ? { fontVariationSettings: "'FILL' 1" }
                            : undefined
                        }
                      >
                        {stat.icon}
                      </span>
                    </div>
                    <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">
                      {stat.tag}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl sm:text-4xl font-bold text-primary-container block tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-sm text-on-surface block mt-1.5 font-bold">
                      {stat.title}
                    </span>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MULTI-STATE OPERATIONAL REACH & OFFICE LOCATIONS */}
        <section className="w-full py-16 lg:py-20 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16 flex flex-col gap-12">
            {/* Section Intro */}
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-sm font-semibold text-tertiary tracking-wider uppercase">
                Physical Network
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface leading-tight">
                Our Regional Offices
              </h2>
              <p className="text-base text-on-surface-variant">
                Dedicated physical presence and operations across four industrial
                hubs.
              </p>
            </div>

            {/* Alternating Offices Container */}
            <div className="flex flex-col gap-10">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-surface-container-lowest rounded-lg shadow-[0_10px_15px_-3px_rgba(27,43,72,0.1)] border border-outline-variant/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
                >
                  {/* Text Container */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 ${office.imageLeft
                      ? "order-1 lg:order-2"
                      : "order-1 lg:order-1"
                      }`}
                  >
                    <div className="flex flex-col gap-3">
                      {office.badgeText && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full w-fit">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            {office.badgeIcon || "business"}
                          </span>
                          <span className="text-xs font-semibold text-on-surface">
                            {office.badgeText}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-container">
                        {office.name}
                      </h3>
                      {office.description && (
                        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                          {office.description}
                        </p>
                      )}
                    </div>

                    <div className="p-4 bg-surface-container-low rounded-lg flex items-start gap-3 mt-4">
                      <span className="material-symbols-outlined text-primary-container text-[22px] shrink-0 mt-0.5">
                        location_on
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">
                          {office.addressLabel || "Office Address"}
                        </span>
                        <span className="text-sm text-on-surface font-medium mt-0.5">
                          {office.address}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Photo Container */}
                  <div
                    className={`lg:col-span-6 relative min-h-[280px] lg:min-h-[360px] overflow-hidden ${office.imageLeft
                      ? "order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-outline-variant/60"
                      : "order-2 lg:order-2 border-t lg:border-t-0 lg:border-l border-outline-variant/60"
                      }`}
                  >
                    {office.image ? (
                      <Image
                        src={office.image}
                        alt={office.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-surface-container-high/40 border-dashed border-outline-variant flex flex-col items-center justify-center p-6 text-on-surface-variant/40">
                        <span className="material-symbols-outlined text-[44px]">
                          image
                        </span>
                        <span className="text-xs uppercase font-medium tracking-wider text-center">
                          {office.name} Photo
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TRUST & OPERATIONAL CREDENTIALS BANNER */}
        <section className="w-full py-12 lg:py-16 bg-surface-container-lowest">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
            <div className="bg-primary-container text-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-[0_10px_15px_-3px_rgba(27,43,72,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="text-xs sm:text-sm font-semibold text-tertiary-fixed tracking-wider uppercase">
                  Institutional Reliability
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-surface-container-lowest">
                  Looking to partner with an established industry supplier?
                </h3>
                <p className="text-sm sm:text-base text-on-primary-container leading-relaxed">
                  Connect directly with our regional offices for institutional
                  supply contracts, bulk scrap procurement, and certified metal
                  recycling.
                </p>
              </div>
              <div className="flex items-center shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-surface-container-lowest text-primary-container font-semibold text-sm rounded-lg hover:bg-surface-container transition-colors shadow-sm"
                >
                  Contact Regional Office
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
