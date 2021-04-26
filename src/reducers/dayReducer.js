// responsible for updating the parts of our store that have to do with day

export default function dayReducer(state= {days: []}, action) {
    switch(action.type) {
        case 'FETCH_DAYS':
            return {days: action.payload}

    default:
        return state
    }
}