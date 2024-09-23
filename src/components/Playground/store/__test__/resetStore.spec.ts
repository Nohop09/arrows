import PlaygroundReducer,{initialState, resetStore, setCurrentStep} from "../slices"

describe('reducer resetStore ', ()=> {
    it('check resetStore', ()=> {
           const setCurrentStepState = PlaygroundReducer(
            initialState, 
            setCurrentStep()
        )
        const resetStoreState = PlaygroundReducer(setCurrentStepState,resetStore())
     
      
        expect(resetStoreState).toEqual(initialState)
    })
})