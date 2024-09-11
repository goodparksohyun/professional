//과목/증상 선택 버튼
const subject_aake = document.getElementById("subject_aake");
subject_aake.onclick = showHideMenu;
//과목버튼
const subject_btn = document.getElementById("subject_btn");

subject_btn.onclick = subject;
//증상버튼
const symptoms_btn = document.getElementById("symptoms_btn");
symptoms_btn.onclick = symptoms;

//증상/과목 누르면 toggle하기
function showHideMenu() {
  const list_all = document.querySelector(".list_all");
  list_all.classList.toggle("on");
}

// 과목 버튼을 누르면 과목 서브메뉴 나타내기
function subject() {
  console.log(this);

  symptoms_btn.className = "off";
  this.className = "on";
  document.querySelector(".submenu_all > ul.submenu").style.display = "block";
  document.querySelector(".submenu_all > ul.click_menu").style.display = "none";
}
// 증상 버튼을 누르면 증상 서브메뉴 나타내기
function symptoms() {
  console.log(this);

  subject_btn.className = "off";
  this.className = "on";
  document.querySelector(".submenu_all > ul.click_menu").style.display =
    "block";
  document.querySelector(".submenu_all > ul.submenu").style.display = "none";
}

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

// // 과목 선택 메뉴
// function toggleActiveBtn() {
//   let submenu = document.querySelector(".sel2 .submenu");
//   submenu.classList.toggle("active");
// }
// // subject_aake안에 증상 / 과목 선택를 클릭하면 서브메뉴들의 박스가 사라집니다.
// document
//   .querySelector(".sel2 .subject_aake")
//   .addEventListener("click", toggleActiveBtn);

// document.addEventListener("DOMContentLoaded", function () {
//   // .submenu와 .change 요소를 선택합니다.
//   const submenu = document.querySelector(".submenu");
//   const changeElement = document.querySelector(".change");

//   // .submenu 안의 모든 a 태그를 선택합니다.
//   const links = submenu.querySelectorAll(".hospital");

//   // 각 a 태그에 클릭 이벤트 리스너를 추가합니다.
//   links.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       // 클릭한 a 태그의 텍스트를 가져옵니다.
//       const text = this.childNodes[1].textContent;
//       console.log(text);

//       // .change 요소의 텍스트를 클릭한 a 태그의 텍스트로 변경합니다.
//       changeElement.textContent = text;

//       // .change 요소의 스타일을 굵게(bold)로 설정합니다.
//       changeElement.style.fontWeight = "bold";
//       if (submenu.classList("active")) toggleActiveBtn();
//     });
//   });
// });

// // 증상 선택 메뉴
// function toggleActiveBtn2() {
//   let click_menu = document.querySelector(".sel2 .click_menu");
//   click_menu.classList.toggle("active");
// }
// document.addEventListener("DOMContentLoaded", function () {
//   // .click_menu와 .change 요소를 선택합니다.
//   const click_menu = document.querySelector(".click_menu");
//   const changeElement = document.querySelector(".change");

//   // .click_menu 안의 모든 a 태그를 선택합니다.
//   const links = click_menu.querySelectorAll(".hospital");

//   // 각 a 태그에 클릭 이벤트 리스너를 추가합니다.
//   links.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       // 클릭한 a 태그의 텍스트를 가져옵니다.
//       const text = this.childNodes[1].textContent;
//       console.log(text);

//       // .change 요소의 텍스트를 클릭한 a 태그의 텍스트로 변경합니다.
//       changeElement.textContent = text;

//       // .change 요소의 스타일을 굵게(bold)로 설정합니다.
//       changeElement.style.fontWeight = "bold";
//       if (click_menu.classList("active")) toggleActiveBtn2();
//     });
//   });
// });
