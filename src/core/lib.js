export const request = async (url='', method, token=null, data={}, onSuccess=null, onFail=null) => {

    // Setup arguments
    let kwargs = {
        method: method,
        mode: 'cors',  // Warning: `no-cors` allows only simple requests (not `json` content-type)
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token.key?(token.prefix + ' ' + token.key):'',
        },
    }

    // Add body in arguments
    if (method.toUpperCase()!=='GET') 
        Object.assign(kwargs, {body: JSON.stringify(data)});

    // Make request
    try {
        console.log('kwargs>>>', kwargs);
        let res = await fetch(url, kwargs);
        let status = res.status;
        data = await res.json();
        console.log(data)
        if (status>=200 && status<=299)
            onSuccess && onSuccess(status, data);
        else
            onFail && onFail(status, data); //throw ({status:status, message:data});

    // Handle errors
    } catch(err) {
        onFail && onFail(err.status, err.message);
    }
}
