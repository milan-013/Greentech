import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 px-6 md:px-16 bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand & Mission Statement */}
          <div className="max-w-md space-y-4">
            <div className="text-2xl font-bold text-white tracking-wide">
              Green Tech Minerals
            </div>
            <p className="text-sm leading-relaxed text-slate-300 font-light">
              A global leader in secure industrial operations, logistics and enterprise-level risk management. Dedicated to authority and integrity in every transaction.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest font-mono">
                Company
              </span>
              <Link className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light" href="/about">
                About Us
              </Link>
              <Link className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light" href="/about">
                Compliance
              </Link>
              {/* <a className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light" href="#">
                Investor Relations
              </a> */}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest font-mono">
                Support
              </span>
              <Link className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light" href="/contact">
                Contact Us
              </Link>
              <Link className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light" href="/contact">
                Global Offices
              </Link>
              {/* <a className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light" href="#">
                Privacy Policy
              </a> */}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest font-mono">
                Verification
              </span>
              <a
                className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light"
                href="https://drive.google.com/file/d/1WV0WSIFjDJpgWN2dNWbWiSzMCDKYrx29/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                GST Verify
              </a>
              <a
                className="text-sm text-slate-300 hover:text-tertiary-fixed transition-colors font-light"
                href="https://drive.google.com/file/d/1S_K35Z1baKHZuh7uodrtg6CuQfHjoRH3/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trading License
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs text-slate-400 font-mono text-center md:text-left">
            &copy; {currentYear} Green Tech Minerals Global. All rights reserved. Professionalism, Authority, Integrity.
          </span>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-white transition-colors" href="/">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="text-slate-400 hover:text-white transition-colors" href="mailto:greentechminerals007@gmail.com">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <a className="text-slate-400 hover:text-white transition-colors" href="/about">
              <span className="material-symbols-outlined text-[20px]">description</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
