/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratp singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

/**
 * function to generate current data and time
 * @returns current data and time
 */
const currentDateTime = () => {
  const date = new Date();
  const currentDataTime = date.toLocaleString([], { hour12: true });

  return currentDataTime;
};

module.exports = currentDateTime;
