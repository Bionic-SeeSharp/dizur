import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
//import { createForms } from 'react-redux-form';
//import { initialUserLogin } from './formModel';
import { editorialReducer } from './containers/HomePage/reducer';
import { chartReducer } from './containers/HomePage/reducer';
import { playerReducer } from './containers/Player/reducer';

export default combineReducers({
  routing: routerReducer,
  editorial: editorialReducer,
  loadingBar: loadingBarReducer,
  chart: chartReducer,
  player: playerReducer
  /*...createForms({
    login: initialUserLogin
  })*/
});
