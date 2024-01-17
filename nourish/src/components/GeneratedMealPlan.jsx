import { useState } from "react";

function GeneratedMealPlan({ mealPlan }) {
    return (
        <div>
            <div className = "sticky top-0 h-[10vh] z-1">
                <h3 className="font-normal text-3xl text-slate-100 justify-center items-center flex py-4">
                    Generated Meal Plan
                </h3>
            </div>

            <div className="overflow-y-auto h-[90vh]">
                <p className="bg-slate-800 text-slate-200 p-2 whitespace-pre-wrap">
                    {mealPlan}
                </p>
            </div>
        </div>
    );
}

export default GeneratedMealPlan;
