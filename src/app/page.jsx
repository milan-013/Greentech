"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const productMapping = {
  "TMT Bar": "Structural",
  "Angle Channel Round": "Structural",
  "M S Billet": "Structural",
  "M S Ingot": "Structural",
  "Sponge Iron": "HMS 1",
  "MS Boring Scrap": "Borings",
  "CI Boring Scrap": "Borings",
  "Iron Ore": "HMS 2",
  "Coal": "HMS 2",
  "Supply Chain": "Shredded",
  "M S Scrap": "HMS 1",
  "Mill Scale": "Shredded"
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/img1.jpg",
      title: "Architects of Global Integrity",
      subtitle: "Securing the future through unparalleled industrial precision and corporate authority.",
      cta: "Explore Our Solutions",
      link: "/products",
    },
    {
      image: "/assets/img4.jpg",
      title: "Industrial Innovation",
      subtitle: "Pioneering supply chain solutions that redefine standard logistical boundaries.",
      cta: "Review Scrap Processing",
      link: "/scrapping",
    },
  ];

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const moveCarousel = (index) => {
    setCurrentSlide(index);
  };

  const scrappingBoxes = [
    {
      title: "Shearing Machine",
      image: "/assets/img1.jpg",
    },
    {
      title: "Bundle Making",
      image: "/assets/img4.jpg",
    },
    {
      title: "Casting Mould Breaking Machine",
      image: "/assets/img21.jpeg",
    },
    {
      title: "Slag Crusher",
      image: "/assets/img6.jpg",
    },
    {
      title: "Scrap Crusher",
      image: "/assets/img6.1.jpeg",
    },
    {
      title: "Jam Processing",
      image: "/assets/img8.jpg",
    },
    {
      title: "Yield Induction Machine",
      image: "/assets/img7.jpg",
    },
    {
      title: "Spectrometer",
      image: "/assets/img19.jpeg",
    },
    {
      title: "Warehouse Management",
      image: "/assets/img2.jpg",
    },
    {
      title: "Crane Facility",
      image: "/assets/img18.jpeg",
    },
    {
      title: "Magnetic Lifting",
      image: "/assets/img5.jpg",
    },
    {
      title: "Weighing Scale",
      image: "/assets/img20.jpg",
    },
  ];

  const advantages = [
    {
      title: "TMT Bar",
      image: "/assets/img15.jpg",
    },
    {
      title: "Angle Channel Round",
      image: "/assets/img9.jpeg",
    },
    {
      title: "M S Billet",
      image: "/assets/img10.jpeg",
    },
    {
      title: "M S Ingot",
      image: "/assets/img11.jpeg",
    },
    {
      title: "Sponge Iron",
      image: "/assets/img12.jpg",
    },
    {
      title: "MS Boring Scrap",
      image: "/assets/img13.jpeg",
    },
    {
      title: "CI Boring Scrap",
      image: "/assets/img14.jpeg",
    },
    {
      title: "Iron Ore",
      image: "/assets/img16.jpg",
    },
    {
      title: "Coal",
      image: "/assets/coal.jpg",
    },
    {
      title: "Coke",
      image: "/assets/coke.jpg",
    },
    {
      title: "M S Scrap",
      image: "/assets/msscrap.jpg",
    },
    {
      title: "Mill Scale",
      image: "/assets/mill.jpeg",
    },
  ];

  const complianceCerts = [
    {
      title: "GST REGISTRATION MFG",
      authority: "GOV OF INDIA",
      link: "https://drive.google.com/file/d/1WV0WSIFjDJpgWN2dNWbWiSzMCDKYrx29/view?usp=sharing",
    },
    {
      title: "GST TRADING",
      authority: "GOV OF INDIA",
      ref: "OHS-STD-44",
      link: "https://drive.google.com/file/d/1oA6SAA5jRPJsx7FP_TDrlLG-wa-Z2BWl/view?usp=sharing",
    },
    {
      title: "LABOUR LICENSE",
      authority: "GOV OF JHARKHAND",
      link: "https://drive.google.com/file/d/1wPTrzePVTlqMli-R8fMTB7fDdk6IH3bb/view?usp=sharing",
    },
    {
      title: "CTO POLLUTION",
      authority: "JHARKHAND STATE POLLUTION CONTROL BOARD",
      link: "https://drive.google.com/file/d/1tCYeKExb49-btA3ERYyaaAT98qHROY2H/view?usp=sharing",
    },
    {
      title: "Indian Bureau Mines",
      authority: "GOV OF INDIA",
      link: "https://drive.google.com/file/d/1gcdfF4p-fJPtW2e85vr-ZLWK-ZZME8SD/view?usp=sharing",
    },
    {
      title: "IRON ORE TRADING LICENSE",
      authority: "Odisha Department of Mines",
      link: "https://drive.google.com/file/d/1VSyBWy2_vmUSK_qcfalGanJe6s-5iWuw/view?usp=sharing",
    },
    {
      title: "FACTORY LICENSE",
      authority: "GOV OF JHARKHAND MFG",
      link: "https://drive.google.com/file/d/1gP95gmmbx8-NLpEweTvlkzadM7cwzF3R/view?usp=sharing",
    },
    {
      title: "IMPORTER-EXPORTER CERTIFICATE",
      authority: "MINISTRY OF COMMERCE AND INDUSTRY",
      link: "https://drive.google.com/file/d/1Zy5lr7PWwcxys5fAGEugbDBTyy07cnxo/view?usp=sharing",
    },
    {
      title: "COAL LICENSE",
      authority: "GOV OF JHARKHAND",
      link: "https://drive.google.com/file/d/1OK0lpa-A00ckQLD8weMZu6luhY3GEzN_/view?usp=sharing",
    },
    {
      title: "TRADING LICENSE",
      authority: "MINISTRY OF COMMERCE AND INDUSTRY",
      link: "https://drive.google.com/file/d/1S_K35Z1baKHZuh7uodrtg6CuQfHjoRH3/view?usp=sharing",
    },
  ];

  const statistics = [
    { value: "40+", label: "Years of Service" },
    { value: "150+", label: "Global Offices" },
    { value: "2.4k", label: "Strategic Partners" },
    { value: "Top 5", label: "Logistics Providers" },
  ];

  const achievements = [
    {
      icon: "military_tech",
      year: "2023",
      title: "Asia Top Trading 2023",
      desc: "Recognized for outstanding continental growth and excellence in cross-border trade operations.",
      badgeIcon: "workspace_premium",
      badgeText: "Continental Growth Excellence",
    },
    {
      icon: "workspace_premium",
      year: "ANNUAL",
      title: "Global Industrial Honor",
      desc: "Awarded for pioneering sustainable supply chain initiatives and industrial leadership.",
      badgeIcon: "eco",
      badgeText: "Sustainable Supply Chain Award",
    },
    {
      icon: "stars",
      year: "CERTIFIED",
      title: "Trade Integrity Certificate",
      desc: "A testament to our unwavering commitment to verified global security and ethical standards.",
      badgeIcon: "verified_user",
      badgeText: "Global Security Standards",
    },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen pt-20">
      {/* Hero Section: Professional Image Carousel */}
      <section className="relative w-full h-[calc(100vh-80px)] min-h-[500px] overflow-hidden bg-primary-container">
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full relative flex-shrink-0"
            >
              <Image
                alt={slide.title}
                className="object-cover brightness-[0.7]"
                src={slide.image}
                fill
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div className="max-w-[800px] space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <div className="pt-4">
                    <Link
                      href={slide.link}
                      className="bg-tertiary-fixed text-primary px-8 py-4 font-bold text-sm tracking-widest uppercase hover:scale-105 hover:bg-tertiary-container hover:text-white transition-all duration-200 inline-block"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => moveCarousel(index)}
              className="w-3.5 h-3.5 rounded-full bg-white transition-all duration-200 cursor-pointer"
              style={{ opacity: currentSlide === index ? "1" : "0.4" }}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* About Us Snapshot */}
      <section className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto text-center px-6 space-y-4">
          <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] block uppercase">
            ESTABLISHED 2000
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">
            Commanding Excellence in Scrap Processing &amp; Metal Trading
          </h2>
          <div className="w-16 h-1 bg-tertiary mx-auto"></div>
          <p className="text-lg text-secondary leading-relaxed font-light pt-2">
            GreenTech Minerals stands as a trusted pillar in the recycling and metal trading industry. With over 26 years of proven expertise, we specialize in efficient scrap processing and responsible metal sourcing, empowering industries.
          </p>
        </div>
      </section>

      {/* Scrapping Process and Facilities Section */}
      <section className="py-20 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 space-y-12">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary">
              Scrap Processing and Facilities
            </h2>
            <p className="text-sm text-secondary font-medium mt-1">
              Advanced industrial operations for high-efficiency metal recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scrappingBoxes.map((box, index) => (
              <div key={index} className="institutional-card">
                <div className="relative w-full h-48">
                  <Image
                    alt={box.title}
                    className="object-cover"
                    src={box.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">
                    <Link
                      href={`/scrapping#${slugify(box.title)}`}
                      className="hover:text-tertiary-container hover:underline transition-colors duration-200"
                    >
                      {box.title}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Excellence Section */}
      <section className="py-20 bg-surface border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 space-y-12">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary">
              Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="institutional-card p-5">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    alt={item.title}
                    className="object-cover"
                    src={item.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">
                  <Link
                    href={`/products?select=${productMapping[item.title.trim()] || "HMS 1"}`}
                    className="hover:text-tertiary-container hover:underline transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Compliance Section */}
      <section className="py-20 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 space-y-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary">
                Verification &amp; Compliance
              </h2>
              <p className="text-sm text-secondary font-medium mt-1">
                Our operations are backed by stringent certifications and global standards.
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/18ekKFuhsnFExE_rio-b5aH-IlOiKmHIx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary hover:opacity-90 px-6 py-3 text-xs font-bold tracking-widest uppercase transition-opacity block w-fit h-fit"
            >
              Access Full Registry
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceCerts.map((cert, index) => (
              <div
                key={index}
                className={`institutional-card p-5 justify-between ${index === complianceCerts.length - 1 && complianceCerts.length % 3 === 1
                    ? "md:col-start-2"
                    : ""
                  }`}
              >
                <div className="bg-surface-container-lowest h-48 mb-4 flex flex-col justify-center items-center text-center p-4 relative border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-[24px] text-tertiary-container absolute top-3 right-3"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <div className="w-12 h-16 bg-outline-variant/20 mb-3 border border-outline/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline">description</span>
                  </div>
                  <span className="text-sm font-bold text-primary tracking-wide uppercase font-sans">
                    {cert.title}
                  </span>
                  <p className="text-[10px] text-outline mt-1 uppercase tracking-widest font-mono">
                    {cert.authority}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/50">
                  <span className="text-[10px] font-mono text-secondary">{cert.ref}</span>
                  <a
                    className="text-xs font-bold text-primary hover:text-tertiary-gold underline flex items-center gap-1"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Original</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Achievements Section — commented out
      <section className="py-20 bg-primary text-on-primary border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 space-y-16">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              A Legacy of Performance
            </h2>
            <p className="text-sm text-slate-300 font-light">
              Quantifiable impact and industry-leading honors.
            </p>
          </div>

          Statistics Grid
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10 pb-12">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center border-r border-white/10 last:border-none p-4 space-y-2"
              >
                <span className="block text-4xl md:text-5xl font-black text-tertiary-fixed font-mono">
                  {stat.value}
                </span>
                <span className="block text-xs font-bold uppercase tracking-wider text-white/60 font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          Achievements Grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-primary-container p-6 border border-white/10 flex flex-col h-full hover:bg-white/5 transition-colors duration-200 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="material-symbols-outlined text-[48px] text-tertiary-fixed">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-white/40 uppercase font-mono">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300 mb-8 flex-grow leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-tertiary-fixed border-t border-white/10 pt-4 group-hover:text-white transition-colors duration-150">
                  <span className="material-symbols-outlined text-[16px]">{item.badgeIcon}</span>
                  <span>{item.badgeText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
