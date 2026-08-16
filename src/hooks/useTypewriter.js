import { useState, useEffect } from 'react';

export function useTypewriter(phrases, typingSpeed = 90, deletingSpeed = 45, pauseMs = 1400) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = pauseMs;
    } else if (isDeleting && charIndex === 0) {
      delay = 400;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(i => (i + 1) % phrases.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
