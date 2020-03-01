import { userConstants } from "../_constants/user.constant";

const authUser = JSON.parse(localStorage.getItem('user'));

const initialState = authUser ? { loggedIn: true, user: authUser } : {};

export function user(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                isLogging: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                isLogged: true,
                user: action.user
            }
        case userConstants.LOGIN_FAILURE:
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}