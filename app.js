
let fullDishes = document.getElementById("fullDishes")
let starterbutton = document.getElementByClass("starterDishes")
let entreebutton = document.getElementByClass("entreesDishes")
let dessertbutton = document.getElementByClass("dessertDishes")

function starterDishesDisplay(dishes){
  completed = ''
  if (course == "Starters"){
     dishes += starterbuttton
  } else if ( course =="Desserts"){
    dishes += dessertButton
  } else {
    dishes += entreebutton
  }
}

for(let index = 0; index < dishes.length; index++) {

  let dishes = dishes[index]

    let dishItem = `<div class="individualPlates">
                      <img src="${dishes.imageURL}"/>
                      <div class="description">
                        <h5>${dishes.title}</h5>
                        <p>${dishes.description}</p>
                      </div>
                      <p class="price">${dishes.price}</p>
                    </div>`
              dishItem += completed
              fullDishes.innerHTML = completed


let starterbuttton = document.createEvenetlistner("click",starterDishesDisplay)
let entreeButton = document.createEvenetlistner("click",starterDishesDisplay)
let dessertButton = document.createEvenetlistner("click",starterDishesDisplay)
