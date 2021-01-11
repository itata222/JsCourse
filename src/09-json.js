let person = {
    name: 'moshe',
    id: '123214214',
    age: 21,
    isMale: true,
    brothers: [{ name: 'alex', isMale: true }, { name: 'alexa', isMale: false }]
}
let personJson = JSON.stringify(person);
console.log(person);
console.log(personJson)
console.log(person.name)
console.log(personJson.name)
personJson = JSON.parse(personJson);
console.log(personJson)