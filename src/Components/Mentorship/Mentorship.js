import React from "react";
import "./Mentorship.css";
import { motion } from "framer-motion";
import { Animation, Transition } from "../Animation/Animation";

function Mentorship() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={Animation}
      transition={Transition}
      className="mentorship-main"
    >
      Mentorship page
    </motion.div>
  );
}

export default Mentorship;
