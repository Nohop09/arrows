import PlaygroundReducer,{initialState, setCurrentStep} from "../slices"

describe('reducer setCurrentStep', ()=> {
    it('check setCurrentStep', ()=> {
        const setCurrentStepState = PlaygroundReducer(initialState, setCurrentStep())
        
        expect(initialState.currentStep).toBe(0)
        expect(setCurrentStepState.currentStep).toBe(1)
    })
})