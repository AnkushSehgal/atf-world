'use client';

import { useState, useEffect } from 'react';

const services = [
  "Engineering & BIM",
  "Education & Learning",
  "Food & Agriculture",
  "Legal & Immigration",
  "Medical Tourism",
  "Digital & Tech",
  "Emotional Wellness",
  "Logistics & Equipment",
  "Tourism & Fashion",
  "Accounting & Finance"
];

export default function ServiceTicker() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % services.length);
        setFade(true);
      }, 500); // Wait for fade out
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-12 flex items-center justify-center overflow-hidden">
      <span
        className={`text-xl md:text-3xl font-light tracking-wider transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
            background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}
      >
        {services[index]}
      </span>
    </div>
  );
}
