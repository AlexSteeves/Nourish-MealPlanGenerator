import { useState } from "react";

function GeneratedMealPlan({ mealPlan }) {
    return (
        <div>
            <div className = "bg-blue-500 rounded-xl sticky top-0 h-[10vh] z-1">
                <h3 className="large-text justify-center items-center flex py-4">
                    Generated Meal Plan:
                </h3>
            </div>

            <div className="overflow-y-auto h-[90vh]">
                <p className="generated-text p-2 whitespace-pre-wrap">
                    {mealPlan}
                </p>
            </div>
        </div>
    );
}

export default GeneratedMealPlan;
