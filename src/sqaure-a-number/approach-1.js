export const sqaure = (arr) => {
    const result = [];
    arr.forEach(element => {
        result.push(element * element);
    });
    return result;
}