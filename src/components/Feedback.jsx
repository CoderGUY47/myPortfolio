import React, { useState } from 'react';
import { FaPaperPlane, FaStar, FaQuoteLeft } from 'react-icons/fa';

const Feedback = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return;

    // Direct Gmail Compose URL for feedback
    const targetEmail = "s.m.hasan4599@gmail.com";
    const subject = `Portfolio Feedback - ${rating} Stars`;
    const body = `Rating: ${rating}/5 Stars\n\nFeedback:\n${comment}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
    setIsSent(true);
    setComment('');
  };

  return (
    <section id="feedback" className="py-24 relative overflow-hidden bg-background border-t border-white/5 selection:bg-accent selection:text-black">
      {/* Background HUD Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/2 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header HUD */}
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-accent/5 border border-accent/20 rounded-sm mb-6">
           <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
           <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Protocol_Feedback</span>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-4">
             TRANSMIT_<span className="text-accent underline decoration-accent/20 underline-offset-8">REVIEW</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-foreground/40 uppercase tracking-[0.2em]">
             your engineering insights help optimize the substrate
          </p>
        </div>

        <div className="w-full max-w-2xl bg-white/2 border border-white/10 p-8 md:p-12 cyber-chamfer-sm relative group">
           {/* Decorative Corners */}
           <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/20 group-hover:border-accent group-hover:w-12 transition-all duration-500"></div>
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/20 group-hover:border-accent group-hover:h-12 transition-all duration-500"></div>

           <form onSubmit={handleSubmit} className="space-y-8">
              {/* Star Rating Matrix */}
              <div className="flex flex-col items-center gap-4">
                 <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Experience_Rating</span>
                 <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                       <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-2xl transition-all duration-300 ${rating >= star ? 'text-accent drop-shadow-[0_0_8px_rgba(0,255,136,0.4)] scale-110' : 'text-white/10 grayscale hover:grayscale-0 hover:text-accent/40'}`}
                       >
                          <FaStar />
                       </button>
                    ))}
                 </div>
              </div>

              {/* Feedback Input Node */}
              <div className="relative">
                 <div className="absolute left-0 top-0 p-4 opacity-20 group-focus-within:opacity-100 transition-opacity">
                    <FaQuoteLeft className="text-accent text-xl" />
                 </div>
                 <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="ENTER_SENSORY_DATA_LOG... (WHAT WAS YOUR EXPERIENCE?)"
                    className="w-full bg-background/50 border border-white/10 p-8 pl-12 text-sm font-mono text-white placeholder:text-white/10 uppercase focus:outline-none focus:border-accent/50 transition-all min-h-[150px] resize-none"
                 />
                 <div className="absolute bottom-4 right-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    Buffered_Uplink
                 </div>
              </div>

              {/* Transmit Command */}
              <button
                 type="submit"
                 disabled={!comment}
                 className="w-full group relative py-4 bg-accent text-black font-heading font-black text-[14px] uppercase tracking-[0.3em] overflow-hidden cyber-chamfer-xs transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-20 disabled:grayscale"
              >
                 <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                 <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSent ? 'TRANSMISSION_COMPLETE' : 'EXECUTE_TRANSMISSION'}
                    <FaPaperPlane className={`text-sm ${isSent ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                 </span>
              </button>
           </form>
        </div>

        {/* Post-Submit Signal */}
        {isSent && (
           <div className="mt-8 flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-widest animate-pulse">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Log successfully indexed into central matrix
           </div>
        )}
      </div>

      {/* Decorative Side Metadata */}
      <div className="absolute bottom-8 left-8 hidden lg:block opacity-10">
         <div className="font-mono text-[7px] text-white flex flex-col gap-1 uppercase tracking-widest">
            <span>Uplink_Node: FE_01</span>
            <span>Protocol: REVIEW_SYNC</span>
            <span>Encryption: AES_256_ACTIVE</span>
         </div>
      </div>
    </section>
  );
};

export default Feedback;
