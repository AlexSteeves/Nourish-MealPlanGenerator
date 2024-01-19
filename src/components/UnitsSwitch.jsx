import React, { useState } from "react";

function UnitSwitcher({ currentUnit }) {
    const [unit, setUnit] = useState("Metric");

    const handleToggle = () => {
        const newUnit = unit === "Metric" ? "Imperial" : "Metric";
        setUnit(newUnit);
        currentUnit(newUnit);
    };

    return (
        <label class="relative inline-flex items-center mb-5 cursor-pointer">
            <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onClick={handleToggle}
            />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>

            <span class=" ms-3 primary-text text-sm ">
                {unit}
            </span>
        </label>
    );
}

export default UnitSwitcher;
