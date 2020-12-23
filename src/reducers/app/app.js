import {ON_HOME_PAGE, LEAVING_HOME_PAGE} from '../../utils/constants'

export function app(state = {}, action = {}) {
    switch(action.type) {
        case ON_HOME_PAGE:
            return {...state, onHomePage: true}
        case LEAVING_HOME_PAGE:
            return {...state, onHomePage: undefined}
        default:
            return state
    }
}
