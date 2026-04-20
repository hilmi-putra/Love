import { Sparkles, Camera, Phone, Smile, Hand, Heart as HeartBubble } from 'lucide-react';
import LoveCalculator from './components/LoveCalculator';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center p-2 sm:p-6 md:p-12 font-sans selection:bg-[#FE5C36] selection:text-black">
      <div className="w-full max-w-6xl md:aspect-[4/3] bg-[#F1EBE3] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden flex flex-col shadow-2xl shadow-[#FE5C36]/10 border border-white/10">
        
        {/* HEADER / NAVIGATION */}
        <header className="flex justify-between items-center w-full relative z-50">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-[#FE5C36] fill-[#FE5C36] absolute -top-1 -left-1 opacity-80 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-2xl sm:text-3xl font-black text-black ml-4 tracking-tighter">love</span>
            </div>
          </div>
          
          <div className="text-3xl sm:text-4xl font-black italic tracking-tighter text-black select-none opacity-90 mx-auto absolute left-1/2 -translate-x-1/2">
            truus
          </div>
          
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FE5C36] transition-colors">
            <HeartBubble className="w-5 h-5 text-[#F1EBE3] fill-[#F1EBE3]" />
          </div>
        </header>

        {/* MAIN TITLE */}
        <div className="mt-12 sm:mt-20 md:mt-24 text-center z-40 relative">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tight relative inline-block">
            calculate your love:
            <div className="absolute -bottom-3 left-0 w-full h-[6px] bg-black/80 rounded-full" />
            <div className="absolute -bottom-5 left-8 w-[90%] h-[2px] bg-black/60 rounded-full" />
          </h1>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex-1 mt-16 sm:mt-24 w-full relative flex items-center justify-center min-h-[500px]">

          {/* GREEN CARD (Leftmost) */}
          <div className="absolute top-10 sm:top-1/2 sm:-translate-y-1/2 w-48 sm:w-64 h-[340px] sm:h-[420px] bg-[#378564] rounded-2xl sm:rounded-3xl shadow-xl -rotate-12 -translate-x-[25%] sm:-translate-x-[160%] hover:z-50 hover:-translate-y-5 transition-transform duration-300 p-6 flex flex-col text-white z-10 border-2 border-black/5">
            <div className="text-2xl sm:text-3xl font-black tracking-tighter mb-6">destiny</div>
            <ul className="space-y-4 text-sm sm:text-base font-bold opacity-90 flex-1">
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Horoscope matching</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> 360° Astrology</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Compatibility</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Numerology</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Future Reading</li>
            </ul>
            {/* Sticker */}
            <div className="absolute -top-6 -right-6 bg-[#2A2B2A] rounded-xl p-3 shadow-lg rotate-[15deg] border-4 border-white text-white">
               <Camera className="w-10 h-10" />
               <Sparkles className="w-4 h-4 absolute -top-1 -left-1 text-white" />
            </div>
          </div>

          {/* BLUE CARD (Middle-Left) */}
          <div className="absolute top-12 sm:top-1/2 sm:-translate-y-1/2 w-48 sm:w-64 h-[360px] sm:h-[440px] bg-[#7F93FC] rounded-2xl sm:rounded-3xl shadow-xl -rotate-6 -translate-x-[10%] sm:-translate-x-[80%] hover:z-50 hover:-translate-y-5 transition-transform duration-300 p-6 flex flex-col text-black z-20 border-2 border-black/5">
            <div className="text-2xl sm:text-3xl font-black tracking-tighter mb-6 mt-4">connection</div>
            <ul className="space-y-4 text-sm sm:text-base font-bold opacity-80 flex-1">
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1">✦</span> Shared Interests</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1">✦</span> Deep Talks</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1">✦</span> Communication</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1">✦</span> Emotional Bond</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1">✦</span> Social Battery</li>
            </ul>
            {/* Sticker */}
            <div className="absolute -top-7 -left-1 sm:-left-6 bg-[#FBEF56] rounded-xl p-3 shadow-lg -rotate-[20deg] border-[3px] border-[#DE403B] text-[#DE403B]">
               <Phone className="w-8 h-8" />
               <Sparkles className="w-5 h-5 absolute -top-2 -right-2 text-[#DE403B]" />
            </div>
          </div>

          {/* PLUM CARD (Middle-Right) */}
          <div className="absolute top-12 sm:top-1/2 sm:-translate-y-1/2 w-48 sm:w-64 h-[360px] sm:h-[440px] bg-[#A82B56] rounded-2xl sm:rounded-3xl shadow-xl rotate-6 translate-x-[10%] sm:translate-x-[80%] hover:z-50 hover:-translate-y-5 transition-transform duration-300 p-6 flex flex-col text-white z-20 border-2 border-black/5 mt-4 sm:mt-8">
            <div className="text-2xl sm:text-3xl font-black tracking-tighter mb-6 mt-4 leading-tight">romance<br/>production</div>
            <div className="w-full h-0.5 bg-white/30 mb-6"></div>
            <ul className="space-y-4 text-sm sm:text-base font-bold opacity-90 flex-1">
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Dinner Dates</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Love Letters</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Hidden Gifts</li>
              <li className="flex gap-2 items-start"><Sparkles className="w-4 h-4 shrink-0 mt-1" /> Weekend Trips</li>
            </ul>
            {/* Sticker */}
            <div className="absolute -top-9 right-[15%] bg-[#EBFF7A] rounded-xl p-3 shadow-lg -rotate-[10deg] border-2 border-transparent text-[#E33939]">
               <Hand className="w-10 h-10" />
            </div>
          </div>

          {/* PINK CARD (Rightmost) */}
          <div className="absolute top-10 sm:top-1/2 sm:-translate-y-1/2 w-48 sm:w-64 h-[340px] sm:h-[420px] bg-[#ECA6FF] rounded-2xl sm:rounded-3xl shadow-xl space-y-4 rotate-12 translate-x-[25%] sm:translate-x-[160%] hover:z-50 hover:-translate-y-5 transition-transform duration-300 p-6 flex flex-col text-black z-10 border-2 border-black/5 mt-6 sm:mt-16">
            <div className="text-2xl sm:text-3xl font-black tracking-tighter mb-4 mt-8 leading-tight">with<br/>partners</div>
            <div className="w-[80%] h-1 bg-black mb-1"></div>
            <div className="w-[60%] h-0.5 bg-black/50 mb-6"></div>
            <ul className="space-y-4 text-sm sm:text-base font-bold opacity-80 flex-1">
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1 text-black font-black">✦</span> Long-term goals</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1 text-black font-black">✦</span> Shared Accounts</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1 text-black font-black">✦</span> Moving in</li>
              <li className="flex gap-2 items-start"><span className="text-lg leading-none shrink-0 mt-1 text-black font-black">✦</span> Growing old</li>
            </ul>
            {/* Sticker */}
            <div className="absolute -top-4 -right-4 bg-[#76264A] rounded-2xl p-4 shadow-[0_8px_0_#FFF] rotate-[20deg] text-[#FFF]">
               <HeartBubble className="w-8 h-8 fill-white" />
               <Sparkles className="w-5 h-5 absolute -top-1 -left-2 text-white" />
            </div>
          </div>

          {/* ORANGE CARD (Center - Highest Z-Index) Contains The Calculator */}
          <div className="absolute top-0 sm:top-1/2 sm:-translate-y-1/2 w-64 sm:w-[320px] h-[400px] sm:h-[480px] bg-[#FE5C36] rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-40 transition-transform duration-300 p-6 sm:p-8 flex flex-col text-white border-2 border-black/5 mb-10 sm:mb-0 hover:-translate-y-2">
             {/* Sticker */}
             <div className="absolute -top-7 sm:-top-7 -right-2 sm:-right-6 bg-[#6389FE] rounded-full p-2 shadow-lg rotate-[8deg] border-[3px] border-white text-white z-50">
               <Smile className="w-12 h-12" />
            </div>
            
            <div className="text-2xl sm:text-3xl font-black text-black tracking-tighter mb-4 text-center">calculator</div>
            <div className="w-full h-0.5 bg-black/20 mb-6 relative">
              <div className="absolute left-1/2 top-0 w-1/3 h-0.5 bg-black -translate-x-1/2"></div>
            </div>
            
            {/* Embedded Form Component */}
            <div className="flex-1 w-full flex items-center justify-center relative">
               <LoveCalculator />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
