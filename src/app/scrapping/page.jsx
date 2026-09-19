import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Scrap Processing & Facilities | Green Tech Minerals",
  description: "Advanced industrial scrap processing operations: high-tonnage shears, slag crushers, yield induction testing, spectrometry analysis, and heavy logistics facilities.",
  openGraph: {
    title: "Scrap Processing & Facilities | Green Tech Minerals",
    description: "Advanced industrial scrap processing operations: high-tonnage shears, slag crushers, yield induction testing, spectrometry analysis, and heavy logistics facilities.",
    url: "https://greentechminerals.com/scrapping",
    images: [{ url: "/assets/img1.jpg", width: 1200, height: 630, alt: "Scrap Processing Machinery" }],
  },
};

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export default function Scrapping() {
  const processes = [
    {
      title: "Shearing Machine",
      desc: "A heavy-duty industrial shearing system designed to process oversized metal structures and scrap profiles. This powerful machine cleanly cuts materials down into uniform sizes, ensuring they perfectly fit furnace hoppers to optimize melting efficiency and streamline raw material handling.",
      image: "/assets/img1.jpg",
    },
    {
      title: "Bundle Making",
      desc: "Engineered for high-density compaction, this machine compresses loose, lightweight scrap metals—such as cans, sheets, and manufacturing trimmings—into tightly bound, uniform bundles. This process significantly reduces scrap volume, optimizing storage space and transport efficiency.",
      image: "/assets/img4.jpg",
    },
    {
      title: "Casting Mould Breaking Machine",
      desc: "A rugged vertical hydraulic breaking press engineered to smash heavy, solidified blocks of frozen metal or skulls. It safely crushes large masses resulting from sudden power failures or chemical imbalances into smaller, manageable fragments ready for re-melting.",
      image: "/assets/img21.jpeg",
    },
    {
      title: "Slag Crusher",
      desc: "A comprehensive, multi-stage crushing and conveyor system built to process massive industrial plant waste, including all types of industrial slag. By systematically crushing raw slag and passing it through structured magnetic conveyor lines, it successfully extracts valuable trapped iron content.",
      image: "/assets/img6.jpg",
    },
    {
      title: "Scrap Crusher",
      desc: "A high-capacity industrial crushing and shredding plant designed to reduce bulky mixed scrap into uniform, high-density fragments. Features integrated magnetic separators to isolate pure ferrous materials and optimize furnace feeding throughput.",
      image: "/assets/img6.1.jpeg",
    },
    {
      title: "Jam Processing",
      desc: "A high-capacity line of mechanical rotating drums used for separating finer iron particles from non-magnetic dust and slag residues. Through continuous tumbling action, it effectively isolates impurities like high-sulfur compounds ('Jam') to guarantee a cleaner metal charge for production.",
      image: "/assets/img8.jpg",
    },
    {
      title: "Yield Induction Machine",
      desc: "A laboratory-scale induction unit featuring a 5 kg test furnace built for precise iron content verification and yield analysis. It allows our team to run rapid, controlled test melts to accurately assess and grade the metal content of incoming slag and scrap, ensuring our clients consistently receive verified, top-tier materials at competitive wholesale market rates.",
      image: "/assets/img7.jpg",
    },
    {
      title: "Spectrometer",
      desc: "Quality is guaranteed through advanced science. We utilize high-precision Optical Emission Spectrometry (OES) to conduct rapid and accurate elemental analysis of our alloys. By exciting metal samples with a high-energy spark, our spectrometer identifies the chemical fingerprint of the melt, providing a detailed breakdown of elements like Carbon, Silicon, Manganese, and Chromium.",
      image: "/assets/img19.jpeg",
    },
    {
      title: "Warehouse Management",
      desc: "Structured warehousing and computerized logistics control, ensuring verified feedstock inventory is stored safely and dispatched on time.",
      image: "/assets/img2.jpg",
    },
    {
      title: "Crane Facility",
      desc: "Equipped with high-capacity overhead gantry cranes designed for heavy industrial material handling. This facility infrastructure provides safe, precise, and rapid movement of massive scrap loads, liquid metal ladles, and finished industrial products.",
      image: "/assets/img5.jpg",
    },
    {
      title: "Magnetic Lifting",
      desc: "Utilizing high-intensity industrial electromagnets to safely lift and transfer large volumes of scrap metal, ingots, billets, and other products. This system eliminates the need for manual strapping, dramatically accelerating sorting efficiency and improving operational safety.",
      image: "/assets/img18.jpeg",
    },
    {
      title: "Weighing Scale",
      desc: "An industrial-grade, heavy-duty in-house weighbridge designed to streamline yard logistics with pinpoint accuracy and maximum operational efficiency. By enabling immediate, precise tonnage verification for incoming raw scrap and outgoing processed goods, it keeps our supply chain moving smoothly without external delays.",
      image: "/assets/img20.jpg",
    },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Page Header */}
        <div className="mb-16 border-b border-outline-variant pb-8">
          <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] block mb-3 uppercase">
            OPERATIONAL LOGISTICS
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Scrap Processing and Facilities
          </h1>
          <p className="text-lg text-secondary font-light mt-4 max-w-3xl">
            Advanced industrial operations for high-efficiency metal recovery. We deploy high-tonnage shears, electromagnetic lifting machinery, and multi-stage testing setups to guarantee raw material purity.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="space-y-16">
          {processes.map((proc, index) => (
            <div
              key={index}
              id={slugify(proc.title)}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 scroll-mt-28 py-8 border-b border-outline-variant/30 last:border-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image Block */}
              <div className="w-full md:w-1/2 relative overflow-hidden group rounded-2xl border border-outline-variant/30 shadow-md aspect-[16/10]">
                <Image
                  alt={proc.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={proc.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-tertiary-container bg-tertiary-fixed/20 border border-tertiary-container/30 px-2 py-0.5 rounded">
                    SCRAP PROCESSING &amp; FACILITY {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">Active</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight">
                  {proc.title}
                </h2>
                <p className="text-base text-secondary leading-relaxed font-light">
                  {proc.desc}
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 text-xs text-secondary font-mono">
                    <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                    <span>Safety Certified &amp; Spec-compliant</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
