// const myPromiseDivider = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num1 / num2 < 0 || num2 === 0) {
//                 reject({ error: 'Error' });
//             } else {
//                 resolve(num1 / num2)
//             }
//         }, 2000)
//     })
//     
// }
// myPromiseDivider(4, 8).then((res) => {
//         console.log('result: ', res)
//     }, (err) => {
//         console.log(err)
//     }))


//----------------------------------------------
// const myPromiseDivider = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num1 / num2 < 0 || num2 === 0) {
//                 reject({ error: 'Error' });
//             } else {
//                 resolve(num1 / num2)
//             }
//         }, 2000)
//     })
// }
// myPromiseDivider(4, -9).then((res) => {
//     console.log('result:', res)
// }, (err) => {
//     console.log(err)
// })
//-----------------------------------------------
// const myDivide = (dividend, divider) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (divider === 0)
//                 reject({ error: 'cannot divide by 0' })
//             else
//                 resolve(dividend / divider)
//         }, 1500)
//     })
// }
// const myPercentage = (number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number < 0)
//                 reject({ error: "error" })
//             else
//                 resolve({ 'percentage: ': number * 100 + "%" })
//         }, 500)
//     })
// }
// myDivide(4, 0).then((res) => {
//     return myPercentage(res)
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })
//------------------------------------------------------
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('p1 error')
        resolve('p1')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('p2 error')
        resolve('p2')
    }, 500)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('p3 error')
        resolve('p3')
    }, 1500)
})
const myPromiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(
                (res) => {
                    return resolve(res)
                },
                (err) => {
                    return reject(err)
                }
            )
        }
    })
}
console.log(myPromiseRace([p1, p2, p3]));
// const myPromiseRace = (...promises) => {
//     return new Promise((resolve, reject) => {
//         for (let promise of promises) {
//             promise.then(
//                 (res) => {
//                     return resolve(res)
//                 },
//                 (err) => {
//                     return reject(err)
//                 }
//             )
//         }
//     })
// }
// console.log(myPromiseRace(p1, p2, p3));
//--------------------------------------------
// const myPromiseAll = (...promises) => {
//     all = [];
//     allcount = 0;
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promise[i].then((res) => {
//                 all[i] = (res)
//                 allcount++;
//                 if (allcount === promises.length)
//                     return resolve(all);
//             }, (err) => {
//                 return reject(err)
//             })
//         }
//     })
// }
// console.log(myPromiseAll(p1, p2, p3));