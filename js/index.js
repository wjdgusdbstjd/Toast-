//스크롤 위치 알기위한 코드 - 마지막에 지우기

function updateScrollPosition() {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  const scrollValueElement = document.getElementById("scroll-value");
  scrollValueElement.textContent = scrollPercentage.toFixed(2) + "%";
}

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", updateScrollPosition);

// 초기 페이지 로드 시 한 번 실행
updateScrollPosition();


//-----------------------------------------------------------------
//스크롤에 따른 배경 색 변경

const bgcontainer = document.getElementById("wrap");

function changeBgColor(event) {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight; // 뷰포트 높이
  const documentHeight = document.body.offsetHeight; // 문서 전체 높이

  // 스크롤 위치를 화면 높이에 대한 비율로 계산
  const scrollRatio = scrollPosition / (documentHeight - windowHeight);


  if (scrollRatio >= 0.71) {
    bgcontainer.style.backgroundColor = "#E92A57"; // 70% 이상일 때 배경색 변경
  } else if (scrollRatio >= 0.5) {
    bgcontainer.style.backgroundColor = "#FFBAC7"; // 페이지의 끝 부분 (60%)
  } else if (scrollRatio >= 0.42) {
    bgcontainer.style.backgroundColor = "#E45F7F"; // 44% 위치
  } else if (scrollRatio >= 0.35) {
    bgcontainer.style.backgroundColor = "#AEFF88"; // 22% 위치
  } else if (scrollRatio >= 0.07) {
    bgcontainer.style.backgroundColor = "#FF94AE"; // 18% 위치
  } else {
    bgcontainer.style.backgroundColor = "#94FFF9"; // 페이지 맨 위 (0%)
  }
}

window.addEventListener("scroll", changeBgColor);

//-----------------------------------------------------------------
// main
// main 잼 이미지 애니메이션 코드

window.onload = function() {
  var jam1 = document.querySelector('#main .jam-1');
  var jam2 = document.querySelector('#main .jam-2');
  var jam3 = document.querySelector('#main .jam-3');
  var jam4 = document.querySelector('#main .jam-4');

  jam1.style.top = '50vw';
  jam1.style.transform = 'rotate(360deg)';
  jam2.style.bottom = '50vw';
  jam2.style.transform = 'rotate(360deg)';
  jam3.style.top = '50vw';
  jam3.style.transform = 'rotate(360deg)';
  jam4.style.bottom = '50vw';
  jam4.style.transform = 'rotate(360deg)';

  setTimeout(function() {
      jam1.style.top = '5vw';
      jam1.style.transform = 'rotate(0deg)';
      jam2.style.bottom = '20vw';
      jam2.style.transform = 'rotate(0deg)';
      jam3.style.top = '13vw';
      jam3.style.transform = 'rotate(0deg)';
      jam4.style.bottom = '13vw';
      jam4.style.transform = 'rotate(0deg)';
  }, 1700);

  var images = document.querySelectorAll('.top-img img');

  for (var i = 0; i < images.length; i++) {
      images[i].style.animationDelay = (i * 0.1) + 's';
  }
}

//-----------------------------------------------------------------

// main
//main에 스크롤시 border-radius값 주는 코드

const section1 = document.querySelector("#main");

// 스크롤 이벤트 리스너를 등록
window.addEventListener("scroll", () => {
  // 스크롤 위치를 확인
  const scrollPosition = window.scrollY;

  // #main 요소의 상단 위치를 확인
  const section1Top = section1.offsetTop;

  // 스크롤 위치가 #main 요소의 상단 위치보다 크면
  if (scrollPosition > section1Top) {
    // .border 클래스를 #main에 추가
    section1.classList.add("border");
  } else {
    // 스크롤 위치가 #main 요소의 상단 위치보다 작으면 .border 클래스를 제거
    section1.classList.remove("border");
  }
});

//-----------------------------------------------------------------
// main
//main 텍스트 이미지 애니메이션 코드

let controller1 = new ScrollMagic.Controller();

let timeline = new TimelineMax();
timeline.fromTo(
  ".main-txt-img",
  4,
  {
    bottom: "2vw", // 초기 위치 설정
    scale: 1, // 초기 크기를 원본 크기로 설정
  },
  {
    top: "0vw", // 이미지의 위치를 상단으로 이동시킴
    scale: 0.05, // 이미지의 크기를 5%로 줄임
    ease: Power0.easeNone,
  }
);

let scene = new ScrollMagic.Scene({
  triggerElement: "#main",
  duration: "100%",
  triggerHook: 0,
  offset: "0",
})
  .setTween(timeline)
  .addTo(controller1);

