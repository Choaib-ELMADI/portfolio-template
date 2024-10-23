import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import './Work.css';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }


  return (
    <>
      <h2 className="head-text">
        My Creative
        <span> Portfolio </span>
        Section
      </h2>

      <div className="app__work-filter">
        { 
          ['All', 'Html / Css', 'JavaScript', 'React JS', 'Three JS', 'Arduino', 'Electronics'].map((elt, index) => (
            <div
              key={ index }
              onClick={ () => handleWorkFilter(elt) }
              className={ `app__work-filter-item app__flex p-text ${ activeFilter === elt ? 'item-active' : '' }` }
            >
              { elt }
            </div>
          ))
        }
      </div>

      <motion.div
        animate={ animateCard }
        transition={ { duration: 0.5, delayChildren: 0.5 } }
        className="app__work-portfolio"
      >
        { 
          filterWork.length < 1 ?
          <h3 className='app__work-no-items'>No Items To Show</h3>
          :
          filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={ index }>
              <div className="app__work-img app__flex">
                <img src={ urlFor(work.imgUrl) } alt={ work.name } />

                <div className="app__work-hover app__flex">
                  <a href={ work.projectLink } target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={ { scale: [0, 1] } }
                      whileHover={ { scale: [1, 0.9] } }
                      transition={ { duration: 0.25 } }
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={ work.codeLink } target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={ { scale: [0, 1] } }
                      whileHover={ { scale: [1, 0.9] } }
                      transition={ { duration: 0.25 } }
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{ work.title }</h4>
                <p className="p-text" style={ { marginTop: 10 } }>{ work.description }</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{ work.tags[0] }</p>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Work, 'app__work'),
  'Work', 
  'app__primarybg'
);