
// תרגיל
// צרו משחקון שבו עמוד ניגש באופן רנדומלי לאחת מהדומיות ב
// api
// המשתמש צריך לציין באיזה סרטים אותה הדמות השתתפה
// וללחוץ סאבמיט
// אם הוא צדק מופיעה הודעה שצדק ואם לא מופיעה הודעה ששגה

//https://swapi.dev/api/people/

const characterNumber = Math.floor(Math.random() * 83) + 1;//return number between 1-82
const submitAnswer = document.getElementById('submitAnswer');
const characterNameUI = document.getElementById('characterName');
const allCheckBoxes = document.getElementsByClassName('checkbox');
const result = document.getElementById('result');
let characterName = "";
let errorDescription = "";
let characterMovies = [];
let selectedMovies = [];
let userRigth = true;

signSelected = () => {
    event.target.checked = true;
}
for (let checkbox of allCheckBoxes) {
    checkbox.addEventListener('click', signSelected)
}
const pushSelectedMovies = () => {
    for (let el of allCheckBoxes)
        if (el.checked)
            selectedMovies.push(el.getAttribute('value'))
    isUserRight();
}
submitAnswer.addEventListener('click', pushSelectedMovies)

const isUserRight = () => {
    let selectedFR = {};
    let characterFR = {};
    for (let i = 0; i < selectedMovies.length; i++) {
        if (characterMovies.length !== selectedMovies.length)
            userRigth = false;
        selectedFR[selectedMovies[i]] = true;
        characterFR[characterMovies[i]] = true;
    }
    for (let film in selectedFR) {
        if (!film in characterFR) userRigth = false;;
    }
    showResult(userRigth);
}

const showResult = (userRigth) => {
    if (userRigth)
        result.innerHTML = "you rigth !!!"
    else
        result.innerHTML = "you are wrong !!!"
}

// fetch(`https://swapi.dev/api/people/${characterNumber}/`)
//     .then((respone) => {
//         if (respone.ok)
//             return respone.json();
//         else
//             throw new Error('starwars- error 1')
//     })
//     .then((responseObject) => {
//         characterName = responseObject.name;
//         characterNameUI.innerHTML = `${characterName} played in: `;
//     })
//     .catch((error) => {
//         errorDescription = error;
//     })

fetch(`https://swapi.dev/api/people/${characterNumber}/films`)
    .then((response) => {
        if (response.status === 200)
            return response.json();
        else
            throw new Error('starwars- error 2: in getting the characters films')
    })
    .then((responseObj) => {
        for (let film of responseObj)
            characterMovies.push(film);
    })
    .catch((err) => {
        errorDescription = err;
        throw new Error('starwars- error 3')
    })


