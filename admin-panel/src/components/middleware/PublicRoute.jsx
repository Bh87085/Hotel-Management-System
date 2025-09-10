/**
 * @name Hotel Room Booking System
 * @author Bhanu Pratp singh
 * @description Hotel Room Booking and Management System Software ~ Developed by Bhanu Pratap Singh * @copyright ©2023 ― Bhanu Pratp singh. All rights reserved.
 * @version v0.0.1
 *
 */

import { Navigate } from 'react-router-dom';
import { getSessionToken, getSessionUser } from '../../utils/authentication';

function PublicRoute({ children }) {
  const user = getSessionUser();
  const token = getSessionToken();

  if (user && token) {
    return <Navigate to='/dashboard/main' replace />;
  }
  return children;
}

export default PublicRoute;
