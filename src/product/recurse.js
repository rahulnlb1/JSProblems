export const recurse = (number1, number2) => {
    if (number2 === 1) {
        return number1;
    }
    return number1 + recurse(number1, number2 - 1);
}