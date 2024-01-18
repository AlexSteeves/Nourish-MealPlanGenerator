import React, { useState } from 'react';

function UnitSwitcher({currentUnit}) {
  const [unit, setUnit] = useState('Metric');

  

  const handleToggle = () => {
    const newUnit = unit === 'Metric' ? 'Imperial' : 'Metric';
    setUnit(newUnit);
    currentUnit(newUnit);
  };

  return (
    <div>
      <label class="relative inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" onClick={handleToggle}/>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 primary-text">{unit}</span>
</label>
    </div>
  );
}

export default UnitSwitcher;