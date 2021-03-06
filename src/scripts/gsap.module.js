// grab dependencies
import 'gsap';

export { playTl, setTl };
// cache the DOM
const tl = new TimelineLite({ paused: true, onComplete });

function onComplete() {
  const elPreloader = document.querySelector('.loader-covering');
  const elBack      = document.querySelector('.back-of-loader');
  const elSearch    = document.querySelector('#search');
  const tlLoader    = new TimelineLite();

  tlLoader
    .to(elBack, 1, { autoAlpha: 0 })
    .to(elPreloader, 1, { y: '-100%' }, 0)
    .to(elSearch, 1, { width: '100%', autoAlpha: 1 }, 1);
}

function setTl() {
  const elTr   = document.querySelectorAll('tr');
  const elMain = document.querySelector('main');

  tl
    .set(elMain, { autoAlpha: 1 })
    // .staggerFromTo(elTr, .2, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, .1);
    .staggerFromTo(elTr, .2, { skewX: 90, autoAlpha: 0 }, { skewX: 0, autoAlpha: 1 }, .1);
}

function playTl() {
  tl.play();
}
