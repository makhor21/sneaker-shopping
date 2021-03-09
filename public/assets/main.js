$(document).ready(function () {
  $("#searchBtn").click(function (e) {
    e.preventDefault();
    let input = $("#searchShoe").val();
    console.log(input);
    $.ajax({
      type: "get",
      url: "/home",
      data: { input },
      success: function (response) {
        console.log("successfull");
      },
    });
  });
});
