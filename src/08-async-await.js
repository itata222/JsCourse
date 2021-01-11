const myDivide = (dividend, divider) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (divider === 0)
                reject({ error: 'cannot divide by 0' })
            else
                resolve(dividend / divider)
        }, 1500)
    })
}
const myPercentage = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number < 0)
                reject({ error: "error" })
            else
                resolve({ 'percentage: ': number * 100 + "%" })
        }, 500)
    })
}
const myFirstAwait = async (num1, num2) => {
    const resultDivide = await (myDivide(num1, num2))
    const resultPercentage = await (myPercentage(resultDivide))
    return resultPercentage;
}
myFirstAwait(4, 10).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})