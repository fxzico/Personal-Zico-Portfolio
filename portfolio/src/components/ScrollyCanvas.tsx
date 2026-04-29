"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent } from "framer-motion";

const IMG_BASE_PATH = "/sequence/Frame";

export default function ScrollyCanvas({
  scrollYProgress,
}: {
  scrollYProgress: any;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [totalFrames, setTotalFrames] = useState(88);

  // Preload images
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Use Media Queries to determine frames based on if user is on phone or laptop
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    const handler = (e: MediaQueryListEvent) => {
      setTotalFrames(e.matches ? 44 : 88); 
    };
    
    // Initial assignment based on current screen measurement
    const initialTotalFrames = mediaQuery.matches ? 44 : 88;
    setTotalFrames(initialTotalFrames);

    // Modern event listener replacement with guard block
    if (mediaQuery && typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handler);
    } else if (mediaQuery && typeof (mediaQuery as any).addListener === 'function') {
      (mediaQuery as any).addListener(handler);
    }

    const loadedImages: HTMLImageElement[] = new Array(initialTotalFrames);
    const PRIORITY_FRAMES = 10;
    let priorityLoadedCount = 0;

    // Load priority frames first
    const loadPriorityFrames = () => {
      const targetCount = Math.min(PRIORITY_FRAMES, initialTotalFrames);
      
      for (let i = 0; i < targetCount; i++) {
        const frameNum = i.toString().padStart(2, "0");
        const img = new Image();
        img.src = `${IMG_BASE_PATH}${frameNum}.webp`;
        
        img.onload = () => {
          loadedImages[i] = img;
          priorityLoadedCount++;
          setLoadingProgress(Math.round((priorityLoadedCount / targetCount) * 100));
          
          if (priorityLoadedCount === targetCount) {
            setImages([...loadedImages]); // update state with initial frames
            setIsLoaded(true); // Hide loading screen
            loadRemainingFrames(); // Continue loading in background
          }
        };
      }
    };

    // Load remaining frames in background
    const loadRemainingFrames = () => {
      let bgLoadedCount = 0;
      const remainingCount = initialTotalFrames - PRIORITY_FRAMES;
      
      if (remainingCount <= 0) return;

      for (let j = PRIORITY_FRAMES; j < initialTotalFrames; j++) {
        const bgFrameNum = j.toString().padStart(2, "0");
        const bgImg = new Image();
        bgImg.src = `${IMG_BASE_PATH}${bgFrameNum}.webp`;
        
        bgImg.onload = () => {
          loadedImages[j] = bgImg;
          bgLoadedCount++;
          // Periodically update the images array to allow rendering of newly loaded frames
          if (bgLoadedCount % 5 === 0 || bgLoadedCount === remainingCount) {
            setImages([...loadedImages]);
          }
        };
      }
    };

    loadPriorityFrames();

    return () => {
      // Cleanup using guard block
      if (mediaQuery && typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handler);
      } else if (mediaQuery && typeof (mediaQuery as any).removeListener === 'function') {
        (mediaQuery as any).removeListener(handler);
      }
    };
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current || !isLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Ensure canvas dimensions match window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const frameIndex = Math.min(
      Math.floor(latest * totalFrames),
      totalFrames - 1
    );
    renderFrame(frameIndex);
  });

  // Handle resize and render initial frame
  useEffect(() => {
    if (!isLoaded) return;
    renderFrame(0);

    const handleResize = () => {
      const frameIndex = Math.min(
        Math.floor(scrollYProgress.get() * totalFrames),
        totalFrames - 1
      );
      renderFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, totalFrames, scrollYProgress]);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-[100] text-white font-sans">
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="text-sm tracking-widest uppercase text-white/70">
            Loading Cinematic Experience {loadingProgress}%
          </p>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block object-cover" />
    </>
  );
}
