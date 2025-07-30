import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import '../css/Tooltip.css';

const Tooltip = ({ children, text}) => {
  const targetRef = useRef();
  const tooltipRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible && targetRef.current && tooltipRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const wrapperRect = document
        .getElementById('tooltip-wrapper')
        .getBoundingClientRect();

      let yValue = rect.top - wrapperRect.top - 40;
      if(yValue <= 0) {
        yValue = rect.top - wrapperRect.top + 5 + rect.height;
      }
      setCoords({
        x: rect.left,
        y: yValue, // adjust if needed
        translateX: `calc(-50% + ${rect.width / 2}px)`
      });
    }
  }, [visible]);

  const tooltip = (
    <motion.div
      initial={{scale: .5, opacity: 0}}
      animate={{scale:1, opacity:1}}
      exit={{scale: .5, opacity: 0}}
      transition={{duration: .1}}
      class="tooltip"
      ref={tooltipRef}
      style={{
        top: coords.y,
        left: coords.x,
        x: `${coords.translateX}`
      }}
    >
      {text}
    </motion.div>
  );

  return (
    <>
      <span 
        ref={targetRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ cursor: 'pointer', lineHeight: 0, display: 'inline-block'}}
      >
        {children}
      </span>
      {
        createPortal(
          (
            <AnimatePresence>
              {visible && tooltip}
            </AnimatePresence>
          ),
          document.getElementById('tooltip-wrapper')
        )
      }
    </>
  );
};

export default Tooltip;
