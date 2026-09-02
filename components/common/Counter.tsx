"use client";
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  min?: number;
  max: number;
  parentClass?: string;
}

const Counter = ({ min = 0, max }: CounterProps) => {
  const targetElement = useRef<HTMLSpanElement>(null);
  const [counted, setCounted] = useState(min);

  useEffect(() => {
    const element = targetElement.current;
    if (!element) return;

    const startCountup = () => {
      const intervalId = setInterval(() => {
        setCounted((prevCount) => {
          const tempCount = prevCount + Math.ceil(max / 20);
          if (tempCount >= max) {
            clearInterval(intervalId);
            return max;
          }
          return tempCount;
        });
      }, 50);
    };

    const handleIntersection: IntersectionObserverCallback = (
      entries,
      observer,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [max]);

  return <span ref={targetElement}>{counted}</span>;
};

export default Counter;
