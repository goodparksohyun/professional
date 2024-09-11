$(function () {
  // rome(inline_cal, { time: false });

  rome(inline_cal, { time: false, inputFormat: "MMMM DD, YYYY" }).on(
    "data",
    function (value) {
      result.value = value;
    }
  );

  // 년도 한글로 바꾸기
  //   let rd_month_label = $(".rd-month-label");
  //   rd_month_label.eq(0).text("2024년 8월");

  //요일 한글로 바꾸기
  let rd_days_row = $(".rd-days-row > th");
  rd_days_row.eq(0).text("일").css({ color: "red" });
  rd_days_row.eq(1).text("월");
  rd_days_row.eq(2).text("화");
  rd_days_row.eq(3).text("수");
  rd_days_row.eq(4).text("목");
  rd_days_row.eq(5).text("금");
  rd_days_row.eq(6).text("토");

  let waterHeight = 0; // 물 높이
  let feedstuffHeight = 0; // 사료 높이
  let waterAmount = 0; // ml 값
  let feedstuffAmount = 0; // g 값

  $(".record_box").on("click", function () {
    //내가 클릭한 .record_box의 인덱스 번호가 0이면
    if ($(this).index() == 0) {
      // 증감 연산자
      waterHeight++;
      //   waterHeight가 0보다 크면 20px씩 증가
      if (waterHeight > 0) {
        $(".water_bg").css({ bottom: "+=20px" });
        waterAmount += 60; // 60ml씩 증가
        $(".up_num").text(waterAmount); // ml 값 업데이트
      }
      if (waterHeight > 3) {
        waterHeight = 0;
        $(".water_bg").css({ bottom: "-90px" });
        waterAmount = 0; // ml 값 리셋
        $(".up_num").text(waterAmount); // ml 값 업데이트
      }
    }
    // 내가 클릭한 .record_box의 인덱스 번호가 1이면
    if ($(this).index() == 1) {
      // 증감 연산자
      feedstuffHeight++;
      //   feedstuffHeight가 0보다 크면 20px씩 증가
      if (feedstuffHeight > 0) {
        $(".feedstuff_bg").css({ bottom: "+=20px" });
        feedstuffAmount += 54; // 54g씩 증가
        $(".up_num2").text(feedstuffAmount); // g 값 업데이트
      }
      if (feedstuffHeight > 3) {
        feedstuffHeight = 0;
        $(".feedstuff_bg").css({ bottom: "-65px" });
        feedstuffAmount = 0; // g 값 리셋
        $(".up_num2").text(feedstuffAmount); // g 값 업데이트
      }
    }
  });
});
