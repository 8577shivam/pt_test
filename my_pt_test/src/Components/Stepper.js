import React from 'react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div>
            <p></p>
            <p>{currentStep+1}/{steps.length-1}</p>
          </div>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          
          {index < steps.length - 1 && (
            <div
              className={`transition-colors duration-500 ease-in-out w-[60px] h-2 rounded-md mx-2 ${index < currentStep+1 ? 'bg-purple-500' : 'bg-gray-500'}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
