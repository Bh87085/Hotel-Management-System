/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratp singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Hero({ children, hero }) {
  return (
    <section className={hero}>
      {children}
    </section>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
