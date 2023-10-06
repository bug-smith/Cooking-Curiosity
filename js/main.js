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
const $breakfastInfo = document.querySelector('#breakfast-info');
const $lunchInfo = document.querySelector('#lunch-info');
const $dinnerInfo = document.querySelector('#dinner-info');
const $breakfastHeart = document.querySelector('#breakfast-heart');
const $lunchHeart = document.querySelector('#lunch-heart');
const $dinnerHeart = document.querySelector('#dinner-heart');
const $favoriteHeader = document.querySelectorAll('#header-favorite-btn');

const lastApiCallTime = data.apiCallDate;
const currentTime = new Date().getTime();
const lastCallTime = currentTime - (lastApiCallTime || 0);

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
}
);

function getBreakfastData() {
  if (lastCallTime >= 24 * 60 * 60 * 1000 || isNaN(lastCallTime) || lastCallTime === 0) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=breakfast&number=1'
    );
    xhr.responseType = 'json';
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147'
    );
    xhr.setRequestHeader(
      'X-RapidAPI-Host',
      'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    );
    xhr.addEventListener('load', function () {
      const breakfastCallDate = new Date().getTime();
      data.apiCallDate = breakfastCallDate;
      obj.breakfastData = xhr.response.recipes[0];
      data.lastViewedBreakfast = xhr.response.recipes[0];
      $breakfastInfo.textContent = xhr.response.recipes[0].instructions;
      $breakfastImage.setAttribute('src', xhr.response.recipes[0].image);
      breakfastIngredientsLoop();
    });
    xhr.send();
  } else {
    $breakfastInfo.textContent = data.lastViewedBreakfast.instructions;
    $breakfastImage.setAttribute('src', data.lastViewedBreakfast.image);
    breakfastIngredientsLoop();
  }

}

function getLunchData() {
  if (lastCallTime >= 24 * 60 * 60 * 1000 || isNaN(lastCallTime) || lastCallTime === 0) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=lunch&number=1'
    );
    xhr.responseType = 'json';
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147'
    );
    xhr.setRequestHeader(
      'X-RapidAPI-Host',
      'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    );
    xhr.addEventListener('load', function () {
      obj.lunchData = xhr.response.recipes[0];
      data.lastViewedLunch = xhr.response.recipes[0];
      $lunchInfo.textContent = obj.lunchData.instructions;
      $lunchImage.setAttribute('src', obj.lunchData.image);
      lunchIngredientsLoop();
    });
    xhr.send();
  } else {
    $lunchInfo.textContent = data.lastViewedLunch.instructions;
    $lunchImage.setAttribute('src', data.lastViewedLunch.image);
    lunchIngredientsLoop();
  }
}

function getDinnerData() {
  if (lastCallTime >= 24 * 60 * 60 * 1000 || isNaN(lastCallTime) || lastCallTime === 0) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=dinner&number=1'
    );
    xhr.responseType = 'json';
    xhr.setRequestHeader(
      'X-RapidAPI-Key',
      'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147'
    );
    xhr.setRequestHeader(
      'X-RapidAPI-Host',
      'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    );
    xhr.addEventListener('load', function () {
      obj.dinnerData = xhr.response.recipes[0];
      data.lastViewedDinner = xhr.response.recipes[0];
      $dinnerInfo.textContent = obj.dinnerData.instructions;
      $dinnerImage.setAttribute('src', obj.dinnerData.image);
      dinnerIngredientsLoop();
    });
    xhr.send();
  } else {
    $dinnerInfo.textContent = data.lastViewedDinner.instructions;
    $dinnerImage.setAttribute('src', data.lastViewedDinner.image);
    dinnerIngredientsLoop();
  }
}

$previewB.addEventListener('click', function (event) {
  if (!data.lastViewedBreakfast) {
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
  } else {
    $breakfastColumn.classList.toggle('hidden');
    $lunchRow.classList.toggle('hidden');
    $dinnerRow.classList.toggle('hidden');
    $breakfastImage.setAttribute('src', data.lastViewedBreakfast.image);
    $breakfastText.textContent = data.lastViewedBreakfast.title;
    obj.breakfastPreviewCounter++;
    if (obj.breakfastPreviewCounter % 2 === 0) {
      $breakfastText.textContent = 'BREAKFAST';
    } else {
      $breakfastText.textContent = data.lastViewedBreakfast.title;
    }
  }
});

$previewL.addEventListener('click', function (event) {
  if (!data.lastViewedLunch) {
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
  } else {
    $lunchColumn.classList.toggle('hidden');
    $breakfastRow.classList.toggle('hidden');
    $dinnerRow.classList.toggle('hidden');
    $lunchText.textContent = data.lastViewedLunch.title;
    obj.lunchPreviewCounter++;
    if (obj.lunchPreviewCounter % 2 === 0) {
      $lunchText.textContent = 'LUNCH';
    } else {
      $lunchText.textContent = data.lastViewedLunch.title;
    }
  }
});

