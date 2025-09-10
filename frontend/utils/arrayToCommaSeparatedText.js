/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratp singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

function arrayToCommaSeparatedText(array) {
  return array?.length > 0 ? array
    .map((item) => item)
    .join(', ')
    .toString() : 'N/A';
}

export default arrayToCommaSeparatedText;
