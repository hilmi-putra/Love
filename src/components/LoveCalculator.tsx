import { useState } from 'react';
import { Heart, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

const calculateLove = (name1: string, name2: string): { score: number | string; message: string; special: boolean } => {
  const n1 = name1.trim().toLowerCase();
  const n2 = name2.trim().toLowerCase();

  const isSpecial =
    n1 === 'hilmi' || n2 === 'hilmi' || n1 === 'lail' || n2 === 'lail';

  if (isSpecial) {
    return {
      score: '10,000,000,000,000,000,000,000,000',
      message: 'A match made in heaven! Destiny brought you together, and the universe bows to your love!',
      special: true,
    };
  }

  // Random score based on names to be deterministic but seemingly random
  let seed = 0;
  for (let i = 0; i < n1.length; i++) seed += n1.charCodeAt(i);
  for (let i = 0; i < n2.length; i++) seed += n2.charCodeAt(i);
  
  // Use a pseudo-random algorithm based on the text
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

export default function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<{ score: number | string; message: string; special: boolean } | null>(null);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) return;

    setCalculating(true);
    setResult(null);
    setProgress(0);

    const matchResult = calculateLove(name1, name2);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setCalculating(false);
        setResult(matchResult);
        setOpen(true);
        
        if (matchResult.special || (typeof matchResult.score === 'number' && matchResult.score >= 75)) {
          triggerConfetti(matchResult.special);
        }
      }
    }, 50);
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
        colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585', '#db7093']
      });
      confetti({
        particleCount: isSpecial ? 5 : 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585', '#db7093']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-auto shadow-2xl border-pink-200 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mx-auto mb-4 bg-pink-100 p-4 rounded-full inline-block shadow-inner"
            >
              <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
            </motion.div>
            <CardTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Love Calculator
            </CardTitle>
            <CardDescription className="text-pink-700/70 font-medium">
              Discover your true romantic compatibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <Input
                    placeholder="Your Name"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    className="pl-10 border-pink-200 focus-visible:ring-pink-400 h-12 text-lg rounded-xl transition-all group-hover:border-pink-300"
                    required
                  />
                  <Heart className="w-5 h-5 text-pink-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                
                <div className="flex justify-center">
                  <span className="bg-pink-100 text-pink-500 rounded-full p-2 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>

                <div className="relative group">
                  <Input
                    placeholder="Their Name"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    className="pl-10 border-pink-200 focus-visible:ring-pink-400 h-12 text-lg rounded-xl transition-all group-hover:border-pink-300"
                    required
                  />
                  <Heart className="w-5 h-5 text-pink-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {calculating && (
                <div className="space-y-2 py-2">
                  <Progress value={progress} className="h-2 bg-pink-100" />
                  <p className="text-sm text-center text-pink-600 font-medium animate-pulse">
                    Consulting the stars...
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-bold rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-pink-500/25 transition-all active:scale-95 text-white"
                disabled={calculating || !name1.trim() || !name2.trim()}
              >
                {calculating ? 'Calculating...' : 'Check Compatibility'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center pt-2 pb-6">
            <p className="text-xs text-pink-400/80 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              For entertainment purposes only
            </p>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-pink-200 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md">
          <AnimatePresence>
            {result && open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center space-y-6 py-6"
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center text-gray-800 font-bold mb-2">
                    {name1} <span className="text-pink-500 px-2">&</span> {name2}
                  </DialogTitle>
                </DialogHeader>

                <div className="relative inline-block">
                  <motion.div
                    animate={result.special ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ repeat: Infinity, duration: result.special ? 0.5 : 1.5 }}
                    className="absolute inset-0 bg-pink-200 rounded-full blur-2xl opacity-50"
                  />
                  <div className="relative text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 p-4">
                    {result.score}%
                  </div>
                </div>

                <DialogDescription className="text-lg text-gray-700 font-medium px-4 leading-relaxed">
                  {result.message}
                </DialogDescription>

                <Button 
                  onClick={() => setOpen(false)}
                  className="bg-pink-100 text-pink-600 hover:bg-pink-200 hover:text-pink-700 font-semibold rounded-full px-8"
                  variant="outline"
                >
                  Close
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}
