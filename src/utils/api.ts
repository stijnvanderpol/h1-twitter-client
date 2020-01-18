export const get = (endpoint: string, queryParams?: string) => {
    const apiHost = process.env.REACT_APP_API_HOST; 

    if (!apiHost) {
        throw new Error('no api host defined!');
    }

    let uri = apiHost + '/api' + endpoint;
    
    if (queryParams) {
        uri += `?q=${queryParams}`;
    }

    return fetch(uri, {
        method: 'GET'
    });
}