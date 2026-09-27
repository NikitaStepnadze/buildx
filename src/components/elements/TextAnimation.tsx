"use client"
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
    text: string;
    textColor?: string;
    fontSize?: string;
    isSpan?: boolean;
}

const TextAnimation: React.FC<Props> = ({ text, textColor, fontSize, isSpan = true }) => {
    // Group letters by word so lines only wrap between words, never mid-word
    const words = text.split(" ").filter(Boolean).map((word) => Array.from(word));
    const LetterTag = isSpan ? motion.span : motion.b;
    const color = textColor ? (textColor === "black" ? "#142012" : textColor) : "";

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.04 * i
            }
        })
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            x: 20,
            y: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="normal-case"
            style={{
                whiteSpace: "normal",
                display: "inline-block",
                ...(fontSize ? { fontSize: `clamp(20px, 4vw, ${fontSize}px)` } : {}), // Responsive text
                lineHeight: "1.3",
                width: "100%",
                maxWidth: "100%",
            }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    {/* <bdi> instead of <span> so theme rules like `.section-title-two__title span` don't apply */}
                    <bdi className="text-anim-word" style={{ display: "inline-block", whiteSpace: "nowrap", fontWeight: "inherit" }}>
                        {word.map((letter, index) => (
                            <LetterTag
                                variants={child}
                                key={index}
                                style={{ color, display: "inline-block" }}
                            >
                                {letter}
                            </LetterTag>
                        ))}
                    </bdi>
                    {wordIndex < words.length - 1 && " "}
                </React.Fragment>
            ))}
        </motion.div>
    );
};

export default TextAnimation;