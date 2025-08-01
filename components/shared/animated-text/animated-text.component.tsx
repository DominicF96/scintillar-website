"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/shadcn";

interface AnimatedTextProps {
  text: string;
  isVisible: boolean;
  className?: string;
  animationDuration?: number;
}

export default function AnimatedText({ 
  text, 
  isVisible, 
  className,
  animationDuration = 300 
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState(isVisible ? text : "");
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevVisibility, setPrevVisibility] = useState(isVisible);

  useEffect(() => {
    // Only animate when visibility actually changes
    if (prevVisibility === isVisible) return;
    
    setPrevVisibility(isVisible);
    setIsAnimating(true);
    
    if (isVisible) {
      // Expanding: add letters one by one
      let currentIndex = 0;
      const letterDelay = Math.max(animationDuration / text.length, 15); // Min 15ms per letter
      
      const addLetter = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          
          if (currentIndex <= text.length) {
            setTimeout(addLetter, letterDelay);
          } else {
            setIsAnimating(false);
          }
        }
      };
      
      // Small delay to let container start expanding first
      setTimeout(addLetter, 50);
    } else {
      // Collapsing: remove letters one by one (faster)
      let currentLength = displayText.length;
      const letterDelay = Math.max(animationDuration / (currentLength * 2), 10); // Faster collapse
      
      const removeLetter = () => {
        if (currentLength >= 0) {
          setDisplayText(displayText.slice(0, currentLength));
          currentLength--;
          
          if (currentLength >= 0) {
            setTimeout(removeLetter, letterDelay);
          } else {
            setIsAnimating(false);
          }
        }
      };
      
      if (currentLength > 0) {
        removeLetter();
      } else {
        setIsAnimating(false);
      }
    }
  }, [isVisible, text, animationDuration, prevVisibility]);

  // Update text when it changes (without animation)
  useEffect(() => {
    if (!isAnimating && isVisible) {
      setDisplayText(text);
    }
  }, [text, isAnimating, isVisible]);

  return (
    <span className={cn("truncate", className)}>
      {displayText}
      {/* Invisible placeholder to maintain container width */}
      <span className="absolute opacity-0 pointer-events-none whitespace-nowrap">
        {text}
      </span>
    </span>
  );
}