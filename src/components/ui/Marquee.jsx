import { duration } from "@mui/material";
import { animate, motion } from "framer-motion";
import React from "react";

const Marquee = ({ content, bg }) => {
  // variant starts
  const marqueeVariant = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };
  // variant ends
  return (
    <div className={`${bg} py-5 border-b-[0.8px] border-gray-600`}>
      <div className="marquee relative w-screen max-w-[100%] overflow-hidden h-[50px] flex items-center justify-center">
        <motion.div
          className="absolute whitespace-nowrap"
          variants={marqueeVariant}
          animate="animate"
        >
          <h3 className="text-black text-4xl uppercase">{content}</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
