import React, { useState } from "react";
import axios from "axios";
import DropDownMealsPerDay from "./DropDownMealsPerDay";
import DropDownMealPlan from "./DropDownMealPlan";
import MealLoading from "./MealLoading";
import CalorieSpread from "./DropDownCaloriesSpread";
import UnitSwitch from "./UnitsSwitch";
import TotalDailyCalories from "./TotalDailyCalories";


import { connect } from 'react-redux';
import {
  setMealType,
  setTotalCalories,
  setTotalMealsPerDay,
  setCaloriesSpread,
  setCurrentUnit,
  setIsLoading
 
} from '../Redux/actions';



const Main = ({ mealType,
    totalCalories,
    totalMealsPerDay,
    calorieSpread,
    currentUnit,
    isLoading,
    setMealType,
    setTotalCalories,
    setTotalMealsPerDay,
    setCaloriesSpread,
    setCurrentUnit,
    setIsLoading, 
    updateMealPlan }) => {



    

    const handleGeneratePrompt = async () => {
        if (
            !mealType ||
            totalCalories <= 0 ||
            !totalMealsPerDay ||
            !calorieSpread
        ) {
            console.error("All fields must be filled in");

            updateMealPlan(
                "Please fill in all fields to generate a meal plan."
            );
            return;
        }

        const prompt = `Create a concise meal plan for a ${mealType} diet. The total calories of the plan are: ${totalCalories}. The meals per day: ${totalMealsPerDay}. If there is a 1 meal, make sure it contains all of the total calories. The calories should be focused: ${calorieSpread}. Format: Title of each meal with estimated calories, followed by a bullet-point list of ingredients. Conclude with a cumulative list of ingredients for the entire day. All units should be in ${currentUnit}.`;

        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo-16k",
                    messages: [{ role: "user", content: prompt }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer " + process.env.REACT_APP_GPT_TOKEN,
                    },
                }
            );

            updateMealPlan(response.data.choices[0].message.content);
        } catch (error) {
            console.error("Error generating meal plan:", error);
            updateMealPlan("Error generating meal plan");
        } finally {
            setIsLoading(false);
        }
    };

    const handleMealTypeChange = (selectedMealType) => {
        setMealType(selectedMealType);
    };
    const handleMealPerDayChange = (selectedMeals) => {
        setTotalMealsPerDay(selectedMeals);
    };
    const handleCalorieSpread = (selectedMeals) => {
        setCaloriesSpread(selectedMeals);
    };
    const handleTotalDailyCalories = (totalCalories) => {
        setTotalCalories(totalCalories);
    };
    const handleUnitSwitch = (currentUnit) => {
        setCurrentUnit(currentUnit);
    };

    return (
        <div className="p-4 pt-20 flex flex-col items-center">
            <div className="absolute top-0 p-5">
                <span className="large-text">
                    Please Select Your Ideal Meal Plan
                </span>
            </div>
            <div className="flex flex-col md:flex-row">
                <DropDownMealPlan onMealTypeChange={handleMealTypeChange} />
                <TotalDailyCalories totalCalories={handleTotalDailyCalories} />
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                <DropDownMealsPerDay
                    className="mb-4 md:mb-0 md:mr-4"
                    onMealPerDayChange={handleMealPerDayChange}
                />
                <CalorieSpread onCalorieChange={handleCalorieSpread} />
            </div>

            <div className="w-full flex justify-center items-center">
                <UnitSwitch currentUnit={handleUnitSwitch} />
            </div>

            <div className="flex flex-row w-full m-4 items-center justify-center">
                <button
                    onClick={handleGeneratePrompt}
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Generate Meal Plan
                </button>

                {isLoading && <MealLoading />}
            </div>

           
        </div>
    );
};


// Map Redux state to component props
const mapStateToProps = (state) => ({
    mealType: state.mealPlan.mealType,
    totalCalories: state.mealPlan.totalCalories,
    totalMealsPerDay: state.mealPlan.totalMealsPerDay,
    calorieSpread: state.mealPlan.calorieSpread,
    currentUnit: state.mealPlan.currentUnit,
    isLoading: state.mealPlan.isLoading
  });
  
  // Map Redux actions to component props
  const mapDispatchToProps = {
    setMealType,
    setTotalCalories,
    setTotalMealsPerDay,
    setCaloriesSpread,
    setCurrentUnit,
    setIsLoading
    // other actions
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);