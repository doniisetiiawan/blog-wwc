/* eslint-disable import/prefer-default-export */
import { NAVIGATE } from '../actionTypes';

export const navigate = (pageName) => ({
  type: NAVIGATE,
  page: pageName,
});
