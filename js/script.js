window.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs');
  const modal = require('./modules/modal');
  const timer = require('./modules/timer');
  const cards = require('./modules/cards');
  const calc = require('./modules/calc');
  const forms = require('./modules/forms');
  const slider = require('./modules/slider');

  tabs();
  modal();
  timer();
  cards();
  calc();
  forms();
  slider();
});
