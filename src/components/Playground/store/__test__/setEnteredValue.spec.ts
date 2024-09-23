import { ARR_ARROW_CODES } from "../../constants"
import PlaygroundReducer,{initialState, setCurrentStep, setEnteredValue, setSteps} from "../slices"

describe('reducer setSomeReducer', ()=> {
    it('check setSomeReducer', ()=> {
        const enteredValue = ARR_ARROW_CODES[0]
          const setCurrentStepState = PlaygroundReducer(
            initialState, 
            setCurrentStep()
        )
        const setStepsState = PlaygroundReducer(setCurrentStepState,setSteps())
     
        const setEnteredValueState = PlaygroundReducer(setStepsState,setEnteredValue(enteredValue))
        expect(setStepsState.steps[0].enteredValue).toBe(null)
        expect(setEnteredValueState.steps[0].enteredValue).toEqual(enteredValue)
    })
    it ('check totalSuccessful and totalUnsuccessful', ()=> {
           const setCurrentStepState = PlaygroundReducer(
            initialState, 
            setCurrentStep()
        )
        const setStepsState = PlaygroundReducer(setCurrentStepState,setSteps())
     
        const setEnteredValueState = PlaygroundReducer(setStepsState,setEnteredValue(setStepsState.steps[0].currentValue))

        expect(setStepsState.totalSuccesful).toBe(0)
        expect(setStepsState.totalSuccesful).toBe(0)
        expect(setEnteredValueState.totalSuccesful).toBe(1)
        expect(setEnteredValueState.totalUnsuccesful).toBe(0)
    })
})