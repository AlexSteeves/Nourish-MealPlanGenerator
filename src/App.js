import './App.css';
import Main from './components/Main';
import GeneratedMealPlan from './components/GeneratedMealPlan';
import { useState } from 'react';

function App() {
  const [mealPlan, setMealPlan] = useState('');

  const updateMealPlan = (newMealPlan) => {
    setMealPlan(newMealPlan);
  };

  return (
    <div className="body w-[100vw] h-[100vh] flex">
      <div className="flex-1 sticky top-0" style={{ height: 'fit-content', zIndex: 100 }}>
        <Main mealPlan={mealPlan} updateMealPlan={updateMealPlan} />
      </div>
      <div className="flex-1 overflow-auto">
        <GeneratedMealPlan mealPlan={mealPlan} />
      </div>
    </div>
  );
}

export default App;
