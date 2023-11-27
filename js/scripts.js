var Emote = false;

$("#happy").hide();
$("#sad").hide();
$("#angry").hide();
$("#bored").hide();

$("#hello").on("click", function () {
    $("#neutral").hide();
    $("#happy").show();
    $("#sad").hide();
    $("#angry").hide();
    $("#bored").hide();
});

$("#ignore").on("click", function () {
    $("#neutral").hide();
    $("#happy").hide();
    $("#sad").show();
    $("#angry").hide();
    $("#bored").hide();
});

$("#insult").on("click", function () {
    $("#neutral").hide();
    $("#happy").hide();
    $("#sad").hide();
    $("#angry").show();
    $("#bored").hide();
});

$("#econ").on("click", function () {
    $("#neutral").hide();
    $("#happy").hide();
    $("#sad").hide();
    $("#angry").hide();
    $("#bored").show();
});

$("#reset").on("click", function () {
    $("#neutral").show();
    $("#happy").hide();
    $("#sad").hide();
    $("#angry").hide();
    $("#bored").hide();
});