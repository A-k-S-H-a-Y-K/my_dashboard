'use client';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function WorkExperienceModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] text-[#86C232] border border-[#86C232] rounded-xl shadow-2xl w-full max-w-xl min-h-[200px] p-8 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:right-4 text-[#86C232] text-2xl hover:text-white"
        >
          ×
        </button>
        <div
          className={`text-2xl leading-relaxed text-white whitespace-pre-wrap break-words ${vt323.className}`}
        >
          <span className="text-[#86C232]">&gt;</span>{' '}
          In transit of developing my skills
          <span className="blink">_</span>
        </div>
      </div>
    </div>
  );
}
