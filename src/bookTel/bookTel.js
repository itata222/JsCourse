

// תרגיל: צרו אתר של ספר טלפונים
// באתר ניתן להוסיף שם וטלפון - שם יכול להופיע רק פעם אחת
// אם בטלפון יש רווח מופיעה הודעת שגיאה שהטלפון לא יכול לכלול רווח כאשר לוחצים על סאבמיט
// אם בטלפון יש מקף הוא נמחק כאשר מכניסים אותו לתוך מאגר המידע

// השמות והטלפונים מוצגים אחד מתחת לשני כאשר לצד כל רשומה יש כפתור למחיקה

// יש שדה חיפוש שכאשר מקלידים בו הוא מציג את כל הרשומות שהשם מכיל את ערך החיפוש
//   .יש שדה סלקט שבו ניתן לקבוע האם לסדר את הרשומות מלמטה למעלה או להיפך.

const selectSort = document.getElementById('sort')
const searchInput = document.getElementById('search')
const form = document.getElementById('form-container');
const submitButton = document.getElementById('submitButton');
const nameBook = document.getElementById('name')
const phoneBook = document.getElementById('phone');
const results = document.getElementById('results');
const errorWa = document.getElementById('error')

let search = "";
let isAtoZ = true;
const Data = new Map();

const createNewDiv = (name, phone) => {
    const newDiv = document.createElement('div');
    const newDelete = document.createElement('input')
    newDiv.className = "block";
    newDiv.innerHTML = `${name}: ${phone} `
    newDelete.setAttribute('type', 'button');
    newDelete.setAttribute('value', 'Delete')
    newDelete.addEventListener('click', () => {
        Data.delete(name);
        render();
    })
    Data.set(name, phone)
    newDiv.appendChild(newDelete)
    return newDiv
}
const render = () => {
    while (results.children.length > 0)
        results.removeChild(results.lastChild)

    let phonesArr = [...Data].filter(([key]) => {
        return key.includes(search)
    })
    phonesArr.sort(([a], [b]) => {
        if (isAtoZ) {
            if (a > b) return 1
            if (a < b) return -1
            return 0
        } else {
            if (a > b) return -1
            if (a < b) return 1
            return 0
        }
    })

    for (let [name, phone] of phonesArr)
        results.appendChild(createNewDiv(name, phone));

}
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (phoneBook.value.includes(' ')) {
        errorWa.className = 'block';
        return
    }
    while (phoneBook.value.includes('-'))
        phoneBook.value = phoneBook.value.replace('-', '')

    Data.set(nameBook.value, phoneBook.value);
    nameBook.value = "";
    phoneBook.value = "";
    render();
})

selectSort.addEventListener('change', () => {
    isAtoZ = selectSort.value === 'a-z' ? true : false
    render()
})

searchInput.addEventListener('input', () => {
    search = searchInput.value.trim().toLowerCase()
    render()
})