let pinScene = new ScrollMagic.Scene({
  triggerElement: ".main-txt-img",
  triggerHook: 0,
})
  .setClassToggle(".main-txt-img", "fixed") // 이미지 요소에 fixed 클래스 추가
  .addTo(controller1);

//-----------------------------------------------------------------
// content-3
//토스트기에서 토스트 튀어오르도록 하는 코드

$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPercent =
      ($(window).scrollTop() / ($(document).height() - $(window).height())) *
      100;

    if (scrollPercent >= 40) {
      $("#content-3 .toast-1").addClass("show");
      // 여기에 추가로 실행할 코드를 작성할 수 있습니다.
    }
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPercent =
      ($(window).scrollTop() / ($(document).height() - $(window).height())) *
      100;

    if (scrollPercent >= 40) {
      $("#content-3 .toast-2").addClass("show");
      // 여기에 추가로 실행할 코드를 작성할 수 있습니다.
    }
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPercent =
      ($(window).scrollTop() / ($(document).height() - $(window).height())) *
      100;

    if (scrollPercent >= 40) {
      $("#content-3 .toast-3").addClass("show");
      // 여기에 추가로 실행할 코드를 작성할 수 있습니다.
    }
  });
});

//-----------------------------------------------------------------
// content-3
// 별 이미지 회전 코드

let start = null;
let initialPositions = {};

window.addEventListener('scroll', function() {
  var scrollPercent = window.pageYOffset / document.body.scrollHeight;

  if (scrollPercent > 0.28 && start === null) {
    start = window.pageYOffset;

    let star1 = document.querySelector('#content-3 .star-1');
    let star2 = document.querySelector('#content-3 .star-2');
    let star3 = document.querySelector('#content-3 .star-3');

    initialPositions['star1'] = star1.offsetTop;
    initialPositions['star2'] = star2.offsetTop;
    initialPositions['star3'] = star3.offsetTop;
  }

  if (start !== null) {
    let star1 = document.querySelector('#content-3 .star-1');
    let star2 = document.querySelector('#content-3 .star-2');
    let star3 = document.querySelector('#content-3 .star-3');
    
    let distance = (window.pageYOffset - start) * 0.05;
    let rotation = (window.pageYOffset - start) * 0.5;

    star1.style.top = (initialPositions['star1'] - distance) + 'px';
    star1.style.transform = 'rotate(' + rotation + 'deg)';
    star2.style.top = (initialPositions['star2'] - distance) + 'px';
    star2.style.transform = 'rotate(' + rotation + 'deg)';
    star3.style.top = (initialPositions['star3'] - distance) + 'px';
    star3.style.transform = 'rotate(' + rotation + 'deg)';
  }
});

//-----------------------------------------------------------------
// fixed-bg content-3다음
// fixed-bg  텍스트 늘어나는 코드


window.addEventListener("scroll", function () {
  // 현재 문서의 높이와 창의 높이를 가져오기
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;

  // 현재 스크롤 위치 계산
  const currentScroll = window.scrollY;

  // 스크롤이 55%에 도달하면
  if ((currentScroll + windowHeight) / fullHeight >= 0.55) {
    // id가 'fixed-bg-section'인 요소 안의 h1과 h2의 너비를 30vw로 변경
    document.querySelector("#fixed-bg-section h1").style.width = "30vw";
    document.querySelector("#fixed-bg-section h2").style.width = "30vw";
  } else {
    // 그 외의 경우는 너비를 0으로 설정
    document.querySelector("#fixed-bg-section h1").style.width = "0";
    document.querySelector("#fixed-bg-section h2").style.width = "0";
  }
});

//-----------------------------------------------------------------
// content-4
//각 버튼 클릭시 다른 컨텐츠 보여주는 코드

const menuItems = document.querySelectorAll("#flow_menu li");
const sections = document.querySelectorAll(".hidesection");

menuItems.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); // 기본 동작을 막음
    menuItems.forEach((item) => {
      item.classList.remove("selected");
    });
    this.classList.add("selected");
    sections.forEach((section) => {
      section.style.display = "none";
    });
    sections[index].style.display = "block";
  });
});

//-----------------------------------------------------------------
// content-4
// canvas에 그림 그리기 설명 텍스트 

$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPercent =
      ($(window).scrollTop() / ($(document).height() - $(window).height())) *
      100;

    if (scrollPercent >= 58) {
      $("#content-4 strong").addClass("txtshow2");
      // 여기에 추가로 실행할 코드를 작성할 수 있습니다.
    }
  });
});

