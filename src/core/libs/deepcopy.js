const deepCopy = value => {

    if (value === null)
        return value;

    else if (Array.isArray(value))
        return deepCopyArr(value);

    else if (typeof value === 'object')
        return deepCopyObj(value);

    else
        return value;

}


const deepCopyArr = arr => {

    let arrCopy = [];

    let value;

    for (let i = 0; i < arr.length; i++) {

        value = arr[i];

        if (value === null)
            arrCopy.push(value);

        else if (Array.isArray(value))
            arrCopy.push(deepCopyArr(value));

        else if (typeof value === 'object')
            arrCopy.push(deepCopyObj(value));

        else
            arrCopy.push(value);
    }

    return arrCopy;
}


const deepCopyObj = obj => {

    let objCopy = {};

    let keys =  Object.keys(obj);

    let key, value;

    for (let i = 0; i < keys.length; i++) {

        key = keys[i];
        value = obj[key];

        if (value === null)
            objCopy[key] = value;

        else if (Array.isArray(value))
            objCopy[key] = deepCopyArr(value);

        else if (typeof value === 'object')
            objCopy[key] = deepCopyObj(value);

        else
            objCopy[key] = value;
    }

    return objCopy;
}

export default deepCopy;