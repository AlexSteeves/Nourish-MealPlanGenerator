import {
    SET_MEAL_TYPE,
    SET_TOTAL_CALORIES,
    SET_TOTAL_MEALS_PER_DAY,
    SET_CALORIE_SPREAD,
    SET_CURRENT_UNIT,
    SET_IS_LOADING
  } from '../actions/types';
  
  const initialState = {
    mealType: 'Keto', // default value
    totalCalories: 2000, // default value
    totalMealsPerDay: 1, // default value
    calorieSpread: 'Evenly', // default value
    currentUnit: 'Metric', // default value
    isLoading: false // default value
  };
  
  const mealPlanReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MEAL_TYPE:
        return { ...state, mealType: action.payload };
      case SET_TOTAL_CALORIES:
        return { ...state, totalCalories: action.payload };
      case SET_TOTAL_MEALS_PER_DAY:
        return { ...state, totalMealsPerDay: action.payload };
      case SET_CALORIE_SPREAD:
        return { ...state, calorieSpread: action.payload };
      case SET_CURRENT_UNIT:
        return { ...state, currentUnit: action.payload };
      case SET_IS_LOADING:
        return { ...state, isLoading: action.payload };
      default:
        return state;
    }
  };
  
  export default mealPlanReducer;
  