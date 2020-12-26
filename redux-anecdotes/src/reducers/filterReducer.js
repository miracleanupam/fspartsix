const initialState = null

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_FILTER':
            return action.data
        default:
            return state
    }
}

export const changeFilter = (newFilter) => {
    return {
        type: 'NEW_FILTER',
        data: newFilter
    }
}

export default filterReducer 