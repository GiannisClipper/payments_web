export const dateParser = (date, fromShape, toShape) => {

    let result = '';
    let values = {D: '', M: '', Y: ''};

    if (date.length === fromShape.length && date.length === toShape.length) {

        fromShape = fromShape.toUpperCase();
        toShape = toShape.toUpperCase();

        for (let i = 0; i < date.length; i++) {
            if (fromShape[i] in values)
                values[fromShape[i]] += date[i];
        }

        for (let i = 0; i < date.length; i++) {
            if (toShape[i] in values) {
                result += values[toShape[i]][0];
                values[toShape[i]] = values[toShape[i]].slice(1)
            } else {
                result += toShape[i];
            }
        }
    }

    return result;
}

export const relatedParser = obj => {
    return {id: obj.id?obj.id:null};
}