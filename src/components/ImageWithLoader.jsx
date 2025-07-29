import { useState,useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageWithLoader({ className, width, height, src, alt, enlargeable}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [enlarge, setEnlarge] = useState(false);
  const [isAbove, setIsAbove] = useState(false);
  const [isEnlargable, setIsEnlargeable] = useState(enlargeable);
  const [animations, setAnimations] = useState({});
  const containerRef = useRef(null);

  const animateEnlargedImage = (container, animDuration, isResize) => {
    if(!container) return; 
    const imgContainer = container.firstChild;
    const imgRect = imgContainer.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(imgContainer);
    const leftValue = parseFloat(computedStyle.left, 10); 
    const topValue = parseFloat(computedStyle.top, 10); 
    const widthValue = parseFloat(computedStyle.width, 10);
    const heightValue = parseFloat(computedStyle.height, 10);

    const scaleWidth = (window.innerWidth * .9) / widthValue;
    const scaleHeight = (window.innerHeight * .9) / heightValue;
    const scale = Math.min(scaleWidth, scaleHeight);
    const width = parseFloat(computedStyle.width, 10) *scale;
    const height = parseFloat(computedStyle.height, 10) *scale;

    
    let translateX = window.innerWidth / 2 - (imgRect.x/2 + imgRect.width / 2);
    let translateY = window.innerHeight / 2 - (imgRect.y/2 + imgRect.height / 2);
    if(isResize) {
      translateX = -leftValue + window.innerWidth / 2 - width/(scale*2); 
      translateY = -topValue + window.innerHeight / 2 - height/(scale*2);
    }
    setAnimations({
      start: {scale: 1, x:0, y:0},
      animate: {scale: scale, x: translateX, y: translateY},
      transition: {duration: animDuration}
    })
  }

  const handleEnlarge = () => {
    const body = document.querySelector('body');
    body.classList.toggle("no-scroll");
    const container = containerRef.current;
    const imgContainer = container.firstChild;
    const animDuration = 0.3;
    if(!enlarge) {
      const imgRect = imgContainer.getBoundingClientRect();
      imgContainer.style.width = `${imgRect.width}px`;
      imgContainer.style.height = `${imgRect.height}px`;
      imgContainer.style.left = `${imgRect.x}px`;
      imgContainer.style.top = `${imgRect.y}px`;
      animateEnlargedImage(container, animDuration);
    }
    else {
      setIsAbove(true);
      const parent = container.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const scaleWidth = (window.innerWidth * .9) / parentRect.width;
      const scaleHeight = (window.innerWidth * .9) / parentRect.height;
      const scale = Math.min(scaleWidth, scaleHeight);
      imgContainer.style.width = "";
      imgContainer.style.height = "";
      imgContainer.style.left = "";
      imgContainer.style.top = "";
      setAnimations({
        start: {scale: scale, x: 0, y: 0},
        animate: {scale: 1, x:0, y: 0},
        transition: {duration: animDuration}
      })
      
      setTimeout(()=> {
        setIsAbove(false);
      }, animDuration*1000)
    }
    
    setEnlarge((prev) => {
      return !prev;
    })
  }

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      if(window.innerWidth <= 685) {
        setIsEnlargeable(false);
      }
      else {
        setIsEnlargeable(enlargeable);
      }
      if(enlarge) {
       
        // Clear the previous timeout
        clearTimeout(resizeTimeout);

        // Set a new timeout to debounce the resize event
        resizeTimeout = setTimeout(() => {
          const container = containerRef.current;
          if (container) {
            animateEnlargedImage(container, 0.2, true); // Update animation on resize
          }
        }, 500); 
      }
    }
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [enlarge])

  return (
    <div className={`${className} image-container ${!isLoaded ? 'loading' : ''}`}
    style={{width: width, height: height}}>
      <div className={`${!isLoaded ? 'hidden' : 'visible'} ` + `${enlarge ? 'enlarged' : ""} `
                  +  `${isAbove ? 'collapsing' : ''}`} 
      ref={containerRef} >
        <AnimatePresence>
          <motion.div 
          {...animations}
          className="relative">
            <img
              src={src}
              alt={alt}
              onLoad={() => setIsLoaded(true)}
              className="relative"
              onClick={enlarge ? handleEnlarge : undefined}
            />
          </motion.div>
        </AnimatePresence>
          {enlargeable && enlarge && (
            <button className="enlarge" onClick={handleEnlarge}>
              <img src="svg/close.svg" alt="enlarge"/>
            </button>
            )}
      </div>
       {isEnlargable && !enlarge && (
            <button className="enlarge" onClick={handleEnlarge}>
              <img src="svg/enlarge.svg" alt="enlarge"/>
            </button>
            )}
    </div>
  );
}

export default ImageWithLoader;