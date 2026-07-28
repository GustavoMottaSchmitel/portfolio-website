"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const stage = document.querySelector<HTMLElement>(".portrait-stage");
    const handlePointer = (event: PointerEvent) => {
      if (!stage || event.pointerType === "touch") return;
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--pointer-x", x.toFixed(3));
      stage.style.setProperty("--pointer-y", y.toFixed(3));
    };
    stage?.addEventListener("pointermove", handlePointer);
    stage?.addEventListener("pointerleave", () => {
      stage.style.setProperty("--pointer-x", "0");
      stage.style.setProperty("--pointer-y", "0");
    });

    return () => {
      observer.disconnect();
      stage?.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return null;
}
