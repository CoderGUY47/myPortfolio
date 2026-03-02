import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/20">
      <div className="w-[90%] md:w-[70%] mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} DEV.PORTFOLIO. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-sm text-slate-400">
          <a href="#" className="hover:text-primary-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
