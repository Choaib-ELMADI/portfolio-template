import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {
        ['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((item, index) => (
            <a
                href={ `#${ item }` }
                key={ item + index }
                className="app__navigation-dot"
                style={ active === item ? { backgroundColor: 'orangered' } : {} }
            > </a>
        ))
        }
    </div>
  );
}

export default NavigationDots;