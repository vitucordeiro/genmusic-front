import { useMultiStepForm } from "@/hooks/useMultiStep-form"
import { StepOne } from "./steps/stepOne"
import { StepTwo } from "./steps/stepTwo"; 
import { StepThree } from "./steps/stepThree"
import { useState } from "react";

export function Form() {
  const [ currentFormData, setCurrentFormData ] = useState<ResponseCreate[]>([]);
  const { back, goTo, next, currentStepIndex, isFirstStep, isLastStep, steps,  }  = useMultiStepForm([
    <StepOne key="step1" onSubmit={(data:ResponseCreate[]) => {setCurrentFormData(data)}} setStep={(data) =>{goTo(data)}} />,
    <StepTwo key="step2" playlist={currentFormData}  setStep={(data) =>{goTo(data)}} />, 
    <StepThree key="step3"/>
  ])



  return (
    <>
      {currentStepIndex === 1 && <h1 className="py-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Great playlist!
        </h1> }
      <div className="mt-2 shadow-lg flex flex-col w-2/3 h-2/3 justify-between items-center bg-slate-200 p-6  rounded-xl overflow-y-auto">
    
        {currentStepIndex === 1 && currentFormData ? ( 
          <StepTwo playlist={currentFormData} setStep={(data) =>{goTo(data)}}  /> 
        ) : (
          steps 
        )}
        
      </div>
    </>
  )
}