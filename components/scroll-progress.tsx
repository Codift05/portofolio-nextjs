"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-primary/15">
        <motion.div
          className="h-1 bg-primary origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
}