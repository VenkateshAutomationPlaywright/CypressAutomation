const fetch = require('cross-fetch');

export const doPost = (endpoint, headers, body) => {
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    };
    return fetch(endpoint, options).then((response) => response.json());
};

export const doGet = (endpoint, headers) => {
    const options = {
        method: 'GET',
        headers,
    };
    return fetch(endpoint, options).then((response) => response.json());
};

export const doPut = (endpoint, headers, body) => {
    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
    };
    return fetch(endpoint, options).then((response) => response.json());
};

export const doDelete = (endpoint, headers) => {
    const options = {
        method: 'DELETE',
        headers,
    };
    return fetch(endpoint, options).then((response) => response.json());
};
