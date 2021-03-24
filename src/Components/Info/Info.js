import React from "react";
import "./Info.css";
import { motion } from "framer-motion";
import { Animation, Transition } from "../Animation/Animation";

function Info() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={Animation}
      transition={Transition}
      className="info-main"
    >
      Info page
    </motion.div>
  );
}

export default Info;
