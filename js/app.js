let pokemon = document.querySelectorAll(`.pokemon`);
let num = [];
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

for(i=1;i<4;i++){
    document.getElementById(`item_${i}`).innerHTML = pokemon[randNum[i-1]].innerHTML;
}