import { useMultiStepForm } from "@/hooks/useMultiStep-form"
import { StepOne } from "./steps/stepOne"
import { StepTwo } from "./steps/stepTwo"; 
import { StepThree } from "./steps/stepThree"
import  React,{ useState, useMemo } from "react";

export function Form() {
  const [ currentFormData, setCurrentFormData ] = useState<ResponseCreate[]>([]);
  const [ responseData, setResponseData] = useState();
  const {  goTo, currentStepIndex, steps,  }  = useMultiStepForm([
    <StepOne key="step1" onSubmit={(data:ResponseCreate[]) => {setCurrentFormData(data)}} setStep={(data) =>{goTo(data)}} />,
    <StepTwo key="step2"  playlist={currentFormData}  setStep={(data) =>{goTo(data)}} />, 
    <StepThree key="step3" />
  ])
  return (
    <>
      <div >
        {currentStepIndex === 1 && currentFormData ? (
          <div >
            <h1 className="py-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Great playlist!
            </h1>
            <StepTwo
              playlist={currentFormData}
              setStep={(data) => goTo(data)}
            />
          </div>
        ) : (
          steps
        )} 
      </div>
    </>
  )
}