'use client';
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [isScrolled, setIsSCrolled] = useState(false);
  useEffect(() => {
    const handScroll = () => {
      if (window.scrollY > 0) {
        setIsSCrolled(true);
      } else {
        setIsSCrolled(false);
      }
    };
    window.addEventListener('scroll', handScroll);

    return () => {
      window.removeEventListener('scroll', handScroll);
    };
  }, []);

  return isScrolled;
};
