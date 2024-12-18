import { cn } from "../utils/uiUtils.tsx";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
  }) => {
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(""),
      };
    });
  
    const renderWords = () => {
      return (
        <div className="flex space-x-2 lg:space-x-3  text-sm  lg:text-4xl">
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black`, word.className)}>
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <div className={cn("flex space-x-1 my-6", className)}>
        <motion.div
          className="overflow-hidden pb-2"
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: "fit-content",
          }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 1,
          }}
        >
          <div
            className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {renderWords()}
          </div>
        </motion.div>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-yellow-300",
            cursorClassName
          )}
        ></motion.span>
      </div>
    );
  };
  