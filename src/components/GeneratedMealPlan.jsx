import { useState } from "react";

function GeneratedMealPlan({ mealPlan }) {
    return (
        <div className="w-full h-full">
            <div className="">
                <h3 className="large-text justify-center items-center flex py-4">
                    Generated Meal Plan:
                </h3>
            </div>

            <div
                className="lg:overflow-y-auto shadow-md rounded-xl p-5 bg-slate-50 lg:h-[80vh]"
               
            >
                <p
                    className="generated-text p-5 mx-auto whitespace-pre-wrap"
                    style={{ width: "90%" }}
                >
                    {mealPlan}
                </p>
            </div>
        </div>
    );
}

export default GeneratedMealPlan;
