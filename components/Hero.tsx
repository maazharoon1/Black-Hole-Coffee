"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { business } from "@/data/business";
import { heroImage } from "@/data/gallery";

const lineVariants = {
  hidden: { y: "105%" },
  visible: { y: "0%" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero ">
      <div className="hero-media">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-grain" aria-hidden="true" />

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span>Scroll</span>
        <div className="line-anim" />
      </motion.div>

      <div className="hero-inner mt-20">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="dot" />
          <span className="label accent">Houston, Texas</span>
        </motion.div>

        <h1 className="hero-title">
          <span className="line">
            <motion.span
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.1, ease: [0.16, 0.84, 0.44, 1] }}
            >
              BLACK HOLE
            </motion.span>
          </span>
          <span className="line">
            <motion.span
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.1, ease: [0.16, 0.84, 0.44, 1], delay: 0.12 }}
            >
              Coffee House
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero-sub"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          Coffee for the curious. A dark, warm room on Graustark Street where conversation
          slows down and stays.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <a href="#location" className="btn btn-fill">
            Visit Us
            <ArrowRight aria-hidden="true" />
          </a>
          <a
            href={business.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Get Directions
            <ArrowRight aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span className="stars">★★★★☆</span>
          <span className="txt">
            {business.rating} · {business.reviewCount.toLocaleString()}+ Reviews
          </span>
        </motion.div>
      
      
      </div>
    </section>
  );
}
