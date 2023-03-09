const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

function showDataDetails() {
    const container = document.getElementById("card-detail-container");
    console.log(container)
    let card = document.createElement('div');
    card.className = ("card d-flex col-xl-3 p-3 m-2 col-lg-3 p-3 m-2 col-md-5 p-3 m-2 col-sm-10 col-xs-10 p-2");
    card.innerHTML = `<img src="${data.events.image}" class="card-img-top object-fit-cover h-100" alt="events">
    <div class="card-body p-1">
        <h5 class="card-title pt-2">${data.events.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="d-flex align-items-center justify-content-evenly">
            <span class="badge text-bg-secondary p-3 align-items-center">$1000</span>
            <a class="btn w-50 p-2" href="./details.html">
                Details
            </a>
        </div>
    </div>`
}
console.log(data.events)

showDataDetails
console.log(showDataDetails)

// let a = 0;
// este codigo recorre el array y devuelve cada propiedad seleccionada
// for(i=a;i<data.events.length;i++){
//     data.events[i].name;
//     console.log(data.events[i].name);
// }






// data.events[3].image
// 'https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg'





{/* <div class="row justify-content-evenly">
<div class="card d-flex col-xl-3 p-3 m-2 col-lg-3 p-3 m-2 col-md-5 p-3 m-2 col-sm-10 col-xs-10 p-2">
      <img src="./assets/images/Museum_Tour.jpg" class="card-img-top object-fit-cover h-100" alt="events">
      <div class="card-body p-1">
          <h5 class="card-title pt-2">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of
              the
              card's content.</p>
          <div class="d-flex align-items-center justify-content-evenly">
              <span class="badge text-bg-secondary p-3 align-items-center">$1000</span>
                  <a class="btn w-50 p-2" href="./details.html">
                      Details
                  </a>
          </div>
      </div>
  </div>
</div> */}
