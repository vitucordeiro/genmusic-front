import { NextResponse } from "next/server";
import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]){
    const [ currentStepIndex, setCurrentStepIndex] = useState(0);
    const [ currentData, setCurrentData] = useState<any>(null);

    function next(){    
        setCurrentStepIndex( i => {
            if( i >= steps.length -1 ) return i; 
            return i + 1;
        })
    }

    function back(){
        setCurrentStepIndex( i => {
            if(i <= 0 ) return i; 
            return i - 1
        })
    }
    function goTo(index:number){
        return setCurrentStepIndex(index);
    }
    return{
        currentStepIndex,
        steps: steps[currentStepIndex],
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        next,
        back,
        goTo,
        currentData,
        setCurrentData,
    }
}