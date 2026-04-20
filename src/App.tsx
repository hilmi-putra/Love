import LoveCalculator from './components/LoveCalculator';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Floating background hearts */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmI2YzEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAuODQgNC42MWExLjEgMS4xIDAgMCAwLTEuNTMgMGwtMS41OSAxLjU5Yy0uNDcuNDctMS4yMi40Ni0xLjY5LTAxLTEuNjgtMS42OS00LjIzLTEuNTgtNS45MS4xMmwtLjYzLjYzLS42My0uNjNjLTEuNjgtMS43LTQuMjMtMS44MS01LjkxLS4xMmExLjEgMS4xIDAgMCAwIDAgMS41bDEuNTkgMS41OWMuNDcuNDcgMS4yMi40NiAxLjY5IDBsMS42OS0xLjY5YzEuNjgtMS42OSA0LjIzLTEuNTggNS45MS0uMTIuMDUuMDUuMTAuMTAuMTUuMTV6Ii8+PC9zdmc+')] opacity-20" style={{ backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="z-10 w-full max-w-5xl flex flex-col items-center">
        <LoveCalculator />
      </div>
    </div>
  );
}

export default App;
