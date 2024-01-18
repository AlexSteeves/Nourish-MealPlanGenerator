import "./App.css";
import Main from "./components/Main";
import GeneratedMealPlan from "./components/GeneratedMealPlan";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
    const [mealPlan, setMealPlan] = useState("");

    const updateMealPlan = (newMealPlan) => {
        setMealPlan(newMealPlan);
    };

    return (
        <div className="flex flex-col">
            <div className="body w-full lg:h-[95vh] flex flex-col lg:flex-row">
                <div className="flex-1 sticky lg:top-0">
                    <Main mealPlan={mealPlan} updateMealPlan={updateMealPlan} />
                </div>
                <div className="flex-1 overflow-auto">
                    <GeneratedMealPlan mealPlan={mealPlan} />
                </div>
            </div>
            <div className = "w-full h-[5vh] body">
            <Footer />
            </div>
           
        </div>
    );
}

export default App;
