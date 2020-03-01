import { config } from "../_helpers";


export const authenticationService = {
    login,
    logout
}

function login({ emai, password }) {
    const options = {
        'Content-Type': 'application/json'
    };
    return fetch(config, options).then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage['user'] = user;
            }
        })
}


function logout() {
    localStorage['user'] = undefined;
}

function handleResponse(response) {
    return response.text()
        .then(text => {
            const json = text && JSON.parse(text);
            if (!response.ok) {
                if (response.statusCode === 401) {
                    logout();
                }
                const error = (response && response.message) || response.statusText;
                Promise.reject(error);
            }
            return json;
        });
}