import React, { useState } from "react";
import axios from "axios";
import DropDownMealsPerDay from "./DropDownMealsPerDay";
import DropDownMealPlan from "./DropDownMealPlan";
import MealLoading from "./MealLoading";

const Main = ({ updateMealPlan }) => {
    const [mealType, setMealType] = useState("");
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalMealsPerDay, setTotalMealsPerDay] = useState(null);
    const [caloriesSpread, setCaloriesSpread] = useState("");
    const [generatedPrompt, setGeneratedPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGeneratePrompt = async () => {
        if (
            !mealType ||
            totalCalories <= 0 ||
            !totalMealsPerDay ||
            !caloriesSpread
        ) {
            console.error("All fields must be filled in");

            updateMealPlan(
                "Please fill in all fields to generate a meal plan."
            );
            return;
        }

        const prompt = `Create a concise meal plan for a ${mealType} diet. Total calories: ${totalCalories}. Meals per day: ${totalMealsPerDay}. Calorie distribution: ${caloriesSpread}. Format: Title of each meal with estimated calories, followed by a bullet-point list of ingredients. The titles should be bolded. Conclude with a cumulative list of ingredients for the entire day.`;

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

    return (
        <div className="bg-slate-800 text-white p-4 flex flex-col items-center">
            <DropDownMealPlan onMealTypeChange={handleMealTypeChange} />

            

            <div>
                <form class="max-w-sm mx-auto">
                    <label
                        for="number-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Total Daily Calories: 
                    </label>
                    <input
                        onChange={(e) =>
                            setTotalCalories(parseInt(e.target.value))
                        }
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="2000"
                        required
                    />
                </form>
            </div>

            <div className="mb-4">
                <DropDownMealsPerDay
                    onMealPerDayChange={handleMealPerDayChange}
                />
            </div>

            <div className="mb-4">
                <label>Calories Spread:</label>
                <select
                    onChange={(e) => setCaloriesSpread(e.target.value)}
                    className="bg-transparent text-white border border-white p-2"
                >
                    <option value="">Select</option>
                    <option value="morning">Morning</option>
                    <option value="evenly">Evenly Throughout the Day</option>
                    <option value="night">Night</option>
                </select>
            </div>

            <div className="flex flex-row m-4">
                <button
                    onClick={handleGeneratePrompt}
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Generate Meal Plan{" "}
                </button>

                {isLoading && <MealLoading />}
            </div>
        </div>
    );
};

export default Main;
