
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});


searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'insert');
});


searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector("header .badges");


// window.addEventListener("scroll",()=>{
//   console.log(scrollY);

//   if(scrollY > 500){
//     // console.log(badgeEl);
//     badgeEl.style.display = "none";
//   }else{
//     badgeEl.style.display = "block";
//   }

// });


const toTopEl = document.querySelector("#topBtn");

window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {

    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: "none"
    });

    gsap.to('#topBtn', .2, {
      x: 0,
    });

  } else {

    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: "block"
    });

    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));



toTopEl.addEventListener("click", () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})



// let timer;

// window.addEventListener("scroll", () => {
//     // console.log(scrollY);
//     // if (!timer) {

//     // timer = setTimeout(() => {
//     //   timer = null;
//     //   console.log("setTimeeeeeeee");
//     // }, 2000);
//     // }


//   // if(timer){
//   //   timer = clearTimeout(timer);
//   //   console.log("clear");
//   // }else{
//   //   timer = setTimeout(() => {
//   //     // timer = null;
//   //     console.log("setTimeeeeeeee");
//   //   }, 2000);
//   // }


//   // if(scrollY > 500){
//   //   // console.log(badgeEl);
//   //   badgeEl.style.display = "none";
//   // }else{
//   //   badgeEl.style.display = "block";
//   // }

//   // 

// });


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((el, index) => {

  // gsap.to(요소,지속시간,옵션);
  // 지속시간동안 옵션을 실행한다. transition 같은느낌

  gsap.to(el, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });

});


new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});



new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});


const toggleEl = document.querySelector(".toggle-promotion");
const promoEl = document.querySelector(".promotion");
let isHide = false;

toggleEl.addEventListener('click', () => {
  isHide = !isHide;
  if (isHide) {
    promoEl.classList.add('hide');
    // isHide = true;
  } else {
    promoEl.classList.remove('hide');
    // isHide = false;
  }

});




// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {

  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    autoplay: true,
    loop: true,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// function random(min, max) {
const random = (min, max) => {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


const floatingObject = (selector, delay, size) => {

  gsap.to(selector,
    random(1.5, 2.5), // 애니메이션 동작시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay) // 몇초후에 시작될건지
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach((spyEl, index) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: .8
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
})




new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// textContent => 그 요소의 글자 내용을 알아내거나 지정가능하다.



// 이벤트를 감쌀 디바운싱 함수
function debounce(fn, delay) {
  console.log("ㅗ됴");
  // 타이머 선언
  let timer = null;
  // 타이머 변수에 접근 가능한 클로져 함수
  return function () {
    // 클로져 함수 안에서 this 와 arguments 변수로 디바운싱 함수의 스코프와 변수를 접근한다.
    let context = this;
    let args = arguments;
    // 만약 이벤트가 호출되면 타이머를 초기화 하고 다시 시작한다.
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}


function foo() {
  console.log('You are scrolling!');
}

// 이벤트 함수를 디바운싱 함수로 감싸서 2초 마다 발생하도록 한다.
let elem = document.querySelector('.debounce');
console.log(elem);
window.addEventListener('scroll', debounce(foo, 1000));


