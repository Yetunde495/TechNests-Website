import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Noise } from "./wobble-cards";



const IMG_PADDING = 12;
interface AnimatedComponentProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}


export const StickyDiv = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url("/assets/trading.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden bg-black/80 bg-blend-overlay  w-full"
    >
      <motion.div
        className="absolute inset-0 bg-transparent"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export const OverlayCopy = ({
 children
}: {
  children: ReactNode;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0.75, 1, 1]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-white"
    >
    {children}
    </motion.div>
  );
};

export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, delay = 0, duration = 0.5, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjust threshold as needed
  });

  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: 'easeInOut',
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};




