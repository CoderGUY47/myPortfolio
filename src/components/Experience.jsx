import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'DAFFODIL_International_University',
      role: 'B.Sc. in CSE',
      period: '2021 - PRESENT',
      description: 'Mastering algorithmic rigor via DSA and DBMS protocols. Conducting performance-based research in Web Optimization and AI accuracy, achieving 95+ Google Lighthouse standards across production-ready solutions.',
      tech: ['DSA', 'DBMS', 'Software_Engineering', 'Web_Optimization', 'AI_Research', 'Optimization']
    },
    {
      company: 'OXPECKER_BOOK_HUB',
      role: 'AI_DRIVEN_MERN_DEVELOPER',
      period: '2025 - PRESENT',
      description: 'Architecting a P2P academic marketplace substrate. Implemented Bento-grid UI protocols increasing navigation efficiency by 25%. Engineered advanced search-filter algorithms and fluid scroll-triggered animations.',
      tech: ['MERN_STACK', 'P2P_PROTOCOL', 'BENTO_UI', 'FILTER_ALGORITHMS', 'FRAMER_MOTION', 'UI_UX']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="flex flex-col items-center mb-6 text-center px-6">
        <span className="text-accent-secondary font-mono text-[10px] tracking-[0.5em] block mb-2 uppercase">// CAREER_LOGS</span>
        <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter">
          Experience
        </h2>
        {/* Animated Smooth Scanning Underline */}
        <div className="relative w-48 h-0.5 mt-6 overflow-hidden bg-white/5 rounded-full">
           <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-secondary to-transparent animate-[sweep_3s_linear_infinite]"></div>
        </div>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div 
            key={i}
            className="group relative flex flex-col md:flex-row items-start gap-6 p-6 border border-accent-secondary md:border-white/5 bg-card/20 cyber-chamfer-sm lg:hover:border-accent-secondary/40 lg:hover:bg-white/1 transition-all duration-500"
          >
            {/* Period Sidebar */}
            <div className="md:w-1/5 flex flex-col">
              <span className="text-lg font-heading font-black text-accent-secondary group-hover:neon-text transition-all">
                {exp.period}
              </span>
              <span className="text-[8px] font-mono text-foreground/20 uppercase tracking-widest mt-1">
                UID: 0{i + 1}_LOG
              </span>
            </div>

            {/* Content Body */}
            <div className="flex-1">
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider">
                  {exp.company.replace(/_/g, ' ')}
                </h3>
                <span className="text-[10px] font-mono text-accent/70 uppercase tracking-widest mt-0.5">
                  &gt; {exp.role.replace(/_/g, ' ')}
                </span>
              </div>

              <p className="max-w-xl text-sm font-mono text-white leading-relaxed uppercase mb-6">
                {exp.description}
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-3">
                {exp.tech.map(t => (
                  <span 
                    key={t}
                    className="px-2 py-0.5 border border-white/10 text-xs font-mono text-white/80 uppercase tracking-widest group-hover:border-accent-secondary/50 group-hover:text-white transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
