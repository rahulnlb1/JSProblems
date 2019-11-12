export const anagram = (string1, string2) => {
    const obj = {};

    for (const element of string1) {
        obj[element] = obj[element] + 1 || 1;
    }

    console.log(JSON.stringify(obj))

    for (const element of string2) {
        if (obj[element] != "undefined")
            obj[element] = obj[element] - 1;
        else
            obj[element] = -1;
    }

    console.log(JSON.stringify(obj))

    for (const charFromObj in obj) {
        if (obj[charFromObj] !== 0)
            return false;
    }

    return true;
}