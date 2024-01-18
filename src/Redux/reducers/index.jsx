import { combineReducers } from 'redux';
import mealPlanReducer from './mealPlanReducer';
// import other reducers if any

const rootReducer = combineReducers({
  mealPlan: mealPlanReducer,
  // other reducers
});

export default rootReducer;
