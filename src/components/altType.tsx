"use client"
import React, { useState, useEffect } from 'react';

interface Props {
    strings: string[];
    loop?: boolean;
}

export default function Typewriter({ strings, loop = true }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing in milliseconds
  const deletingSpeed = 50; // Speed of deleting in milliseconds
  const pauseTime = 1500; // Pause time before starting the next string
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleType = () => {
      const fullText = strings[currentIndex];
      setDisplayedText(prevText =>
        isDeleting
          ? fullText.substring(0, prevText.length - 1)
          : fullText.substring(0, prevText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentIndex(prevIndex =>
          loop
            ? (prevIndex + 1) % strings.length
            : Math.min(prevIndex + 1, strings.length - 1)
        );
      }
    };

    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimer = setTimeout(handleType, typingDelay);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, strings, currentIndex, loop]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500); // Adjust cursor blink speed here

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span>
      {displayedText}
      <span style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
    </span>
  );
};
