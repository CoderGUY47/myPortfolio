import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'DAFFODIL_INT_UNIVERSITY',
      role: 'B.SC_IN_COMPUTER_SCIENCE_ENGINEER',
      period: '2021 - 2026',
      description: 'Core focus on Software Engineering, Data Structures, and AI. Developing industry-standard applications while maintaining academic excellence.',
      tech: ['SOFTWARE_ARCH', 'ALGORITHMS', 'RESEARCH']
    },
    {
      company: 'GOODS_PANDA_E-COMMERCE',
      role: 'REACT_FRONTEND_ENGINEER',
      period: '2024 - PRESENT',
      description: 'Building premium, high-conversion user interfaces for local and global e-commerce substrates. Optimized for state-of-the-art performance.',
      tech: ['REACT_VITE', 'TAILWIND_V4', 'UI_UX']
    },
    {
      company: 'AI_LABS_DIU',
      role: 'PROJECT_CONTRIBUTOR',
      period: '2023 - 2025',
      description: 'Collaborating on AI-driven small modules and utility tools for internal student management systems.',
      tech: ['PYTHON', 'JS_DOM', 'OPEN_SOURCE']
    },
    {
      company: 'GITHUB_OPEN_CORE',
      role: 'SYSTEM_CONTRIBUTOR',
      period: '2021 - 2024',
      description: 'Documenting and developing 50+ repositories ranging from basic data structures to advanced UI components.',
      tech: ['GIT', 'CLEAN_CODE', 'SYSTEM_TRAIN']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="flex flex-col items-center mb-6 text-center px-6">
        <span className="text-accent-secondary font-mono text-[10px] tracking-[0.5em] block mb-2 uppercase">// CAREER_LOGS</span>
        <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter">
          PROJECT_TIMELINE
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
            className="group relative flex flex-col md:flex-row items-start gap-6 p-6 border border-white/5 bg-card/20 cyber-chamfer-sm hover:border-accent-secondary/40 hover:bg-white/1 transition-all duration-500"
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

              <p className="max-w-xl text-xs font-mono text-foreground/40 leading-relaxed uppercase mb-6">
                {exp.description}
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-3">
                {exp.tech.map(t => (
                  <span 
                    key={t}
                    className="px-2 py-0.5 border border-white/10 text-[8px] font-mono text-foreground/30 uppercase tracking-widest group-hover:border-accent-secondary/20 group-hover:text-foreground transition-all"
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
