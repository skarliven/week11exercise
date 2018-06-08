// / .show()
// // .hide()
// when i click the button i want the image to hide
$("#hide").click(function () {
    $("img").hide();
})
// when i click the button i want the image to show
$("#show").click(function () {
    $("img").show();
})
  // when I click the tggle button i wan the image to hide or show
$("#toggleImg").click(function () {
    $("img").toggle();
})
$("#fadeToggle").click(function(){
        $("img").fadeToggle();
        $("img").fadeToggle("slow");
        $("img").fadeToggle(3000);
 })
//
$("img").hover(function(){
    $(this).attr("src", "img/sentada.png");
}, function(){
    $(this).attr("src", "img/mermaidfinal.jpg");
});
$("#list").click(function() {
    $("ul").append("<li>New stuff</li");
})
$("#background").click(function(){
    $("body").css("background-color", "magenta");
})
$("h1").hover(function() {
        $(this).css({fade: "purple","color": "white", "text-transform": "lowercase"});
    },
function() {
        $(this).css({"background-color": "","color": "", "text-transform": " "});
    }
);

