"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type WOW from "wow.js";

export default function WowClient() {
  const wowRef = useRef<WOW | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    void import("wow.js").then(({ default: WOWClass }) => {
      if (!mounted) {
        return;
      }

      const wow = new WOWClass({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      });

      wow.init();
      wowRef.current = wow;
    });

    return () => {
      mounted = false;
      wowRef.current?.stop();
      wowRef.current = null;
    };
  }, []);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      wowRef.current?.sync();
    });

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
