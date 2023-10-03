function getBreakfastData() {
  const xhrB = new XMLHttpRequest();
  xhrB.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=breakfast&number=1');
  xhrB.responseType = 'json';
  xhrB.setRequestHeader('X-RapidAPI-Key', 'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147');
  xhrB.setRequestHeader('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
  xhrB.addEventListener('load', function () {
    console.log(xhrB.status);
    console.log(xhrB.response);
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
    console.log(xhrL.status);
    console.log(xhrL.response);
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
    console.log(xhrD.status);
    console.log(xhrD.response);
  });
}