//-----------------------------------------------------------------
// content-4
// 식빵에 그림그리는 canvas코드

let canvasList = ['canvas-1', 'canvas-2', 'canvas-3'];
let colorList = ['#EA1649', '#80531E', '#331E86'];

canvasList.forEach((canvasId, index) => {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext('2d');
  let painting = false;

  // CSS에서 지정한 크기를 가져옴
  let style = window.getComputedStyle(canvas);
  let width = style.getPropertyValue('width');
  let height = style.getPropertyValue('height');

  // 'px'를 제거하고 숫자만 가져옴
  width = parseFloat(width);
  height = parseFloat(height);

  // 캔버스의 그리기 영역 크기를 CSS에서 지정한 크기와 동일하게 설정
  canvas.width = width;
  canvas.height = height;

  function startDraw(e) {
    painting = true;
    draw(e);
  }

  function endDraw() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 60;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorList[index];

    let rect = canvas.getBoundingClientRect();  // 캔버스의 위치와 크기 정보를 가져옴
    let x = e.clientX - rect.left;  // 캔버스내의 상대적 x 좌표
    let y = e.clientY - rect.top;   // 캔버스내의 상대적 y 좌표

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 캔버스가 화면에서 사라졌을 때
      if (!entry.isIntersecting) {
        clearCanvas();
      }
    });
  }, { threshold: 0 });  // threshold: 0은 타겟 요소가 뷰포트에 하나라도 들어가 있지 않을 때 콜백 함수를 실행하게 설정

  observer.observe(canvas);  // 캔버스를 관찰 대상으로 설정

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mouseup', endDraw);
  canvas.addEventListener('mousemove', draw);
});


//-----------------------------------------------------------------
// content-5
// content-5 font 크기 늘어나는 코드 


// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", function () {
  // 현재 문서의 높이와 창의 높이를 가져오기
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;

  // 현재 스크롤 위치 계산
  const currentScroll = window.scrollY;

  // 스크롤이 67%에 도달하면
  if ((currentScroll + windowHeight) / fullHeight >= 0.70) {
    // 클래스가 'move-circle'인 요소의 너비를 20vw로 변경
    document.querySelector(".move-circle-1").style.width = "95vw";
  } else {
    // 그 외의 경우는 너비를 3vw로 유지
    document.querySelector(".move-circle-1").style.width = "3vw";
  }
});

window.addEventListener("scroll", function () {
  // 현재 문서의 높이와 창의 높이를 가져오기
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;

  // 현재 스크롤 위치 계산
  const currentScroll = window.scrollY;

  // 스크롤이 67%에 도달하면
  if ((currentScroll + windowHeight) / fullHeight >= 0.70) {
    // 클래스가 'move-circle'인 요소의 너비를 20vw로 변경
    document.querySelector(".move-circle-2").style.width = "85vw";
  } else {
    // 그 외의 경우는 너비를 3vw로 유지
    document.querySelector(".move-circle-2").style.width = "3vw";
  }
});

window.addEventListener("scroll", function () {
  // 현재 문서의 높이와 창의 높이를 가져오기
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;

  // 현재 스크롤 위치 계산
  const currentScroll = window.scrollY;

  // 스크롤이 67%에 도달하면
  if ((currentScroll + windowHeight) / fullHeight >= 0.70) {
    // 클래스가 'move-circle'인 요소의 너비를 20vw로 변경
    document.querySelector(".move-circle-3").style.width = "65vw";
  } else {
    // 그 외의 경우는 너비를 3vw로 유지
    document.querySelector(".move-circle-3").style.width = "3vw";
  }
});

//-----------------------------------------------------------------
// content-5
// content-5 폰트 크기 늘어나는 코드

document.addEventListener("scroll", function () {
  let scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
  if (scrollPercent >= 70) {
    setTimeout(function() {
      document.querySelectorAll("#content-5 p").forEach(function (p) {
        p.style.fontSize = "calc(100vw * 73 / 1920)";
      });
    }, 200); // 2초 뒤에 실행
  }
});

//-----------------------------------------------------------------
// content-6
// 텍스트 컬러 변경

let textContainer = document.getElementById("scrollText");
let originalText = textContainer.innerHTML
  .split("<br>")
  .map((str) => str.trim().split("")); // 원본 텍스트 저장
