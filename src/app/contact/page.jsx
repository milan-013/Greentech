"use client";

import React from "react";
import { Phone, Mail, MapPin, BadgeCheck } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-container text-white py-16">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs font-bold text-tertiary-fixed tracking-[0.25em] block uppercase">
              GLOBAL ESTABLISHMENT
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              CONTACT INFORMATION
            </h1>
            <div className="w-24 h-1 bg-tertiary-fixed"></div>
            <p className="text-base md:text-lg text-slate-300 font-light max-w-lg leading-relaxed pt-2">
              Direct communication channels for institutional inquiries, regulatory correspondence, and global security partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Main Bento Info Grid */}
      <section className="py-16 px-6 md:px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Address Card */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 rounded-xl paper-shadow group">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-surface-container-low p-4 rounded-lg">
                <MapPin className="h-8 w-8 text-tertiary-container" />
              </div>
              <span className="font-mono text-[10px] font-bold text-outline uppercase tracking-widest">
                Registered Office
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-primary mb-3">
                OFFICE ADDRESS
              </h2>
              <p className="text-base text-on-surface-variant font-light leading-relaxed max-w-md">
                FE-33, Adityapur Industrial Area, Phase-7,
                <br />
                Jamshedpur, Jharkhand,
                <br />
                India - 832109
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs text-secondary font-light">Verified Physical Presence</span>
              <BadgeCheck className="h-5 w-5 text-tertiary-container" />
            </div>
          </div>

          {/* Phone Card */}
          <div className="md:col-span-4 bg-primary text-white rounded-xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="bg-white/10 w-fit p-4 rounded-lg">
                <Phone className="h-8 w-8 text-tertiary-fixed" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-white">
                TELEPHONE
              </h2>
              <div className="space-y-2 font-semibold text-lg md:text-xl font-mono">
                <a className="block hover:text-tertiary-fixed transition-colors" href="tel:+91 8847872809">
                  +91 88478 72809
                </a>
                {/* <a className="block hover:text-tertiary-fixed transition-colors" href="tel:+916204538350">
                  +91 62045 38350
                </a> */}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-8 font-light relative z-10">
              Available 24/7 for operational protocols.
            </p>
          </div>

          {/* Email Card */}
          <div className="md:col-span-12 bg-surface-container-low rounded-xl p-8 border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6 paper-shadow">
            <div className="flex items-center gap-4">
              <div className="document-frame rounded shadow-sm">
                <div className="p-4 bg-surface-container-lowest">
                  <Mail className="h-7 w-7 text-tertiary-container" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary uppercase tracking-wide">
                  EMAIL INQUIRIES
                </h2>
                <p className="text-sm text-secondary font-light mt-0.5">For official intelligence and regulatory compliance matters.</p>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <a
                className="inline-block w-full md:w-auto text-center text-xl md:text-2xl font-black text-primary border-b-2 border-primary hover:pb-1 transition-all duration-300 font-mono"
                href="mailto:greentechminerals007@gmail.com"
              >
                greentechminerals007@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}