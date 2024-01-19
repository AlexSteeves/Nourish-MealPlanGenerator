import {useState} from 'react';


export default function TotalDailyCalories({totalCalories}){

    const [selected, setSelected] = useState(0);
    const handleChange = (newSelected) => {
    setSelected(newSelected);
    if (totalCalories) {
      totalCalories(newSelected);
    }
  }
    return (
        <form className="w-full flex flex-col">
                <label
                    htmlFor="number-input"
                    className="block mb-2 text-sm text-slate-200"
                >
                    <span className = "primary-text">
                    Total Daily Calories:
                    </span>
                </label>
                <input
                    onChange={(e) => handleChange(parseInt(e.target.value))}
                    type="number"
                    id="number-input"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-1.5 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="2000"
                    required
                />
            </form>

    );
}