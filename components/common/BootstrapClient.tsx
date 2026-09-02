"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    void (async () => {
      await Promise.all([
        import("bootstrap/js/dist/dropdown"),
        import("bootstrap/js/dist/collapse"),
        import("bootstrap/js/dist/modal"),
        import("bootstrap/js/dist/offcanvas"),
      ]);
    })();
  }, []);

  return null;
}
