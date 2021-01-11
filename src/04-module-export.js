export {
    add as adding,
    mul as multiply,
}
const add = (num1, num2) => {
    return num1 + num2;
}
const mul = (num1, num2) => {
    return num1 * num2;
}
export default function minus(num1, num2) {
    return num1 - num2;
}
let specialNum = 5;
export const specialNumber = () => {
    return specialNum;
}
console.log('hello world')