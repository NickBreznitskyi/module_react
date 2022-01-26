export const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'reset1':
            return {...state, count1: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload}
        default:
            return state
    }
}