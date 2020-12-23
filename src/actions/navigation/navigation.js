import {ON_HOME_PAGE, LEAVING_HOME_PAGE} from '../../utils/constants'

export function onHomePage() {
    return dispatch => {
        dispatch({type: ON_HOME_PAGE})
    }
}

export function leavingHomePage() {
    return dispatch => {
        dispatch({type: LEAVING_HOME_PAGE})
    }
}
