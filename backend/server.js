/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratp singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

/*
 * Name: Hotel Room Booking System ~ Backed
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Bhanu Pratp singh
 * Last Modified: 26/02/2023
 * Version: v0.0.1
 *
 */
require("dotenv").config();

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// app listens to .env defined port
app.listen(process.env.APP_PORT, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
});
