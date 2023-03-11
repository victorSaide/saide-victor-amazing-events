const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.getElementById('container');
const fragment = document.createDocumentFragment();

function showCards(array, container){
    for(let element of array){
        container.innerHTML = '';
        let div = document.createElement('div');
        div.className="card d-flex col-xl-3 p-3 m-2 col-lg-3 p-3 m-2 col-md-5 p-3 m-2 col-sm-10 col-xs-10 p-2";
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
            <p class="fs-5 p-2">${element.date}</p>
            <p class="fs-5 p-2">${element.category}</p>
            <p class="fs-5 p-2">${element.place}</p>
            <p class="fs-5 p-2">${element.capacity}</p>
            <p class="fs-5 p-2">${element.assistance}</p>
        </div>
        `
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}
showCards(data.events,container);