let text = JSON.parse(JSON.stringify(originalText)); // 깊은 복사
let isTextAnimated = false;
let currentLine = 0;
let currentIndex = 0;
let lastScrollTop = 0; // 마지막 스크롤 위치

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollRatio =
    scrollPosition / (document.body.scrollHeight - windowHeight);

  if (!isTextAnimated && scrollRatio >= 0.80) {
    isTextAnimated = true;
  } else if (isTextAnimated && scrollRatio < 0.80) {
    isTextAnimated = false;
    text = JSON.parse(JSON.stringify(originalText)); // 원본 텍스트로 복구
    currentLine = 0;
    currentIndex = 0;
  }

  if (isTextAnimated && currentLine < text.length) {
    if (scrollPosition > lastScrollTop) {
      // 스크롤이 아래로 내려갈 때
      if (currentIndex < text[currentLine].length) {
        text[currentLine][currentIndex] =
          '<span class="highlight">' +
          text[currentLine][currentIndex] +
          "</span>";
        currentIndex++;
      } else {
        currentLine++;
        currentIndex = 0;
      }
    } else {
      // 스크롤이 위로 올라갈 때
      if (currentIndex > 0) {
        currentIndex--;
      } else if (currentLine > 0) {
        currentLine--;
        currentIndex = text[currentLine].length - 1;
      }
      if (
        text[currentLine][currentIndex].includes('<span class="highlight">')
      ) {
        text[currentLine][currentIndex] = text[currentLine][currentIndex]
          .replace('<span class="highlight">', "")
          .replace("</span>", "");
      }
    }

    textContainer.innerHTML = text.map((str) => str.join("")).join("<br>");
  }

  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // 마지막 스크롤 위치 업데이트
});


//-----------------------------------------------------------------
// content-7
//토스트기 눈  깜빡이도록 하는 코드
function blink() {
  const eyes = document.querySelectorAll(".eye");

  setInterval(() => {
    eyes.forEach((eye) => {
      eye.classList.add("blink");
      setTimeout(() => {
        eye.classList.remove("blink");
      }, 200);
    });
  }, 3000); // 3초 간격으로 두 눈을 동시에 깜빡이도록 설정
}

blink(); // 눈 깜빡임 효과 시작

//-----------------------------------------------------------------
// content-7
// 타이핑 코드

"use strict";

function setupTyping(typingText, targetElement, delay) {
    let index = 0;

    function typingNext() {
        targetElement.textContent += typingText[index++];
        if (index < typingText.length) setTimeout(typingNext, 100);
    }

    const observer = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setTimeout(typingNext, delay);
        }
    });

    observer.observe(targetElement);
}

// "logo-left-img" 요소가 나타날 때 "logo-kid-text-1"에 대한 타이핑 작업을 2초 뒤에 실행
const logoLeftImg = document.querySelector(".toaster-oven");
const logoKidText = document.querySelector(".typing-txt");

setupTyping("I am very", logoKidText, 600);



//-----------------------------------------------------------------
// content-7
// 타이핑 코드2 

"use strict";

function setupTyping(typingText, targetElement, delay, callback) {
    let index = 0;

    function typingNext() {
        targetElement.textContent += typingText[index++];
        if (index < typingText.length) {
            setTimeout(typingNext, 100);
        } else {
            if (callback && typeof callback === 'function') {
                callback(); // 타이핑이 끝났을 때 콜백 함수를 호출
            }
        }
    }

    const observer = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setTimeout(typingNext, delay);
        }
    });

    observer.observe(targetElement);
}

// CSS 애니메이션 시작
function startAnimation() {
    const targetElement = document.querySelector(".typing-txt-2");
    targetElement.style.animation = "typingAnimation 2s infinite";
}

const logoLeftImg2 = document.querySelector(".toaster-oven");
const logoKidText2 = document.querySelector(".typing-txt-2");

setupTyping("important!", logoKidText2, 1200, startAnimation);



//-----------------------------------------------------------------
// content-8
// content-8 (마지막 섹션) 섹션 자체 크기 늘어나는 코드 
let content = document.getElementById("content-8");

let observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      content.style.width = "100vw";
      content.style.height = "60vw";
      document.querySelectorAll("#content-8 .txt-section li p").forEach(function (li) {
        li.style.fontSize = "calc(3vw * 320 / 100)";
      });
      document.querySelectorAll("#content-8 .img-section img").forEach(function (img) {
        img.style.width = "18vw";
      });
    } else {
      content.style.width = "10vw";
      content.style.height = "6vw";
      document.querySelectorAll("#content-8 .txt-section li p").forEach(function (li) {
        li.style.fontSize = "1.2vw";
      });
      document.querySelectorAll("#content-8 .img-section img").forEach(function (img) {
        img.style.width = "1.8vw";
      });
    }
  });
}); 

observer.observe(content);

//-----------------------------------------------------------------


//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------
//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------

//-----------------------------------------------------------------
