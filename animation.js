const burguerAnimation = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navMenuFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

const navAnimation = () => {
  const nav = document.querySelector('nav');
  window.onscroll = () => {
    if (window.scrollY === 0) {
      nav.classList.add('topScrolled');
    } else {
      nav.classList.remove('topScrolled');
    }
  };
};

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 20;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 20);
  }, 20);
}

let readyToScroll = true;
function subscribeAnchors() {
  const anchors = document.querySelectorAll('.selfAnchor');
  anchors.forEach((anchor) => {
    if (!readyToScroll) return;
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(anchor);
      const selector = document.querySelector(`#${anchor.name}`);
      scrollTo(document.documentElement, selector.offsetTop - 100, 500);
    });
  });
}

//execute
(() => {
  burguerAnimation();
  navAnimation();
  subscribeAnchors();
})();
