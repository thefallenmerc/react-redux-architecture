import { userConstants } from "../_constants/user.constant"
import { authenticationService } from "../_services";
import { history } from "../_helpers";

export const userActions = {
    login,
    logout
}

function login({ email, password }) {
    return dispatch => {
        dispatch(request({ email }));
        authenticationService.login({ email, password })
            .then(user => {
                dispatch(success(user));
                history.push('/');
            }, error => {
                dispatch(failure(error));
            });
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
}

function logout() {
    authenticationService.logout();
    return { type: userConstants.LOGOUT };
}