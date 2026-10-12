"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./demo.module.css";

type HeroAssemblyVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export default function HeroAssemblyVideo({ src, poster, label }: HeroAssemblyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"still" | "playing" | "ended">("still");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let started = false;

    const playOnce = () => {
      if (started || reducedMotion.matches) return;
      started = true;
      video.muted = true;
      void video.play().catch(() => setState("still"));
    };

    const stopForReducedMotion = () => {
      if (!reducedMotion.matches) return;
      video.pause();
      video.currentTime = 0;
      setState("still");
    };

    const onPlaying = () => setState("playing");
    const onEnded = () => setState("ended");
    const onError = () => setState("still");

    video.addEventListener("playing", onPlaying);
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    reducedMotion.addEventListener("change", stopForReducedMotion);

    if (!reducedMotion.matches && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer?.disconnect();
          playOnce();
        }
      }, { threshold: 0.25 });
      observer.observe(video);
    } else if (!reducedMotion.matches) {
      playOnce();
    }

    return () => {
      observer?.disconnect();
      video.pause();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      reducedMotion.removeEventListener("change", stopForReducedMotion);
    };
  }, [src]);

  return (
    <div className={styles.heroBackdrop} data-state={state} aria-label={label}>
      <Image
        className={styles.heroVideoPoster}
        src={poster}
        alt=""
        fill
        sizes="100vw"
        priority
      />
      <video
        ref={videoRef}
        className={styles.heroAssemblyVideo}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        tabIndex={-1}
        aria-hidden="true"
      />
      <noscript>
        <img className={styles.heroVideoNoScript} src={poster} alt="" />
      </noscript>
    </div>
  );
}
