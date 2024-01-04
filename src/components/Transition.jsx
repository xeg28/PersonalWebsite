import {motion} from 'framer-motion';

const animations = {
    initial: {opacity: 0, x: -window.innerWidth},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: window.innerWidth, transition:{duration: .3}}
}

const Transition = ({children}) => {
    return (
        <motion.div 
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{duration: .3}}
        >
            {children}
        </motion.div> 
    );
};

export default Transition;