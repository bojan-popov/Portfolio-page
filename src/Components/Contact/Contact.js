import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { Animation, Transition } from "../Animation/Animation";

function Contact() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={Animation}
      transition={Transition}
      className="contact-main"
    >
      Contact page
    </motion.div>
  );
}

export default Contact;
