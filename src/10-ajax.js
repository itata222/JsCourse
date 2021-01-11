fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => {
        if (res.ok) {
            console.log(res)
            return res.json()
        } else {
            throw new Error(res.status)
        }
    })
    .then((resObject) => {
        console.log(resObject)
        console.log(resObject.value)
    })
    .catch((err) => {
        console.log(err)
    })