export const request = async (url='', method, token=null, data={}, onSuccess=null, onFail=null) => {

    // Define arguments
    let kwargs = {
        method: method, 
        mode: 'cors', 
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token.prefix + ' ' + token.key,
        }
    }

    // Add body in arguments
    if (method.toUpperCase()!=='GET') 
        Object.assign(kwargs, {body: JSON.stringify(data)});

    // Make request
    try {
        let res = await fetch(url, kwargs);
        let status = res.status;
        data = await res.json();
        if (status>=200 && status<=299)
            onSuccess && onSuccess(status, data);
        //else
        //    throw ({status:status, message:data});

    // Handle errors
    } catch(err) { 
        //alert(err.status+':'+JSON.stringify(err.message));
        onFail && onFail(err.status, err.message);
    }
}
