import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaStar, FaQuoteLeft, FaUser, FaCalendarDay, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  //getting all the kind words from the computer memory far away
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/feedbacks');
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      //if the computer is tired i search in its small local pocket
      const stored = localStorage.getItem('portfolio_feedbacks');
      if (stored) setFeedbacks(JSON.parse(stored));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || !username) return;

    const newFeedback = {
      username,
      rating,
      comment
    };

    try {
      const response = await fetch('http://localhost:5000/api/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      });

      if (response.ok) {
        const savedFeedback = await response.json();
        setFeedbacks([savedFeedback, ...feedbacks]);
        
        setIsSent(true);
        setComment('');
        setUsername('');
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch (error) {
      console.error('Error posting feedback:', error);
      //fallback to the small pocket because the big machine is resting
      const localFeedback = { ...newFeedback, id: Date.now(), date: 'Local_Mode' };
      const updated = [localFeedback, ...feedbacks];
      setFeedbacks(updated);
      localStorage.setItem('portfolio_feedbacks', JSON.stringify(updated));
      setIsSent(true);
      setComment('');
      setUsername('');
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background py-24 px-6 relative overflow-hidden">
      {/*these colors in the back make me feel like i am in space*/}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/*this part helps me find my way or see how many people like me*/}
        <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
          <Link to="/" className="group flex items-center gap-3 text-accent hover:text-white transition-all duration-300">
            <div className="w-10 h-10 border border-accent/30 flex items-center justify-center cyber-chamfer-xs group-hover:bg-accent group-hover:text-black transition-all">
              <FaArrowLeft className="text-sm" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase underline-offset-4 group-hover:underline">
              Return_to_Home
            </span>
          </Link>
          <div className="hidden md:flex flex-col items-end">
             <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Feedback_Database</span>
             <span className="text-sm font-heading font-black tracking-tighter uppercase text-accent">{feedbacks.length} RECORDS_STORED</span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-accent/5 border border-accent/20 rounded-sm mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
             <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Feedback_Post</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-4 text-center">
             Share your_<span className="text-accent">FEEDBACK</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-foreground/40 uppercase tracking-[0.2em] text-center max-w-xl">
             your sensory data helps evaluate the stability of this digital substrate
          </p>
        </div>

        {/*the big box where you can put your thoughts*/}
        <div className="max-w-3xl mx-auto w-full bg-white/2 border border-white/10 p-8 md:p-12 cyber-chamfer-sm relative group mb-24">
           {/*corners make the box look very strong and safe*/}
           <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/20 group-hover:border-accent group-hover:w-12 transition-all duration-500"></div>
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/20 group-hover:border-accent group-hover:h-12 transition-all duration-500"></div>

           <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                 {/*tell me your name so i can be your friend*/}
                 <div className="relative group/field">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-30 group-focus-within/field:opacity-100 group-focus-within/field:text-accent transition-all">
                       <FaUser className="text-xs" />
                    </div>
                    <input 
                       type="text"
                       required
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="IDENTIFY_YOURSELF"
                       className="w-full bg-background/50 border border-white/10 p-4 pl-12 text-xs font-mono text-white placeholder:text-white/10 uppercase focus:outline-none focus:border-accent/40 transition-all"
                    />
                 </div>

                 {/*give me some gold stars if i did a good job*/}
                 <div className="flex items-center justify-between px-4 border border-white/10 bg-background/30">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Rating</span>
                    <div className="flex gap-2">
                       {[1, 2, 3, 4, 5].map((star) => (
                          <button
                             key={star}
                             type="button"
                             onClick={() => setRating(star)}
                             className={`text-lg transition-all duration-300 ${rating >= star ? 'text-accent scale-110' : 'text-white/10 grayscale hover:text-accent/30'}`}
                          >
                             <FaStar />
                          </button>
                       ))}
                    </div>
                 </div>
              </div>

              {/*write your feelings in this big empty space*/}
              <div className="relative">
                 <div className="absolute left-0 top-0 p-4 opacity-20 group-focus-within:opacity-100 transition-opacity">
                    <FaQuoteLeft className="text-accent text-xl" />
                 </div>
                 <textarea
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="ENTER_FEEDBACK_DATA_LOG..."
                    className="w-full bg-background/50 border border-white/10 p-8 pl-12 text-sm font-mono text-white placeholder:text-white/10 uppercase focus:outline-none focus:border-accent/40 transition-all min-h-[150px] resize-none"
                 />
              </div>

              {/*push this button to send your love to me*/}
              <button
                 type="submit"
                 className="w-full group relative py-4 bg-accent text-black font-heading font-black text-xs uppercase tracking-[0.3em] overflow-hidden cyber-chamfer-xs transition-all hover:brightness-110 active:scale-[0.98]"
              >
                 <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                 <span className="relative z-10 flex items-center justify-center gap-3">
                    POST
                    <FaPaperPlane className={isSent ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
                 </span>
              </button>
           </form>
        </div>

        {/*this is where everyone's happy words stay together*/}
        <div className="max-w-4xl mx-auto w-full">
           <div className="flex items-center gap-4 mb-12">
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-tighter">Public_Feed</h3>
              <div className="h-px flex-1 bg-white/5"></div>
              <div className="font-mono text-[10px] text-foreground/40 tracking-[0.2em] uppercase">Verified_Transmissions</div>
           </div>

           {feedbacks.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                 <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">No data records currently indexed.</p>
              </div>
           ) : (
              <div className="grid md:grid-cols-2 gap-6 pb-24">
                 {feedbacks.map((fb) => (
                    <div key={fb.id} className="p-6 border border-white/5 bg-white/2 cyber-chamfer-sm group hover:border-accent/20 transition-all relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-16 h-16 bg-accent/2 -rotate-45 translate-x-8 -translate-y-8"></div>
                       
                       <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                <FaUser className="text-[10px]" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-white uppercase font-bold tracking-widest">{fb.username}</span>
                                <span className="text-[8px] font-mono text-foreground/40 uppercase flex items-center gap-1">
                                   <FaCalendarDay className="text-[8px]" /> {fb.date}
                                </span>
                             </div>
                          </div>
                          <div className="flex gap-0.5">
                             {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={`text-[8px] ${i < fb.rating ? 'text-accent' : 'text-white/5'}`} />
                             ))}
                          </div>
                       </div>
                       
                       <div className="relative">
                          <FaQuoteLeft className="absolute -top-2 -left-2 text-accent/10 text-xl" />
                          <p className="text-[11px] font-mono text-foreground/60 leading-relaxed uppercase pl-4">
                             {fb.comment}
                          </p>
                       </div>
                    </div>
                 ))}
              </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
