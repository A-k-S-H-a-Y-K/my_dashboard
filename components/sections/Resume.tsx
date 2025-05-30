// 'use client';

// import { useEffect, useRef } from 'react';
// import toast from 'react-hot-toast';

// export default function Resume() {
//   const hasRun = useRef(false);

//   useEffect(() => {
//     if (hasRun.current) return;
//     hasRun.current = true;

//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     toast.success('Downloading resume...');
//   }, []);

//   return null;
// }




'use client';

import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function Resume() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const link = document.createElement('a');
    link.href = '/resume/resume.pdf'; // <- Corrected path
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Downloading resume...');
  }, []);

  return null;
}