$previewD.addEventListener('click', function (event) {
  if (!data.lastViewedDinner) {
    $dinnerColumn.classList.toggle('hidden');
    $lunchRow.classList.toggle('hidden');
    $breakfastRow.classList.toggle('hidden');
    obj.dinnerPreviewCounter++;
    if (obj.dinnerPreviewCounter % 2 === 0) {
      $dinnerText.textContent = 'DINNER';
    } else {
      $dinnerText.textContent = obj.dinnerData.title;
    }
  } else {
    $dinnerColumn.classList.toggle('hidden');
    $lunchRow.classList.toggle('hidden');
    $breakfastRow.classList.toggle('hidden');
    obj.dinnerPreviewCounter++;
    if (obj.dinnerPreviewCounter % 2 === 0) {
      $dinnerText.textContent = 'DINNER';
    } else {
      $dinnerText.textContent = data.lastViewedDinner.title;
    }
  }
});

$breakfastHeart.addEventListener('click', function (event) {
  const dupes = data.breakfastFavorites.some(favorite => {
    return favorite.id === obj.breakfastData.id;
  });

  const dupesView = data.breakfastFavorites.some(item => {
    return item.id === data.lastViewedBreakfast.id;
  });

  if (!dupes && !dupesView) {
    if (
      lastCallTime >= 24 * 60 * 60 * 1000 ||
  isNaN(lastCallTime) ||
  lastCallTime === 0
    ) {
      data.breakfastFavorites.push(obj.breakfastData);
    } else if (lastCallTime <= 24 * 60 * 60 * 1000) {
      data.breakfastFavorites.push(data.lastViewedBreakfast);
    }
  }
});

$lunchHeart.addEventListener('click', function (event) {
  const dupes = data.lunchFavorites.some(favorite => {
    return favorite.id === obj.lunchData.id;
  });

  const dupesView = data.lunchFavorites.some(item => {
    return item.id === data.lastViewedLunch.id;
  });
  // console.log(dupes, dupesView);
  if (!dupes && !dupesView) {
    if (
      lastCallTime >= 24 * 60 * 60 * 1000 ||
      isNaN(lastCallTime) ||
      lastCallTime === 0
    ) {
      data.lunchFavorites.push(obj.lunchData);
    } else if (lastCallTime <= 24 * 60 * 60 * 1000) {
      data.lunchFavorites.push(data.lastViewedLunch);
    }
  }
});

$dinnerHeart.addEventListener('click', function (event) {
  const dupes = data.dinnerFavorites.some(favorite => {
    return favorite.id === obj.dinnerData.id;
  });

  const dupesView = data.dinnerFavorites.some(item => {
    return item.id === data.lastViewedDinner.id;
  });

  if (!dupes && !dupesView) {
    if (
      lastCallTime >= 24 * 60 * 60 * 1000 ||
      isNaN(lastCallTime) ||
      lastCallTime === 0
    ) {
      data.dinnerFavorites.push(obj.dinnerData);
    } else if (lastCallTime <= 24 * 60 * 60 * 1000) {
      data.dinnerFavorites.push(data.lastViewedDinner);
    }
  }
});

$favoriteHeader.addEventListener('click', function () {

});

function breakfastIngredientsLoop() {
  if (data.lastViewedBreakfast === 0) {
    for (let i = 0; i < obj.breakfastData.extendedIngredients.length; i++) {
      const $li = document.createElement('li');
      $li.textContent = obj.breakfastData.extendedIngredients[i].original;
      $breakfastUl.appendChild($li);
    }
  } else {
    for (let j = 0; j < data.lastViewedBreakfast.extendedIngredients.length; j++) {
      const $li = document.createElement('li');
      $li.textContent = data.lastViewedBreakfast.extendedIngredients[j].original;
      $breakfastUl.appendChild($li);
    }
  }
}

function lunchIngredientsLoop() {
  if (data.lastViewedLunch === 0) {
    for (let i = 0; i < obj.lunchData.extendedIngredients.length; i++) {
      const $li = document.createElement('li');
      $li.textContent = obj.lunchData.extendedIngredients[i].original;
      $lunchUl.appendChild($li);
    }
  } else {
    for (let j = 0; j < data.lastViewedLunch.extendedIngredients.length; j++) {
      const $li = document.createElement('li');
      $li.textContent = data.lastViewedLunch.extendedIngredients[j].original;
      $lunchUl.appendChild($li);
    }
  }
}

function dinnerIngredientsLoop() {
  if (data.lastViewedDinner === 0) {
    for (let i = 0; i < obj.dinnerData.extendedIngredients.length; i++) {
      const $li = document.createElement('li');
      $li.textContent = obj.dinnerData.extendedIngredients[i].original;
      $dinnerUl.appendChild($li);
    }
  } else {
    for (let j = 0; j < data.lastViewedDinner.extendedIngredients.length; j++) {
      const $li = document.createElement('li');
      $li.textContent = data.lastViewedDinner.extendedIngredients[j].original;
      $dinnerUl.appendChild($li);
    }
  }
}
