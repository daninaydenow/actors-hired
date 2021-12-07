const baseUrl = 'http://localhost:3030'

export const requester = (endpoint, method, body, user) => {
        if (method === undefined) {
            method = 'Get';
        }
        let headers = {};
        if (['post', 'put', 'patch'].includes(method.toLowerCase())) {
            headers['Content-Type'] = 'application/json';
        }
        if(user) {
            headers['X-Authorization'] = user.accessToken;
        }
        let options = {
            headers,
            method,
        }
        if (body !== undefined) {
            options.body = JSON.stringify(body);
            console.log(body);
        }
        let resultUrl = baseUrl + endpoint;

        return fetch(resultUrl, options);
}

    