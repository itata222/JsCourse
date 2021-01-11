
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
const nextGame = document.getElementById('next')

let characterName = "";
let charcaterMoviesTitles = [];
let selectedMovies = new Set();

signSelected = () => {
    event.target.checked === false ? event.target.checked = false : event.target.checked = true;
}
for (let checkbox of allCheckBoxes)
    checkbox.addEventListener('click', signSelected)


const pushSelectedMovies = () => {
    selectedMovies.clear();
    for (let el of allCheckBoxes)
        if (el.checked)
            selectedMovies.add(el.getAttribute('value'))
    isUserRight();
}
submitAnswer.addEventListener('click', pushSelectedMovies)
const isUserRight = () => {
    const allSelectedMovies = selectedMovies.values();
    if (selectedMovies.size === 0)
        return showResult(false);
    let selectedFR = {};
    let characterFR = {};
    for (let i = 0; i < selectedMovies.size; i++) {
        if (charcaterMoviesTitles.length !== selectedMovies.size)
            return showResult(false);
        selectedFR[allSelectedMovies.next().value] = true;
        characterFR[charcaterMoviesTitles[i]] = true;
    }
    for (let film in selectedFR) {
        if (!characterFR[film]) return showResult(false);
    }
    showResult(true);
}

const showResult = (userRigth) => {
    if (userRigth) {
        result.innerHTML = "you rigth !!!";
    }
    else {
        result.innerHTML = "you are wrong !!!";
    }
    nextGame.className = 'block';
    nextGame.addEventListener('click', () => {
        window.location.reload();
    });
}

fetch(`https://swapi.dev/api/people/${characterNumber}/`)
    .then((respone) => {
        nextGame.className = 'none';
        if (respone.ok)
            return respone.json();
        else
            throw new Error('starwars- error 1')
    })
    .then((responseObject) => {
        characterName = responseObject.name;
        characterNameUI.innerHTML = `${characterName} played in: `;
        console.log(characterNumber)
        for (let film of responseObject.films) {
            fetch(film)
                .then((response) => {
                    if (response.status === 200)
                        return response.json();
                    else
                        throw new Error('starwars- error 2: in getting the characters films')
                })
                .then((responseObj) => {
                    charcaterMoviesTitles.push(responseObj.title);
                })
                .catch((err) => {
                    errorDescription = err;
                    throw new Error('starwars- error 3')
                })
        }
        console.log(charcaterMoviesTitles)
    })
    .catch((error) => {
        errorDescription = error;
    })


