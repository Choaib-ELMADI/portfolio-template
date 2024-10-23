import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.css';
import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={ images.logo } alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {
          ['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((element) => (
            <li key={ `link-${ element }` } className="app__flex p-text">
              <div />
              <a href={ `#${ element }` }>{ element }</a>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={ () => setToggle(true) } />
        {
          toggle && (
            <motion.div
              whileInView={ { x: [260, 0] } }
              transition={ { duration: 0.75, ease: 'easeOut' } }
            >
              <HiX onClick={ () => setToggle(false) } />
              <ul>
                {
                  ['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((element) => (
                    <li key={ element } className="">
                      <a href={ `#${ element }` } onClick={ () => setToggle(false) } >{ element }</a>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
          )
        }
      </div>

    </nav>
  );
}

export default Navbar;