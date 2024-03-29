import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import covidDataReducer from './CovidInfo/covidInfo';

const store = createStore(
  covidDataReducer,
  applyMiddleware(thunkMiddleware, logger),
);

export default store;
