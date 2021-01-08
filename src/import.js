import MyDefault, * as utils from "./export.js";
// import _ from 'lodash';
console.log(utils.adding(5, 3))
console.log(utils.multiply(5, 4))
let defaultFunc = MyDefault;
console.log(defaultFunc)
let array = [{
    name: 'moshe',
    id: 'lml;ml;lm'
},
{
    name: 'yair',
    id: 'l;'
},
{
    name: 'michal',
    id: '68769889'
}
]
let special = utils.specialNumber();
// let array2 = _.cloneDeep(array);
let array2 = [...array];
array2[1]['name'] = 'itamar';
console.log(array2[1]['name'])
console.log(array[1]['name'])
console.log(special)