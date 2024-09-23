import PlaygroundReducer, {initialState} from "../slices"

describe('initial state', () => {
    it("check initial state", ()=> {
        const state = PlaygroundReducer(undefined, {type: 'unknown'})
        console.log(state)

        expect(state).toEqual(initialState)
    })
})