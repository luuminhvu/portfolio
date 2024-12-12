import { motion } from "framer-motion";
import React from "react";
const stairsAnimation = {
  initial: {
    top: 0,
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reserveIndex = (index: number) => {
  const total = 6;
  return total - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className="h-full w-full bg-white relative"
            variants={stairsAnimation}
            exit="exit"
            animate="animate"
            initial="initial"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reserveIndex(index) * 0.1,
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
