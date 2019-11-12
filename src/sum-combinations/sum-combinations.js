export const sumCombinations = (array1, array2, number) => {
    let count = 0;
    const map = {};

    for (const element of array1) {
        map[element] = number - element;
    }

    for (const element of array2) {
        if (map[(number - element)] != "undefined" && map[(number - element)] === element) {
            count++;
        }
    }

    return count;
}