import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';

import {
  loggerMiddleware,
  errorMiddleware,
} from '../middleware';

const middleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  errorMiddleware,
);

export default middleware;
