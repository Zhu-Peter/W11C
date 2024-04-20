let items_JSON = Cookies.get(`pokemon`);
let selected_item = {};
if (!(items_JSON === `undefined`)) {
  selected_item = JSON.parse(items_JSON);
}

// console.log(selected_item);

document.getElementById(`pokemon_container`).insertAdjacentHTML(`beforeend`, `
<h1 class="item_title">${selected_item.name}</h1>
<img style="width: 200px;" src="${selected_item.img}" alt=""><br>
<p id="stats_hp" style="color: red; text-align: end; font-size: 3em;">${selected_item.hp}</p>
`)

function updateCookies(value) {
  let value_JSON = JSON.stringify(value);
  Cookies.set("pokemon", value_JSON);
  console.log(value);
}

for(let i = 0; i < 4; i++){
  document.getElementsByClassName(`attack`)[i].addEventListener(`click`, attack)
}

function attack() {
  document.getElementById(`pokemon_container`).style.animation="playerAttack 0.5s;"
  document.getElementById(`pokemon_container`).style.display = 'none'
  document.getElementById(`pokemon_container`).style.display = 'block'

  if(document.querySelector(`#stats_hp`).innerHTML !== 'dead' && document.querySelector(`#enemy_hp`).innerHTML !== 'dead'){
    document.querySelector(`#enemy_hp`).innerHTML = parseInt(document.querySelector(`#enemy_hp`).innerHTML) - parseInt(selected_item.atk)

  }
  if(parseInt(document.querySelector(`#enemy_hp`).innerHTML) <= 0){
    document.querySelector(`#enemy_hp`).innerHTML = `dead`
  }

  enemyAttack();
}

function enemyAttack(){
  if(document.querySelector(`#stats_hp`).innerHTML !== 'dead' && document.querySelector(`#enemy_hp`).innerHTML !== 'dead'){
    document.querySelector(`#stats_hp`).innerHTML = parseInt(document.querySelector(`#stats_hp`).innerHTML) - 1

  }
  if(parseInt(document.querySelector(`#stats_hp`).innerHTML) <= 0){
    document.querySelector(`#stats_hp`).innerHTML = `dead`
  }

  selected_item.hp = document.querySelector(`#stats_hp`).innerHTML
  updateCookies(selected_item)
}