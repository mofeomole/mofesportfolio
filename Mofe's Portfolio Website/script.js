let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let logoParagraph = document.querySelector('.logo-paragraph');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
      logoParagraph.classList.add('active');
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);
  });
});

var tablinks = document.getElementsByClassName("tab__links");
var tabcontents = document.getElementsByClassName("tab__contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active__link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active__tab");
  }

  event.currentTarget.classList.add("active__link");
  document.getElementById(tabname).classList.add("active__tab");
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const element = document.querySelector('.profile__col--1 img');
window.addEventListener('scroll', function() {
  if (isInViewport(element)) {
    element.classList.add('fade-in');
  }
});
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  const aboutMe = document.querySelector('#about-me');

  const topPosition = aboutMe.offsetTop;

  if (window.pageYOffset >= topPosition) {
    backToTop.classList.add('hidden');
  } else {
    backToTop.classList.remove('hidden');
  }
});
