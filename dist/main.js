const slideController = document.querySelector('.slider-controller');
const slider = document.querySelector('.slider-images');

const COUNT = 5;
let curOrder = 0;

const showNext = function showNext() {
  curOrder += 1;
  if (curOrder === COUNT) curOrder = 0;
  slider.style.transform = `translateX(${curOrder * -100}%)`;
};

const showPrev = function showPrev() {
  curOrder -= 1;
  if (curOrder === -1) curOrder = COUNT - 1;
  slider.style.transform = `translateX(${curOrder * -100}%)`;
};

const showAt = function showAt(order) {
  curOrder = +order;
  slider.style.transform = `translateX(${curOrder * -100}%)`;
};

const toggleActive = function updateActive(curDot, newDot) {
  curDot.classList.remove('active');
  newDot.classList.add('active');
};

const updateNext = function updateNext() {
  const curDot = slideController.querySelector('.active');
  let newDot = curDot.nextElementSibling;

  if (!newDot) {
    newDot = curDot.parentElement.firstElementChild;
  }

  toggleActive(curDot, newDot);
};

const updatePrev = function updatePrev() {
  const curDot = slideController.querySelector('.active');
  let newDot = curDot.previousElementSibling;

  if (!newDot) {
    newDot = curDot.parentElement.lastElementChild;
  }

  toggleActive(curDot, newDot);
};

const updateCurrent = function updateCurrent(newDot) {
  const curDot = slideController.querySelector('.active');
  toggleActive(curDot, newDot);
};

slideController.addEventListener('click', (e) => {
  if (e.target.classList.contains('js-btn-prev')) {
    showPrev();
    updatePrev();
  }

  if (e.target.classList.contains('js-btn-next')) {
    showNext();
    updateNext();
  }

  if (e.target.classList.contains('dot')) {
    showAt(e.target.dataset.order);
    updateCurrent(e.target);
  }
});

// slideshow
setInterval(() => {
  showNext();
  updateNext();
}, 5000);
