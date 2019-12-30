export const request = async (url, method, token=null, data={}) => {

    // Setup arguments
    let args = {
        method: method,
        mode: 'cors',  // `no-cors` allows only simple requests (not `json` content-type)
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': (token && token.key)?`${token.prefix} ${token.key}`:'',
        },
    };

    // Add `body` in arguments
    if (args.method.toUpperCase()!=='GET')
        Object.assign(args, {body: JSON.stringify(data)});

    // Do request
    console.log('fetch url args>>>', url, args);

    try {
        let res = await fetch(url, args);
        data = await res.json();
        return {status: res.status, data: data};
    } catch(err) {
        return {status: err.status, data: err.message};
    };
}