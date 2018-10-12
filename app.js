
let fullDishes = document.getElementById("fullDishes")
let starterbutton = document.getElementById("starterDishes")
let entreebutton = document.getElementById("entreesDishes")
let dessertbutton = document.getElementById("dessertDishes")

function starterDishesDisplay(dishes){
  completed = ''
  if (dishes.course == "Starters"){
     dishes += starterbuttton
  } else if ( dishes.course == "Desserts"){
    dishes += dessertButton
  } else {
    dishes += entreebutton
  }
}


for(let index = 0; index < dishes.length; index++) {
  let dishes = dishes[index]


  let dishItem = `<div class="individualDishes">
                      <img src="${dishes.imageURL}"/>
                      <div class="description">
                        <h5>${dishes.title}</h5>
                        <p>${dishes.description}</p>
                      </div>
                      <p class="price">${dishes.price}</p>
                    </div>`
                    completed = ''

                    completed += dishItem
              fullDishes.innerHTML = completed
}


let starterbuttton = document.addEventListener("Click",starterDishesDisplay)
let entreeButton = document.addEventListener("click",starterDishesDisplay)
let dessertButton = document.addEventListener("click",starterDishesDisplay)
