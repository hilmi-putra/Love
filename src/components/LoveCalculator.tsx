import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

export default function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<{ score: number | string; message: string; special: boolean } | null>(null);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateLove = (name1: string, name2: string) => {
    const n1 = name1.trim().toLowerCase();
    const n2 = name2.trim().toLowerCase();

    const isDevaYushi = (n1 === 'deva' && n2 === 'yushi') || (n1 === 'yushi' && n2 === 'deva');

    if (isDevaYushi) {
      return {
        score: '∞',
        message: 'Infinite love! A bond that defies all logic and spans across eternity.',
        special: true,
      };
    }

    const isSpecial = n1 === 'hilmi' || n2 === 'hilmi' || n1 === 'lail' || n2 === 'lail';

    if (isSpecial) {
      return {
        score: '10,000,000,000,000,000,000,000,000',
        message: 'A match made in heaven! Destiny brought you together, and the universe bows to your love!',
        special: true,
      };
    }

    let seed = 0;
    for (let i = 0; i < n1.length; i++) seed += n1.charCodeAt(i);
    for (let i = 0; i < n2.length; i++) seed += n2.charCodeAt(i);
    
    const x = Math.sin(seed++) * 10000;
    const rawScore = x - Math.floor(x);
    const score = Math.floor(rawScore * 100);

    let message = '';
    if (score >= 90) message = 'True Soulmates! You are perfectly meant for each other.';
    else if (score >= 75) message = 'Sizzling Chemistry! Things are looking incredibly bright.';
    else if (score >= 50) message = 'A Solid Connection! With a little effort, love can truly blossom.';
    else if (score >= 25) message = 'Friends First? There\'s potential, but it might take time.';
    else message = 'Opposites Attract! It might be a bumpy ride, but love is unpredictable.';

    return { score, message, special: false };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) return;

    setCalculating(true);
    setResult(null);
    setProgress(0);

    const matchResult = calculateLove(name1, name2);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setCalculating(false);
        setResult(matchResult);
        setOpen(true);
        if (matchResult.special || (typeof matchResult.score === 'number' && matchResult.score >= 75)) {
          setTimeout(() => triggerConfetti(matchResult.special), 100);
        }
      }
    }, 40);
  };

  const triggerConfetti = (isSpecial: boolean) => {
    const duration = isSpecial ? 5000 : 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: isSpecial ? 5 : 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        zIndex: 10000,
        colors: ['#FE5C36', '#91214D', '#E59FFF', '#7182FA', '#2A7C65']
      });
      confetti({
        particleCount: isSpecial ? 5 : 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        zIndex: 10000,
        colors: ['#FE5C36', '#91214D', '#E59FFF', '#7182FA', '#2A7C65']
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <>
      <form onSubmit={handleCalculate} className="flex flex-col gap-5 w-full h-full text-black">
        <div className="flex flex-col gap-3 flex-1 justify-center">
          <input
            placeholder="Your Name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            className="w-full bg-[#FF8059] placeholder:text-black/60 text-black border-2 border-black/20 focus:border-black outline-none px-4 py-3 rounded-lg font-bold text-lg transition-colors placeholder:font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
            required
          />
          
          <div className="flex justify-center my-1 relative">
             <div className="w-8 h-8 rounded-full bg-[#F3EBE1] flex items-center justify-center shadow-sm z-10border-2 border-black">
               <Heart className="w-4 h-4 text-[#FE5C36] fill-[#FE5C36] animate-pulse" />
             </div>
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/10 -translate-y-1/2 rounded-full" />
          </div>

          <input
            placeholder="Their Name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            className="w-full bg-[#FF8059] placeholder:text-black/60 text-black border-2 border-black/20 focus:border-black outline-none px-4 py-3 rounded-lg font-bold text-lg transition-colors placeholder:font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
            required
          />
        </div>

        {calculating && (
          <div className="space-y-2 mt-2">
            <Progress value={progress} className="h-2 bg-black/10 [&>div]:bg-black" />
            <p className="text-xs text-center font-bold text-black/80 animate-pulse">Calculating destiny...</p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={calculating || !name1.trim() || !name2.trim()}
          className="w-full py-3.5 bg-black text-[#F3EBE1] rounded-xl font-bold text-xl hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2 mt-auto shadow-xl"
        >
          {calculating ? 'Checking...' : 'Check Match'}
          {!calculating && <Sparkles className="w-5 h-5 text-yellow-300" />}
        </button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-0 rounded-3xl overflow-hidden bg-[#F3EBE1] shadow-2xl p-0 gap-0">
          <AnimatePresence>
            {result && open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-full bg-black py-4 px-6 border-b-4 border-[#FE5C36]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center text-[#F3EBE1] font-black break-words">
                      {name1} <span className="text-[#FE5C36] px-2 font-serif italic text-3xl">&</span> {name2}
                    </DialogTitle>
                  </DialogHeader>
                </div>

                <div className="p-8 flex flex-col items-center w-full">
                  <div className="relative inline-block w-full text-center">
                    <motion.div
                      animate={result.special ? { scale: [1, 1.1, 1] } : { scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: result.special ? 0.5 : 1.5 }}
                      className="absolute inset-0 bg-[#FE5C36] rounded-full blur-3xl opacity-20 -z-10"
                    />
                    <div className={`relative font-black text-[#FE5C36] drop-shadow-sm p-4 break-all ${result.special ? 'text-4xl sm:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#FE5C36] to-[#91214D]' : 'text-7xl tracking-tighter'}`}>
                      {result.score}%
                    </div>
                  </div>

                  <DialogDescription className="text-xl text-black font-bold px-4 mt-4 leading-snug break-words">
                    {result.message}
                  </DialogDescription>

                  <button 
                    onClick={() => setOpen(false)}
                    className="mt-8 bg-black text-[#F3EBE1] hover:bg-gray-800 font-bold rounded-xl px-10 py-3 transition-transform active:scale-95 text-lg"
                  >
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}
