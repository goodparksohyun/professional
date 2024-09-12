//과목/증상 선택 버튼
const subject_aake = document.getElementById("subject_aake");
subject_aake.onclick = showHideMenu;

//증상/과목 누르면 toggle하기
function showHideMenu() {
  const list_all = document.querySelector(".list_all");
  list_all.classList.add("on");
}

// close_icon을 클릭했을 때 list_all 창이 닫히도록 구현
const closeIcon = document.getElementById("close_icon");
closeIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  const listAll = document.querySelector(".list_all");
  listAll.classList.remove("on"); // list_all 창을 닫음 (숨김 처리)
  list_all.classList.add("off");
});

// 버튼과 메뉴 요소 선택
const subjectBtn = document.getElementById("subject_btn");
const symptomsBtn = document.getElementById("symptoms_btn");
const submenu = document.querySelector(".submenu");
const clickMenu = document.querySelector(".click_menu");
const changeDiv = document.querySelector(".change");

// 초기 상태: 과목 버튼 활성화 및 과목 메뉴 표시
submenu.style.display = "block";

// 과목 버튼 클릭 시 이벤트 처리
subjectBtn.addEventListener("click", function () {
  subjectBtn.classList.add("on");
  subjectBtn.classList.remove("off");
  symptomsBtn.classList.add("off");
  symptomsBtn.classList.remove("on");
  submenu.style.display = "block";
  clickMenu.style.display = "none";
});

// 증상 버튼 클릭 시 이벤트 처리
symptomsBtn.addEventListener("click", function () {
  symptomsBtn.classList.add("on");
  symptomsBtn.classList.remove("off");
  subjectBtn.classList.add("off");
  subjectBtn.classList.remove("on");
  submenu.style.display = "none";
  clickMenu.style.display = "block";
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

// 증상 선택

// 모든 a 태그에 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
  // .click_menu와 .change 요소를 선택합니다.
  const click_menu = document.querySelector(".click_menu");
  const changeElement = document.querySelector(".change");

  // .click_menu 안의 모든 a 태그를 선택합니다.
  const links = click_menu.querySelectorAll(".hospital");

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

// 질문 창
function keyEvt() {
  let txt = document.getElementsByTagName("textarea"); //textArea태그를 불러오는 변수
  let msg = document.getElementsByTagName("span"); //span태그을 불러오는 변수
  let maxText = document.querySelector(".questionbox_text > p");
  let val = txt[0].value;

  //색을 변경해주는 제어문
  if (val.length <= 500 && val.length >= 0) {
    // 만약 입력 내용이 0~500라면,
    msg[0].style.color = "#000"; // span을 #000으로 한다.
  }

  //글자 제한, 글자 카운트
  if (val.length >= 500) {
    // 만약에 길이가 500이상이라면,
    alert("500글자까지만 가능합니다."); //경고
    txt[0].value = val.substr(0, 501); // 내용은, 너가 입력한 값의 500글자 까지만!
    msg[0].innerHTML = "500";
    maxText.style.color = "#000"; // 글자 수가 500까지 채워지면 p태그의 500수의 컬러를 #000으로 한다.
  } else {
    msg[0].innerHTML = val.length; //글자 길이가 실시간으로 올라간다.
  }
}
