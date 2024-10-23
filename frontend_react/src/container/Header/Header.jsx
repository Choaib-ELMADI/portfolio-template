import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.css';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header">
        <div className="app__header-solution">
          <motion.div
            whileInView={ { x: [-100, 0], opacity: [0, 1] } }
            transition={ { duration: 0.5 } }
            className="app_header-info"
          >
            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋🏼</span>
                <div style={ { marginLeft: 20 } }>
                  <p className="p-text">Hello, I'm</p>
                  <h1 className="head-text">Choaib</h1>
                </div>
              </div>

              <div className="tag-cmp app__flex">
                <p className="p-text">Engineering Student</p>
                <p className="p-text">Passionate Programmer</p>
              </div>
            </div>

          </motion.div>

          <motion.img
            whileInView={ { opacity: [0, 1] } }
            transition={ { duration: 0.5 } }
            className="app__header-img"
            src={ images.profile } alt="profile-bg"
          />
        </div>

         <motion.div
          variant={ scaleVariants }
          whileInView={ scaleVariants.whileInView }
          className="app__header-circles"
         >
          { [images.html, images.javascript, images.sass, images.react].map((circle, index) => (
            <div className="circle-cmp app__flex" key={ `circle-${ index }` }>
              <img src={ circle } alt="circle" />
            </div>
          )) }
         </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'Home', '');