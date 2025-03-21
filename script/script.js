const question1no = document.querySelector("input[name='did-they-have-partner'][value='nee']")
const question1yes = document.querySelector("input[name='did-they-have-partner'][value='ja']")
const question2no = document.querySelector("input[name='nota-akte'][value='nee']")
const question2yes = document.querySelector("input[name='nota-akte'][value='ja']")
const inputArray1 = document.querySelectorAll("input[name='nota-akte'], input[name='verrekenbeding'], input[name='mariagedate']")
const inputFile = document.querySelectorAll("input[name='kopie-akte']")



question1yes.addEventListener("click", () => changeRequired(inputArray1, true))
question1no.addEventListener("click", () => changeRequired(inputArray1, false))
question2yes.addEventListener("click", () => changeRequired(inputFile, true))
question2no.addEventListener("click", () => changeRequired(inputFile, false))

function changeRequired(array, value) {
    array.forEach((input) => {
        input.required = value
    })
}

// setting a max date on the current date
const inputsWithMaxToday = document.querySelectorAll("input[name='deathdate'], input[name='mariagedate']")
setCurrentDate(inputsWithMaxToday)


function setCurrentDate(inputs) {
    let today = new Date().toISOString().split("T")[0] // ChatGPT
    inputs.forEach((input) => {
        input.max = today
    })
}