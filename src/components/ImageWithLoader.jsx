import { useState,useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageWithLoader({ className, width, height, src, alt, enlargeable}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [enlarge, setEnlarge] = useState(false);
  const [isAbove, setIsAbove] = useState(false);
  const [animations, setAnimations] = useState({});
  const containerRef = useRef(null);


  const animateEnlargedImage = (container, animDuration, isResize) => {
    if(!container) return; 
    const imgContainer = container.firstChild;

    const imgRect = imgContainer.getBoundingClientRect();
    const scaleWidth = (window.innerWidth * .9) / imgRect.width;
    const scaleHeight = (window.innerHeight * .9) / imgRect.height;
    const scale = Math.min(scaleWidth, scaleHeight);
    const translateX = -imgRect.x + window.innerWidth/2 - imgRect.width/2;
    const translateY = -imgRect.y + window.innerHeight/2 - imgRect.height/2;
    
    imgContainer.style.width = `${imgRect.width}px`;
    imgContainer.style.height = `${imgRect.height}px`;
    imgContainer.style.left = `${imgRect.x}px`;
    imgContainer.style.top = `${imgRect.y}px`;

    console.log("Scale:", scale);
    console.log("TranslateX:", translateX, "TranslateY:", translateY);
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
    const animDuration = .5;
    if(!enlarge) {
      setIsAbove(true);

      animateEnlargedImage(container, animDuration);
    }
    else {
      imgContainer.style.width = "";
      imgContainer.style.height = "";
      imgContainer.style.left = "";
      imgContainer.style.top = "";
      setAnimations({
        start: { scale: 1, x: 0, y: 0 },
        animate: { scale: 1, x: 0, y: 0 },
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
      if(enlarge) {
        // Clear the previous timeout
        clearTimeout(resizeTimeout);

        // Set a new timeout to debounce the resize event
        resizeTimeout = setTimeout(() => {
          const container = containerRef.current;
          if (container) {
            animateEnlargedImage(container, 0.5, true); // Update animation on resize
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
                  +  `${isAbove ? 'above' : ''}`} 
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
            />
          </motion.div>
        </AnimatePresence>
          {enlargeable && enlarge && (
            <button className="enlarge" onClick={handleEnlarge}>
              <img src="svg/close.svg" alt="enlarge"/>
            </button>
            )}
      </div>
       {enlargeable && !enlarge && (
            <button className="enlarge" onClick={handleEnlarge}>
              <img src="svg/enlarge.svg" alt="enlarge"/>
            </button>
            )}
    </div>
  );
}

export default ImageWithLoader;