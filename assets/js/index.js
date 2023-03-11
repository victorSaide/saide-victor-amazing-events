const container = document.getElementById('container');
const fragment = document.createDocumentFragment();

// this function shows all cards in index.html
function showCards(array, container) {
    for (let element of array) {
        container.innerHTML = '';
        let div = document.createElement('div');
        div.className = "card d-flex col-xl-3 p-3 m-2 col-lg-3 p-3 m-2 col-md-5 p-3 m-2 col-sm-10 col-xs-10 p-2";
        div.innerHTML = `
        <img src="${element.image}" class="card-img-top object-fit-cover" alt="events">
        <div class="card-body p-1">
            <h5 class="card-title pt-2">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <div class="d-flex align-items-center justify-content-evenly">
                <span class="badge text-bg-secondary p-3 align-items-center">${element.price}</span>
                    <a class="btn w-50 p-2" href="./details.html">
                        Details
                    </a>
            </div>
        </div>
        `
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}
showCards(data.events, container);

// checkbox categories
// 1. get unrepeated categories
const checkBoxContainer = document.getElementById('check-box-container');
let typeOfEvents = [];

let arrayTypeOfEvents = data.events.map(event => {
    if (!typeOfEvents.includes(event.category)) {
        typeOfEvents.push(event.category);
    }
})
// console.log(typeOfEvents); // it shows the 7 categories

// 2. introducing content to html filetype
let fragmentCheckBox = document.createDocumentFragment();

for (let category of typeOfEvents) {
    let div = document.createElement('div');
    div.className = "form-check px-3 d-flex justify-content-evenly";
    div.innerHTML = `
    <label class="form-check-label">${category}
        <input class="form-check-input" value="${category}" type="checkbox" name="" id="${category}"/>
    </label>
    `
    fragmentCheckBox.appendChild(div);
}
checkBoxContainer.appendChild(fragmentCheckBox);

function filterArrayByArray(arrayStrings, arrayObject) {
    return arrayStrings.length === 0 ? arrayObject : arrayObject.filter
        (element => arrayStrings.includes(element.category))
}

let checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach(check => check.addEventListener("change", () => {
    let selectChecked = [...checkboxes].filter(check => check.checked).map(elem => elem.value)
    let cardsChecks = (filterArrayByArray(selectChecked, data.events))
    showCards(cardsChecks, container)
    filterAll(data.events)
}));

let inputForm = document.getElementById('input-form')
inputForm.addEventListener('keyup', (e) => {
    inputText = inputForm.value
    filterAll(data.events)
})

function filterArrayByString(value, arrayObject) {
    if (value == '') return arrayObject
    let newArray = arrayObject.
        filter(element => element.category.toLowerCase().
            includes(value.toLowerCase().
                trim()))
    return newArray
}


// crossing search
let selectChecked = []
let inputText = ''

function filterAll(array) {
    let newArray = []
    if (selectChecked.length == 0 && inputText == '') {
        newArray = array
    } else if (selectChecked.length > 0 && inputText == '') {
        let cardsChecksFiltered = filterArrayByArray(selectChecked, array);
        newArray = cardsChecksFiltered;
    } else if (selectChecked.length > 0 && inputText == '') {
        let cardsChecksFiltered = filterArrayByString(inputText, array);
        newArray = cardsChecksFiltered;
    } else {
        let cardsChecksFiltered = filterArrayByArray(selectChecked, array)
        let checkFinalFiltered = filterArrayByString(inputText, cardsChecksFiltered)
        newArray = checkFinalFiltered
    }
    showCards(newArray,container)    // solo funcionan por separado para mostrarse en html
}
