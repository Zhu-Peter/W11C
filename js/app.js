let items_JSON = Cookies.get(`pokemon`);
let selected_item = {};
if (!(items_JSON === undefined)) {
  selected_item = JSON.parse(items_JSON);
}

let pokemon = document.querySelectorAll(`.pokemon`);
let num = [];
let selected = "";
for (let i = 0; i < pokemon.length; i++) {
  num.push(i);

  //   console.log(num)
}

let randNum = randomize(num);

function randomize(nums) {
  let ranNums = [],
    rand_i = nums.length,
    rand_j = 0;
  while (rand_i--) {
    rand_j = Math.floor(Math.random() * (rand_i + 1));
    ranNums.push(nums[rand_j]);
    nums.splice(rand_j, 1);
  }
  return ranNums;
}

for (i = 1; i < 4; i++) {
  document.getElementById(`item_${i}`).innerHTML =
    pokemon[randNum[i - 1]].innerHTML;
  document.getElementById(`item_${i}`).style.backgroundColor =
    pokemon[randNum[i - 1]].attributes.type.value;
  document
    .getElementById(`item_${i}`)
    .addEventListener("mouseover", function () {
      this.style.border = "4px green solid";
    });
  document
    .getElementById(`item_${i}`)
    .addEventListener("mouseleave", function () {
      if (
        !(this.getElementsByClassName("item_title")[0].innerHTML === selected)
      ) {
        this.style.border = "none";
      }
    });
  document
    .getElementById(`item_${i}`)
    .addEventListener("click", toggleSelection);
}

document.getElementById(`button_choose`).addEventListener('mouseover', function(){
    this.style.backgroundColor = 'green';
})
document.getElementById(`button_choose`).addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white';
})
document.getElementById(`button_choose`).addEventListener('click', chooseSelected)

function chooseSelected(){
    selected_item = {
        name: selected
    }
    updateCookies(selected_item);
}

function toggleSelection() {
  if (this.getElementsByClassName("item_title")[0].innerHTML === selected) {
    selected = "";
    toggleChooseBtn();
    return;
  }
  selected = this.getElementsByClassName("item_title")[0].innerHTML;
  toggleChooseBtn();
  clearBorders()    
}

function clearBorders(){
    for (let i = 1; i < 4; i++) {
        if(!(document.getElementById(`item_${i}`).getElementsByClassName("item_title")[0].innerHTML === selected)){
            document.getElementById(`item_${i}`).style.border = "none";
        }
      }
}

function toggleChooseBtn() {
  if (selected === "") {
    document.getElementById(`button_choose`).style.display = `none`;
    return;
  }
  document.getElementById(`button_choose`).style.display = `inline-block`;
}

function updateCookies(value) {
  let value_JSON = JSON.stringify(value);
  Cookies.set("pokemon", value_JSON);
  console.log(value);
}
