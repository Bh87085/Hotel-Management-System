/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratap Singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Banner({ children, title, subtitle }) {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;
