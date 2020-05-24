"use strict";

$(document).ready(function () {
  //點擊星星可切換實心及空心icon
  $(".topIcons a").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("addStar");
  }); //點擊回應按鈕開啟編輯畫面

  $(".replayBtn").click(function (event) {
    event.preventDefault();
    $(".edit").toggleClass("starEdit");
  }); //點擊編輯畫面的回覆鍵回到評論畫面

  $(".editReplyBtn").click(function (event) {
    event.preventDefault();
    $(".edit").removeClass("starEdit");
  }); //點擊取消按鈕的確定鍵回到評論畫面

  $(".sureEditBtn").click(function (event) {
    event.preventDefault();
    $("#cancelModal").css("display", "none");
    $(".edit").removeClass("starEdit");
    $(".modal-backdrop,.show").addClass("blocknone");
  }); //點擊 verified 下拉箭頭開啟下方按鈕

  $(".verifiedSelect").click(function () {
    $(".icon").toggleClass("iconRotate");
    $(this).parent().parent().parent().siblings(".infoBtn").toggleClass("infoBtnBlock");
  });
});
//# sourceMappingURL=all.js.map
