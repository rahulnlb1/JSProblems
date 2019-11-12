export const combinations = (number) => {

    if (number < 10) return [number];

    const string = String(number);

    const result = [];
    for (let x = 0; x < string.length; x++) {

        const currentCharacter = string[x];

        const remainingCharacters = string.substr(0, x) + string.substr(x + 1);

        const remainingCharacterCombinations = combinations(Number(remainingCharacters));

        remainingCharacterCombinations.forEach(element => {
            result.push(Number(`${currentCharacter}${element}`));
        })
    }

    return result;
}