/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratap Singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

import {
  FaBeer, FaCocktail, FaHiking, FaShuttleVan
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCocktail />,
    title: 'free cocktails',
    info: 'Enjoy a complimentary cocktail with us! Whether you’re here to relax, celebrate, or simply unwind, our free cocktail is our way of saying cheers to you. Sip, savor, and make every moment special.'
  },
  {
    icon: <FaHiking />,
    title: 'endless hiking',
    info: '“At Endless Hiking, we believe every step leads to new adventures. Whether you’re chasing mountain peaks, exploring hidden trails, or simply enjoying nature’s calm, our journey never ends — it only gets better with every hike.”'
  },
  {
    icon: <FaShuttleVan />,
    title: 'free shuttle',
    info: '“Enjoy the convenience of our complimentary shuttle service, making your travel to and from the hotel seamless, stress-free, and comfortable.”'
  },
  {
    icon: <FaBeer />,
    title: 'storages beer',
    info: '“Enjoy the finest experience with our wide range of storages beer and refreshing free cocktails, crafted to make every moment memorable. Cheers to good times, great taste, and unforgettable evenings!”'
  }
];

export default services;
