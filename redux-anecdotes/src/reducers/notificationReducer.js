const initialState = null

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_NOTIFICATION':
            return action.data
        case 'REMOVE_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION',
        data: null
    }
}

export const changeNotification = (newNotification) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: newNotification
    }
}

export default notificationReducer 