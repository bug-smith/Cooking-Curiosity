
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

const obj = {
  breakfastData: [],
  lunchData: [],
  dinnerData: [],
  breakfastPreviewCounter: 0,
  lunchPreviewCounter: 0,
  dinnerPreviewCounter: 0
};

document.addEventListener('DOMContentLoaded', function () {
  getBreakfastData();
  getLunchData();
  getDinnerData();
});

function getBreakfastData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=breakfast&number=1');
  xhr.responseType = 'json';
  xhr.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhr.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhr.addEventListener('load', function () {
    obj.breakfastData = xhr.response.recipes[0];
    $breakfastImage.setAttribute('src', obj.breakfastData.image);
    breakfastIngredientsLoop();
  });
  xhr.send();
}

function getLunchData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=lunch&number=1');
  xhr.responseType = 'json';
  xhr.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhr.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhr.addEventListener('load', function () {
    obj.lunchData = xhr.response.recipes[0];
    $lunchImage.setAttribute('src', obj.lunchData.image);
    lunchIngredientsLoop();
  });
  xhr.send();
}

function getDinnerData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=dinner&number=1');
  xhr.responseType = 'json';
  xhr.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhr.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhr.addEventListener('load', function () {
    obj.dinnerData = xhr.response.recipes[0];
    $dinnerImage.setAttribute('src', obj.dinnerData.image);
    dinnerIngredientsLoop();
  });
  xhr.send();
}

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
