$(document).ready(function()
{
  if ($.cookie("pop-card"))
  {
    $( document ).ready(function() {
      if ($.cookie("pop-card")) {
        $("#pop-card").remove();
      };
    });
  }
})

$("#close").bind("click", function () {
  $(".pop-card").fadeOut();
  $.cookie("pop-card", "true", { expires: 7 });
  setTimeout(() => {
    $(".pop-card").remove();
  }, 5000);
});
