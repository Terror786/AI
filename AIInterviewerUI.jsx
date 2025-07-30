import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AnimaBot from "./AnimaBot"; // Download or create your .json Lottie avatar!

const questions = [
  "Tell me about yourself.",
  "Why do you want this role?",
  // ...more questions
];

export default function AIInterviewerUI() {
  const currentQuestion = 0; // Example: implement state logic for flow
  const lottieRef = useRef();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Animated Avatar */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
        style={{ marginBottom: 32 }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={AnimaBot}
          style={{ width: 180, height: 180 }}
          loop
          autoplay
        />
      </motion.div>

      {/* Animated Question Prompt */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
        style={{
          padding: "24px 32px",
          borderRadius: 18,
          background: "#fff",
          boxShadow: "0 6px 32px rgba(0,0,0,0.09)",
          marginBottom: 32,
          maxWidth: 480
        }}
      >
        <h2 style={{ color: "#3637b8", margin: 0 }}>AI Interviewer</h2>
        <p style={{ margin: "14px 0 0 0", fontSize: "1.25rem" }}>
          {questions[currentQuestion]}
        </p>
      </motion.div>

      {/* Example Micro-interaction: Next Button */}
      <motion.button
        whileHover={{ scale: 1.06, boxShadow: "0 0 8px #3637b866" }}
        whileTap={{ scale: 0.98 }}
        style={{
          border: "none",
          background: "#3637b8",
          color: "#fff",
          borderRadius: 7,
          padding: "14px 38px",
          fontSize: "1.1rem",
          cursor: "pointer"
        }}
        // onClick: add question-advance logic here
      >
        Next Question
      </motion.button>
    </div>
  );
}
