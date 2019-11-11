export const product = (number1, number2) => {
    let result = 0;
    while (number1 >= 1) {
        result += number2;
        number1--;
    }
    return result;
}