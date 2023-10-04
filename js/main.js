// const $main = document.querySelector('main');
const $breakfastRow = document.querySelector('#breakfast-row');
const $lunchRow = document.querySelector('#lunch-row');
const $dinnerRow = document.querySelector('#dinner-row');
const $breakfastColumn = document.querySelector('#breakfast-column');
const $lunchColumn = document.querySelector('#lunch-column');
const $dinnerColumn = document.querySelector('#dinner-column');
const $previewB = document.querySelector('#preview-b');
const $previewL = document.querySelector('#preview-l');
const $previewD = document.querySelector('#preview-d');
const $breakfastUl = document.querySelector('#breakfast-list');
const $lunchUl = document.querySelector('#lunch-list');
const $dinnerUl = document.querySelector('#dinner-list');
const $breakfastImage = document.querySelector('#breakfast-image');
const $lunchImage = document.querySelector('#lunch-image');
const $dinnerImage = document.querySelector('#dinner-image');
const $breakfastText = document.querySelector('#breakfast-text');
const $lunchText = document.querySelector('#lunch-text');
const $dinnerText = document.querySelector('#dinner-text');
// data.breakfastEntries.push({breakfastImage: xhrB.recipes.image, breakfastIngredients: )

const obj = {
  breakfastData: [],
  lunchData: [],
  dinnerData: [],
  breakfastPreviewCounter: 0,
  lunchPreviewCounter: 0,
  dinnerPreviewCounter: 0
};

function getBreakfastData() {
  const xhrB = new XMLHttpRequest();
  xhrB.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=breakfast&number=1');
  xhrB.responseType = 'json';
  xhrB.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhrB.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhrB.addEventListener('load', function () {
    obj.breakfastData = xhrB.response.recipes[0];
    $breakfastImage.setAttribute('src', obj.breakfastData.image);
    breakfastIngredientsLoop();
  });
  xhrB.send();
}

function getLunchData() {
  const xhrL = new XMLHttpRequest();
  xhrL.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=lunch&number=1');
  xhrL.responseType = 'json';
  xhrL.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhrL.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhrL.addEventListener('load', function () {
    obj.lunchData = xhrL.response.recipes[0];
    $lunchImage.setAttribute('src', obj.lunchData.image);
    lunchIngredientsLoop();
  });
  xhrL.send();
}

function getDinnerData() {
  const xhrD = new XMLHttpRequest();
  xhrD.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=dinner&number=1');
  xhrD.responseType = 'json';
  xhrD.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhrD.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhrD.addEventListener('load', function () {
    obj.dinnerData = xhrD.response.recipes[0];
    $dinnerImage.setAttribute('src', obj.dinnerData.image);
    dinnerIngredientsLoop();
  });
  xhrD.send();
}

// document.addEventListener('DONTContentLoaded', function () {
//   getBreakfastData();
//   getLunchData();
//   getDinnerData();
// });
// function createBreakfastDom (){
//   // <div class="column-full">
//   //   <div>
//   //     <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Chocolate-Chip-Pancakes.png" alt="breakfast photo" />
//   //   </div>
//   //   <div id="breakfast-ingredients">
//   //     <p>INGREDIENTS</p>
//   //   </div>
//   //   <div>
//   //     <ul>
//   //       <li></li>
//   //       <li></li>
//   //       <li></li>
//   //       <li></li>
//   //       <li></li>
//   //     </ul>
//   //   </div>
//   //   <div id="breakfast-instructions">
//   //     <p>COOKING INSTRUCTIONS</p>
//   //   </div>
//   //   <div>
//   //     <p id="breakfast-info">Toast the sesame seeds, about 350 degrees in the oven for about 10-15 minutes. Keep an eye on them to make sure they
//   //       don't burn.Mix together the following to make the dressing: olive oil, vinegar, sugar, salt, pepper, green onions,
//   //       chicken flavor packet from the ramen noodle package.Crush the ramen noodles until there are no large chunks (small
//   //       chunks are OK).Combine the shredded cabbage and ramen noodles in a large bowl.Pour the dressing on the cabbage/noodle
//   //       mixture and toss to coat.Top with the toasted sesame seeds and almonds.</p>
//   //   </div>
//   // </div>

// }

$previewB.addEventListener('click', function (event) {
  $breakfastColumn.classList.toggle('hidden');
  $lunchRow.classList.toggle('hidden');
  $dinnerRow.classList.toggle('hidden');
  $breakfastImage.setAttribute('src', obj.breakfastData.image);
  $breakfastText.textContent = obj.breakfastData.title;
  obj.breakfastPreviewCounter++;
  if (obj.breakfastPreviewCounter % 2 === 0) {
    $breakfastText.textContent = 'BREAKFAST';
  } else {
    $breakfastText.textContent = obj.breakfastData.title;
  }
});

$previewL.addEventListener('click', function (event) {
  $lunchColumn.classList.toggle('hidden');
  $breakfastRow.classList.toggle('hidden');
  $dinnerRow.classList.toggle('hidden');
  $lunchText.textContent = obj.lunchData.title;
  obj.lunchPreviewCounter++;
  if (obj.lunchPreviewCounter % 2 === 0) {
    $lunchText.textContent = 'LUNCH';
  } else {
    $lunchText.textContent = obj.lunchData.title;
  }
});

$previewD.addEventListener('click', function (event) {
  $dinnerColumn.classList.toggle('hidden');
  $lunchRow.classList.toggle('hidden');
  $breakfastRow.classList.toggle('hidden');
  obj.dinnerPreviewCounter++;
  if (obj.dinnerPreviewCounter % 2 === 0) { $dinnerText.textContent = 'DINNER'; } else { $dinnerText.textContent = obj.dinnerData.title; }
});

// function renderImage(

// )

function breakfastIngredientsLoop() {
  for (let i = 0; i < obj.breakfastData.extendedIngredients.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = obj.breakfastData.extendedIngredients[i].original;
    $breakfastUl.appendChild($li);
  }
}

function lunchIngredientsLoop() {
  for (let i = 0; i < obj.lunchData.extendedIngredients.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = obj.lunchData.extendedIngredients[i].original;
    $lunchUl.appendChild($li);
  }
}

function dinnerIngredientsLoop() {
  for (let i = 0; i < obj.dinnerData.extendedIngredients.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = obj.dinnerData.extendedIngredients[i].original;
    $dinnerUl.appendChild($li);
  }
}

getBreakfastData();
getLunchData();
getDinnerData();
