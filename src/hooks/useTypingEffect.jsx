import { useState, useEffect } from 'react';

export function useTypingEffect(texts, typingSpeed = 100, delayBetweenTexts = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  // Typing effect
  useEffect(() => {
    if (index >= texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      // Delay before starting to erase
      const timeout = setTimeout(() => {
        setReverse(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (reverse) {
        setSubIndex((prev) => prev - 1);
        setText(texts[index].substring(0, subIndex - 1));
      } else {
        setSubIndex((prev) => prev + 1);
        setText(texts[index].substring(0, subIndex));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, typingSpeed, delayBetweenTexts]);

  return text;
}
