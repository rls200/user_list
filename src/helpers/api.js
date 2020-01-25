const API_URL = 'https://www.filltext.com';

const fetchJSON = (url, options = {}) => {
    return fetch(`${API_URL}/${url}`, options)
        .then(response => {
            if (!response.error === null) {
                throw response.json();
            }
            return response.json();
        })
        .then(json => {
            return json;
        })
        .catch(error => {
            throw error;
        });
};

const apiOptions = (requestType, body) => {
    if (body) {
        return {
            body: body,
            method: requestType,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    } else {
        return {
            method: requestType,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
};

export {fetchJSON, apiOptions};