import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.css';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, [])
  

  return (
    <>
       <h2 className="head-text">
        I Know That
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles app__flex">
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={ { opacity: 1 } }
              whileHover={ { scale: 1.05 } }
              transition={ { duration: 0.5, type: 'tween' } }
              className="app__profile-item"
              key={ abouts.title + index }
            >
              <img className="app__profile-img" src={ urlFor(about.imgUrl) } alt={ about.title } />
              <h2 className="bold-text" style={ { marginTop: 20 } }>{ about.title }</h2>
              <p className="p-text" style={ { marginTop: 10 } }>{ about.description }</p>
            </motion.div>
          ))
        }
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'About', 
  'app__whitebg'
);