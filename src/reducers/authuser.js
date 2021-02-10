import { SET_AUTH_USER } from '../actions/authuser'

export default function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id
        default:
            return state
    }
}