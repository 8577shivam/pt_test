import React, { useState } from "react";
import StepperControl from "./Components/StepperControl";
import Stepper from "./Components/Stepper";
import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/SkillsSection";
import AvailabilitySection from "./Components/AvailbilitySection";
import ProfileStableSection from "./Components/ProfileStableSection";
import { AvailabilityProvider } from "./Components/availabilityContext";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = () => {
    setStarted(true);
    setCurrentStep(1); 
  };

  return (
    <div className="max-w-screen-3xl mx-auto dark:bg-slate-800 h-[100vh]">
      <Navbar />
      <Stepper steps={steps} currentStep={currentStep} />
      {!started ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[20px]">
          <div className="bg-[#1f1f1f] grid gap-4 justify-center px-[50px] py-[50px] rounded-md">
            <p>Start Building</p>
            <div className="flex gap-10">
              <button>Cancel</button>
              <button onClick={handleStart}>Start</button>
            </div>
          </div>
          <div className="hidden sm:block bg-[#1f1f1f] p-3 rounded-md" >
            <p>Building Your Profile</p>
          </div>
        </div>
      ) : (
        <AvailabilityProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6">
          <div>
            {currentStep === 1 && <SkillsSection />}
            {currentStep === 2 && <AvailabilitySection />}
           
          </div>
          <ProfileStableSection index={currentStep}/>
        </div>
        </AvailabilityProvider>
      )}
      {started && (
        <StepperControl
          currentStep={currentStep}
          steps={steps}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
