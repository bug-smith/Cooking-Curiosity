/* exported data */
let data = {
  view: 'main',
  breakfastEntries: [],
  lunchEntries: [],
  dinnerEntries: [],
  notes: null
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('Cooking Curiosity', dataJSON);
});

const previousDataJSON = localStorage.getItem('Cooking Curiosity');

if (previousDataJSON !== null) data = JSON.parse(previousDataJSON);
