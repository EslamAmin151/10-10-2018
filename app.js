let menu = document.getElementById('btnFullMenu')
let starters = document.getElementById('btnStarters')
let entrees = document.getElementById('btnEntrees')
let desserts = document.getElementById('btnDesserts')
let fullmenu = document.getElementById('fullmenu')

function displayDishes(plates){
  let completed = ''

   for (i = 0; i < plates.length; i++){
     let dishItem = `<div class="individualPlates">
                       <img src="${plates[i].imageURL}"/>
                       <div class="description">
                         <h5>${plates[i].title}</h5>
                         <p>${plates[i].description}</p>
                       </div>
                       <p class="price">${plates[i].price}</p>
                     </div>`
      completed += dishItem

   }
   fullmenu.innerHTML = completed


}




let btnFullMenu = document.querySelector("#btnFullMenu")
btnFullMenu.addEventListener('click',function(){
 displayDishes(dishes)
})

let btnStarters = document.querySelector("#btnStarters")
btnStarters.addEventListener('click',function(){



})

let btnEntrees = document.querySelector("#btnEntrees")
btnEntrees.addEventListener('click',function(){



})
let btnDesserts = document.querySelector("#btnDesserts")
btnDesserts.addEventListener('click',function(){

})
