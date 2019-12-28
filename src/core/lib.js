export const request = async (hostArgs, token=null, data={}, onSuccess=null, onFail=null) => {
// hostArgs = {url, method, namespace}

// Setup arguments
    let fetchArgs = {
        method: hostArgs.method,
        mode: 'cors',  // Warning: `no-cors` allows only simple requests (not `json` content-type)
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token.key?`${token.prefix} ${token.key}`:'',
        },
    };

    // Add body in arguments
    if (hostArgs.method.toUpperCase()!=='GET') {

        // Encapsulate data in namespace
        if (hostArgs.namespace)
            data = {[hostArgs.namespace]: data}

        Object.assign(fetchArgs, {body: JSON.stringify(data)});
    };

    console.log('hostArgs.url/fetchArgs>>>', hostArgs.url, fetchArgs);

    // Make request
    try {
        let res = await fetch(hostArgs.url, fetchArgs);
        data = await res.json();

        console.log('res.json>>>', data);

        if (res.status>=200 && res.status<=299)
            onSuccess && onSuccess(res.status, data);
        else
            onFail && onFail(res.status, data); //throw ({status:res.status, message:data});

    // Handle errors
    } catch(err) {
        onFail && onFail(err.status, err.message);
    };
};
