"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./demo.module.css";

type AnimatedLogoProps = {
  src: string;
  poster: string;
  priority?: boolean;
};

export default function AnimatedLogo({ src, poster, priority = false }: AnimatedLogoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"pending" | "playing" | "still">("pending");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let started = false;
    let finished = false;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;

    const showStill = () => {
      if (cancelled) return;
      finished = true;
      clearTimeout(timeout);
      video.pause();
      setState("still");
    };

    const showVideo = () => {
      clearTimeout(timeout);
      if (cancelled || finished || reducedMotion.matches) {
        video.pause();
        return;
      }
      setState("playing");
    };

    const playOnce = () => {
      if (started || finished || reducedMotion.matches) return;
      started = true;
      video.muted = true;
      // Keep the brand visible if loading or autoplay is blocked.
      timeout = setTimeout(showStill, 6000);
      void video.play().catch(showStill);
    };

    const onMotionChange = () => {
      if (reducedMotion.matches) showStill();
    };

    video.addEventListener("playing", showVideo);
    video.addEventListener("ended", showStill);
    video.addEventListener("error", showStill);
    reducedMotion.addEventListener("change", onMotionChange);

    if (reducedMotion.matches) {
      showStill();
    } else if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer?.disconnect();
          playOnce();
        }
      }, { threshold: 0.2 });
      observer.observe(video);
    } else {
      playOnce();
    }

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      observer?.disconnect();
      video.pause();
      video.removeEventListener("playing", showVideo);
      video.removeEventListener("ended", showStill);
      video.removeEventListener("error", showStill);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [src]);

  return (
    <span className={styles.animatedLogo} data-state={state} aria-hidden="true">
      <Image
        className={styles.logoStill}
        src={poster}
        alt=""
        width={640}
        height={360}
        sizes="(max-width: 650px) 144px, 192px"
        priority={priority}
      />
      <video
        ref={videoRef}
        className={styles.logoVideo}
        src={src}
        muted
        playsInline
        preload="none"
        disablePictureInPicture
        tabIndex={-1}
      />
      <noscript>
        <img className={styles.logoNoScript} src={poster} width={640} height={360} alt="" />
      </noscript>
    </span>
  );
}
