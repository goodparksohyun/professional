document.addEventListener("DOMContentLoaded", function () {
  const subject = document.querySelector(".subject");
  const submenu = document.querySelector(".submenu");

  subject.addEventListener("click", function () {
    submenu.classList.toggle("active");
  });
});

// 모든 a 태그를 선택하여 기본 이벤트 차단
const links = document.querySelectorAll(".hospital a");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 이벤트 차단
  });
});

// 과목 선택
// 모든 a 태그에 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
  // .submenu와 .change 요소를 선택합니다.
  const submenu = document.querySelector(".submenu");
  const changeElement = document.querySelector(".change");

  // .submenu 안의 모든 a 태그를 선택합니다.
  const links = submenu.querySelectorAll(".hospital");

  // 각 a 태그에 클릭 이벤트 리스너를 추가합니다.
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // 클릭한 a 태그의 텍스트를 가져옵니다.
      const text = this.childNodes[1].textContent;
      console.log(text);

      // .change 요소의 텍스트를 클릭한 a 태그의 텍스트로 변경합니다.
      changeElement.textContent = text;

      // .change 요소의 스타일을 굵게(bold)로 설정합니다.
      changeElement.style.fontWeight = "bold";
      if (submenu.classList("active")) toggleActiveBtn();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const closeIcon = document.getElementById("close_icon");
  const submenu = document.querySelector(".submenu");
  e.stopPropagation();
  closeIcon.addEventListener("click", function () {
    submenu.style.display = "none"; // 서브메뉴 숨기기
  });
});
