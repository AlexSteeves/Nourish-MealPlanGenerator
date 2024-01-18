import {SET_CALORIE_SPREAD, SET_CURRENT_UNIT, SET_IS_LOADING, SET_MEAL_TYPE, SET_TOTAL_CALORIES, SET_TOTAL_MEALS_PER_DAY} from "./types";

export const setMealType = mealType => ({ type: SET_MEAL_TYPE, payload: mealType });
export const setTotalCalories = totalCalories => ({ type: SET_TOTAL_CALORIES, payload: totalCalories });

export const setTotalMealsPerDay = totalMealsPerDay => ({ type: SET_TOTAL_MEALS_PER_DAY, payload: totalMealsPerDay });

export const setCaloriesSpread = calorieSpread => ({ type: SET_CALORIE_SPREAD, payload: calorieSpread });
export const setCurrentUnit = currentUnit => ({ type: SET_CURRENT_UNIT, payload: currentUnit });
export const setIsLoading = isLoading=> ({ type: SET_IS_LOADING, payload: isLoading });