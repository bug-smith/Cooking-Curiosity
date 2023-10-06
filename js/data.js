/* exported data */
let data = {
  view: 'main',
  breakfastFavorites: [],
  lunchFavorites: [],
  dinnerFavorites: [],
  apiCallDate: '',
  lastViewedBreakfast: [],
  lastViewedLunch: [],
  lastViewedDinner: [],
  notes: null
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('Cooking Curiosity', dataJSON);
});

const previousDataJSON = localStorage.getItem('Cooking Curiosity');

if (previousDataJSON !== null) data = JSON.parse(previousDataJSON);
