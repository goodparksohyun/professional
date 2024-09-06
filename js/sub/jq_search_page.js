"use strict";

// 검색창에 글 작성 중 x를 클릭하면 작성중이였던 글 지워짐
function deleteWord() {
  let search = document.getElementById("searchword").value;

  if (search) {
    document.getElementById("searchword").value = "";
  }
}

// 검색창에 검색어를 작성하면 최근 검색했던 키워드가 나타나고
// x버튼을 누르면 삭제됨
function appendKeyword() {
  let search = document.getElementById("searchword").value;
  const my_searchtermbox = document.querySelector(".my_searchtermbox");
  const searchterm_undertext = document.querySelector(".searchterm_undertext");

  if (search) {
    let cloneDiv = my_searchtermbox.cloneNode(true);

    let pTag = cloneDiv.firstElementChild;
    let closeButton = cloneDiv.lastElementChild;
    pTag.innerText = search;
    closeButton.addEventListener("click", deleteKeyword);

    searchterm_undertext.insertBefore(cloneDiv, my_searchtermbox);
  }
}

function deleteKeyword() {
  this.parentElement.style.display = "none";
}

// 전체삭제 버튼 클릭 시 최근 검색키워드 모두삭제하기
let all_delet = document.querySelector(".all_delet"); // 이벤트 발생시킬 요소 선택
// 이벤트를 발생시킬 전체삭제(.all_delet)클릭 시
all_delet.addEventListener("click", function () {
  // .searchterm_undertext검색 키워드를 빈문자로 만들어라
  const searchterm_undertext = document.querySelector(".searchterm_undertext");
  searchterm_undertext.innerHTML = "";
});
