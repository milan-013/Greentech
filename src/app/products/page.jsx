"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "TMT Bar",
      category: "Structural",
      image: "/assets/img15.jpg",
      desc: "High-strength Thermo-Mechanically Treated (TMT) steel bars available in all standard structural sizes, ranging from 8mm to 25mm. We are trusted to supply major infrastructure projects. This elite corporate network allows us to secure massive volume allocations, passing the direct benefits down to you with uncompromised premium quality and the best rates in the market.",
    },
    {
      title: "Angle Channel Round",
      category: "Structural",
      image: "/assets/img9.jpeg",
      desc: "Premium Mild Steel (MS) angles and channels engineered for high structural load-bearing capacity. By leveraging our long-standing trading networks with the country's dominant steel rolling mills, we ensure a steady supply of flawlessly straight, dimensionally accurate profiles. This direct manufacturing access allows us to guarantee superior structural integrity for your construction projects alongside highly competitive wholesale market rates.",
    },
    {
      title: "M S Billet",
      category: "Structural",
      image: "/assets/img10.jpeg",
      desc: "High-quality raw material steel billets rolled to precise structural dimensions. Serving as a trusted distributor for massive industrial plants, we maintain long-standing strategic alliances with the industry's largest steel producers. This elite corporate network ensures your casting foundations meet rigorous global standards, all backed by highly advantageous wholesale commercial rates.",
    },
    {
      title: "M S Ingot",
      category: "Structural",
      image: "/assets/img11.jpeg",
      desc: "Solidified metal blocks freshly cast with precise metallurgical composition control. Our large-scale trading operations are anchored by deep corporate relationships with leading manufacturing giants, ensuring an exceptionally vetted and steady supply. This level of industry trust allows us to provide high-density, defect-free forge feeds alongside an absolute edge on tier-one pricing.",
    },
    {
      title: "Sponge Iron",
      category: "SPONGE IRON",
      image: "/assets/img12.jpg",
      desc: "High-grade sponge iron produced through the direct reduction of premium iron ore. We deal extensively in heavy industrial trading, supported by a tight-knit network of primary manufacturing plants. This direct-from-source pipeline guarantees an exceptionally high metallic iron content for induction furnaces, paired with highly cost-effective market rates.",
    },
    {
      title: "MS Boring Scrap",
      category: "Borings",
      image: "/assets/img13.jpeg",
      desc: "Clean, finely processed mild steel borings and turnings sourced from high-precision industrial machining lines. Our large-scale waste-clearing capabilities make us a trusted recycling partner for several engineering giants, giving us exclusive access to high-density, low-moisture scrap streams. This ensures rapid melting cycles and maximum recovery yields in your furnace, delivered at excellent commercial value.",
    },
    {
      title: "CI Boring Scrap",
      category: "Borings",
      image: "/assets/img14.jpeg",
      desc: "High-quality cast iron boring scrap, ideal for high-density briquetting and foundry charge material. We manage substantial trading volumes of secondary metals, establishing deep operational trust with massive automotive and machinery manufacturing plants. Our strict quality control ensures the scrap is free from heavy oil and non-metallic contaminants, providing elite furnace feed efficiency at optimized procurement costs.",
    },
    {
      title: "Iron Ore Fines and Lump",
      category: "IRON ORE",
      image: "/assets/img16.jpg",
      desc: "High-grade raw iron ore featuring exceptional Fe content and rigid structural stability for induction and blast furnace operations. Our bulk trading division coordinates directly with major mining conglomerates that trust our swift logistics, securing a highly reliable supply chain. This primary-source pipeline allows us to offer uniform sizing and high chemical purity at highly favorable tier-one pricing.",
    },
    {
      title: "Coal",
      category: "FOSSIL FUEL",
      image: "/assets/coal.jpg",
      desc: "High-calorific value steam coal selected specifically to sustain the intense thermal demands of heavy metallurgical smelting. Backed by direct volume allocations from premier mining powerhouses, our robust distribution framework ensures a consistent supply of low-ash, stable-combustion fuel. We combine reliable energy performance with an unbeatable edge on bulk wholesale pricing.",
    },
    {
      title: "Coke",
      category: "FOSSIL FUEL",
      image: "/assets/coke.jpg",
      desc: "High-purity metallurgical coke optimized for intense thermal efficiency and superior smelting yields. By maintaining premier supply channels across our global refining network, we secure direct access to clean, low-ash carbon streams. This ensures your blast furnaces and cupolas receive premium-grade fuel with high fixed carbon and minimal sulfur content, allowing us to pass on the best wholesale commercial rates in the market.",
    },
    {
      title: "M S Scrap",
      category: "HMS 1",
      image: "/assets/msscrap.jpg",
      desc: "Heavy Melting Steel (HMS 1 & HMS 2) processed to strict dimensional and thickness specifications. Cleared of non-ferrous attachments and corrosion to provide dense, high-yield charge material for induction and electric arc furnaces.",
      },
    {
      title: "Mill Scale",
      category: "OXIDES",
      image: "/assets/mill.jpeg",
      desc: "High-grade ferrous oxide byproduct generated during hot rolling and forging operations. Featuring exceptionally high iron content (Fe ~65-70%), mill scale is ideal for sintering, pelletizing, and metallurgical charge applications.",
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectParam = params.get("select");
    if (selectParam) {
      const targetProduct = products.find(
        (p) =>
          p.title.toLowerCase().replace(/\s+/g, "") === selectParam.toLowerCase().replace(/\s+/g, "") ||
          p.category.toLowerCase().replace(/\s+/g, "") === selectParam.toLowerCase().replace(/\s+/g, "")
      );
      if (targetProduct) {
        setTimeout(() => {
          const element = document.getElementById(targetProduct.title.toLowerCase().replace(/\s+/g, "-"));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-surface text-on-surface min-h-screen py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 space-y-16">
        {/* Page Header */}
        <div className="border-b border-outline-variant pb-8">
          <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] block mb-3 uppercase">
            METALLURGICAL INVENTORY
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Products Catalog &amp; Specifications
          </h1>
          <p className="text-lg text-secondary font-light mt-4 max-w-3xl leading-relaxed">
            Green Tech Minerals maintains a consistent inventory of high-density steel and iron byproduct grades. All material properties are documented under strict quality protocols for immediate deployment.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="space-y-16">
          {products.map((p, index) => (
            <div
              key={index}
              id={p.title.toLowerCase().replace(/\s+/g, "-")}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 scroll-mt-28 py-8 border-b border-outline-variant/30 last:border-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image Block */}
              <div className="w-full md:w-1/2 relative overflow-hidden group rounded-2xl border border-outline-variant/30 shadow-md aspect-[16/10]">
                <Image
                  alt={p.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={p.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-tertiary-container bg-tertiary-fixed/20 border border-tertiary-container/30 px-2.5 py-1 rounded uppercase tracking-wide">
                    {p.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">In Stock</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight">
                  {p.title}
                </h2>
                <p className="text-base text-secondary leading-relaxed font-light">
                  {p.desc}
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href={`/contact?rfq=true&grade=${encodeURIComponent(p.title)}`}
                    className="inline-flex items-center space-x-2 bg-primary text-on-primary hover:opacity-90 px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-opacity"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
