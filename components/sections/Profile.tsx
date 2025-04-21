'use client';

import { useEffect } from 'react';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function ProfileModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      const modal = document.getElementById('profile-modal') as HTMLDialogElement;
      modal?.showModal();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-start justify-center z-50 overflow-y-auto px-4 py-8">
      <div className="relative bg-[#1a1a1a] text-[#86C232] border border-[#86C232] rounded-xl shadow-2xl w-full max-w-4xl min-h-[300px] p-6 sm:p-8 mt-20">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#86C232] text-2xl sm:text-3xl hover:text-white z-50"
        >
          ×
        </button>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Name</h4>
            <p className="text-white text-lg">Akshay K</p>
          </div>

          {/* About */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}About</h4>
            <p className="text-white text-lg">
              A tech enthusiast driven by innovation and big challenges. I love building impactful solutions, chasing adrenaline, and pushing limits. Always learning, always creating. I don't follow trends—I set them. I'm here to disrupt, explore bold ideas, and leave a lasting mark
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Education</h4>
            <p className="text-white text-lg">Bachelor's in Computer Science - SIT, Tumkur</p>
          </div>

          {/* Personality */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Personality</h4>
            <p className="text-white text-lg">
              Curious, creative, and always ready for a challenge
            </p>
          </div>

          {/* Current Role */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Current Role</h4>
            <p className="text-white text-lg">Full Stack AI Developer Intern at StackLane</p>
          </div>

          {/* Goal */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Goal</h4>
            <p className="text-white text-lg">
              To build innovative tech that makes a real impact
            </p>
          </div>

          {/* Fun Fact */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Fun Fact</h4>
            <p className="text-white text-lg">
              Go check out my interests to know more about me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
