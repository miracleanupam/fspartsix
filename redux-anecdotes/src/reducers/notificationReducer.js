const initialState = 'This is a sample Notification'

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export const changeNotification = (newNotification) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: newNotification
    }
}

export default notificationReducer 