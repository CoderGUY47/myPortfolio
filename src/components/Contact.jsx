import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/MovingBorder";

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const subject = formData.get("subject") || "Portfolio Inquiry";
    const message = formData.get("message");

    const emailBody = `Hi S.M.Hasan,\n\nName: ${name}\n\n${message}\n\nSent via Portfolio Signal.`;

    // ⚡ SYSTEM TRANSMISSION (Using OS Share menu as the primary sender)
    if (navigator.share) {
      try {
        await navigator.share({
          title: subject,
          text: emailBody,
        });
        return; // Success: User chose an app to send the signal
      } catch (err) {
        if (err.name !== "AbortError")
          console.error("Signal share failed:", err);
      }
    }

    // 🛡️ FALLBACK: NATIVE MAILTO
    const mailtoUrl = `mailto:s.m.hasan4599@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleShare = async () => {
    const shareData = {
      title: "S.M.Hasan's Digital Interface",
      text: "Explore high-end digital engineering and interactive design at S.M.Hasan's Portfolio.",
      url: window.location.href,
    };

    try {
      const response = await fetch("/biopic.png");
      const blob = await response.blob();
      const file = new File([blob], "hridoy-profile.png", { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        shareData.files = [file];
      }
    } catch (err) {
      console.log("File share not supported by OS:", err);
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError")
          console.error("Profile share failed:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-dark-bg"
    >
      {/* Parallax Background Glows */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none"
      ></motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none"
      ></motion.div>

      <div className="w-[90%] md:w-[80%] max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-400 font-black tracking-[0.4em] text-[10px] uppercase bg-primary-950/30 px-6 py-2 rounded-full border border-primary-500/20 mb-8 inline-block">
              Connection Hub
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
              Let's build <br />
              <span className="text-gradient">the future</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed font-medium italic">
              Whether you have a focused project or a wild idea, I'm here to{" "}
              <br className="hidden lg:block" />
              engineer the digital interface that brings it to life.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "fa-solid fa-envelope-open-text",
                  label: "Email",
                  value: "s.m.hasan4599@gmail.com",
                  action: () =>
                    (window.location.href = "mailto:s.m.hasan4599@gmail.com"),
                },
                {
                  icon: "fa-solid fa-share-nodes",
                  label: "Share System",
                  value: "Share Profile",
                  action: handleShare,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={item.action}
                  className="group flex items-center space-x-6 cursor-pointer"
                >
                  <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl text-primary-400 text-xl shadow-xl border border-white/5 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary-400/60">
                      {item.label}
                    </h4>
                    <p className="text-slate-200 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            {/* ⚡ THE MOVING BORDER CONTAINER */}
            <Button
              borderRadius="3rem"
              duration={4000}
              className="bg-slate-950/40 backdrop-blur-3xl border-0"
              containerClassName="w-full h-auto p-[4px]"
            >
              <div className="p-8 md:p-12 h-full w-full">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white/90">
                    Send a <span className="text-primary-400">Signal</span>
                  </h3>
                  <motion.div
                    animate={{
                      opacity: [1, 0.4, 1],
                      scale: [1, 1.2, 1],
                      filter: [
                        "drop-shadow(0 0 2px #8b5cf6)",
                        "drop-shadow(0 0 15px #8b5cf6)",
                        "drop-shadow(0 0 2px #8b5cf6)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-primary-400 text-xl"
                  >
                    <i className="fa-solid fa-lightbulb"></i>
                  </motion.div>
                </div>

                <form
                  onSubmit={handleEmailSubmit}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group/field">
                      <input
                        type="text"
                        name="name"
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-primary-500 transition-all font-medium text-white placeholder-transparent"
                        required
                      />
                      <label className="absolute left-0 -top-4 text-primary-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-400 pointer-events-none">
                        Name
                      </label>
                    </div>

                    <div className="relative group/field">
                      <input
                        type="email"
                        name="email"
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-primary-500 transition-all font-medium text-white placeholder-transparent"
                        required
                      />
                      <label className="absolute left-0 -top-4 text-primary-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-400 pointer-events-none">
                        Email
                      </label>
                    </div>
                  </div>

                  <div className="relative group/field">
                    <input
                      type="text"
                      name="subject"
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-primary-500 transition-all font-medium text-white placeholder-transparent"
                    />
                    <label className="absolute left-0 -top-4 text-primary-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary-400 pointer-events-none">
                      Subject
                    </label>
                  </div>

                  <div className="relative group/field pt-4">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-primary-500 transition-all font-medium text-white placeholder-transparent resize-none"
                      required
                    ></textarea>
                    <label className="absolute left-0 -top-2 text-primary-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-placeholder-shown:text-slate-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-400 pointer-events-none">
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-6 bg-linear-to-r from-primary-600 to-indigo-600 rounded-3xl font-black uppercase tracking-[0.3em] text-xs hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 text-white flex items-center justify-center gap-3">
                      Deploy Mission
                      <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    </span>
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </form>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
