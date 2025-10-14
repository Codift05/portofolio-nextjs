"use client";

import { motion } from "framer-motion";

export default function NeonGrid() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Radial glow center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.2 }}
        className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25)_0%,transparent_60%)]"
      />
      {/* Perspective grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20
        [background-image:linear-gradient(#0ea5e9_1px,transparent_1px),linear-gradient(90deg,#0ea5e9_1px,transparent_1px)]
        [background-size:40px_40px]
        [transform:perspective(600px)_rotateX(60deg)]"
      />
    </div>
  );
}