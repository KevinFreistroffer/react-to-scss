import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';
import { appReducers } from './components/app_reducers';
// import { loadingReducers } from './components/loading/loading_reducers';
// import { userReducers } from './components/user/user_reducers';
// import { dashboardReducers } from './components/dashboard/dashboard_reducers';
// import { menuReducers } from './components/menu/menu_reducers';
// import { alertReducers } from './components/alert/alert_reducers';
// import { detailsReducers } from './components/dashboard/totals/details/details_reducers';
// import { stayBoxReducers } from './components/stayBox/stayBox_reducers';
// import { loadState, saveState } from './utilities/store';

const rootReducer = combineReducers({
  appReducers,
  // userReducers,
  // dashboardReducers,
  // loadingReducers,
  // menuReducers,
  // alertReducers,
  // detailsReducers,
  // stayBoxReducers
});


// export const persistedState = loadState();
export const store = createStore(
  rootReducer,
 // persistedState,
  applyMiddleware(Thunk)
);


const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
  
// 


