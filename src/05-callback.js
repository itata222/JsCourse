const percentage = (number, callback) => {
    setTimeout(() => {
        const result = number * 100;
        if (result < 0)
            callback({ error: 'Error!' }, null);
        else
            callback(null, result)

    }, 1500)
}

const divide = (num1, num2, callback2) => {
    setTimeout(() => {
        if (num1 / num2 < 0 || num2 === 0)
            callback2({ error: 'Error!' }, null);
        else
            callback2(null, num1 / num2)
    }, 1000)
}
divide(10, 4, (err, res) => {
    if (err != null)
        return console.log(err);
    percentage(res, (err, res) => {
        if (err)
            return console.log(err);
        console.log(res)
    })
})
