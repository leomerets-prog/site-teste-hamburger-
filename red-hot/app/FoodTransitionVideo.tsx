"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./demo.module.css";

type Props = { src: string; poster: string; label: string };

export default function FoodTransitionVideo({ src, poster, label }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    userPaused.current = reducedMotion.matches;
    const syncPlayback = () => {
      if (visible && !userPaused.current) {
        video.muted = true;
        void video.play().catch(() => setPlaying(false));
      } else {
        video.pause();
      }
    };
    const onMotionChange = () => {
      userPaused.current = reducedMotion.matches;
      syncPlayback();
    };

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
          syncPlayback();
        }, { threshold: [0, 0.25] })
      : undefined;

    reducedMotion.addEventListener("change", onMotionChange);
    observer?.observe(video);

    return () => {
      observer?.disconnect();
      video.pause();
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [src]);

  const toggleMotion = () => {
    const video = videoRef.current;
    if (!video) return;
    userPaused.current = !video.paused;
    if (userPaused.current) video.pause();
    else void video.play().catch(() => setPlaying(false));
  };

  return (
    <div className={styles.transitionFrame}>
      <div className={styles.transitionScreen} role="img" aria-label={label}>
        <Image
          src={poster}
          alt=""
          fill
          sizes="(max-width: 390px) calc(100vw - 68px), 350px"
          className={styles.transitionPoster}
          style={{ opacity: hasPlayed && !failed ? 0 : 1 }}
        />
        <video
      ref={videoRef}
      className={styles.transitionPlayer}
      src={src}
      poster={poster}
      width={720}
      height={1280}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      tabIndex={-1}
      aria-hidden="true"
      style={{ opacity: hasPlayed && !failed ? 1 : 0 }}
      onPlaying={() => { setPlaying(true); setHasPlayed(true); }}
      onPause={() => setPlaying(false)}
      onError={() => { setFailed(true); setPlaying(false); }}
        />
      </div>
      {!failed && <button
        className={styles.motionToggle}
        type="button"
        onClick={toggleMotion}
        aria-label={playing ? "Pausar animação" : "Reproduzir animação"}
        title={playing ? "Pausar animação" : "Reproduzir animação"}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
          {playing ? <path d="M7 5h4v14H7zm6 0h4v14h-4z" /> : <path d="m8 5 11 7-11 7z" />}
        </svg>
      </button>}
    </div>
  );
}
