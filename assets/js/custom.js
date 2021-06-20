// $("#Digit").text("01"); $("#Digit").css("background-color", "blue");
var slide_num = 0;
var num_array = ["01", "02", "03"];
var slide_color = ['#f54e42', "#4284f5", "#c842f5"]
var slide_f_txt = ["slide 1", "slide 2", "slide 3"];
var slide_s_txt = ["at Home", "at School", "at College"];
var slide_t_txt = ["Meet your comfort zone.!", "Make you feel awesome.!", "Explore you self more.!"];
var image_arr = ["assets/images/chair_1.png", "assets/images/chair_2.png", "assets/images/chair_3.png"]
var rotation_arr = ["rotate(0deg)", "rotate(45deg)", "rotate(90deg)", "rotate(135deg)", "rotate(180deg)"];
$(document).ready(function () {

    $("#Digit").text(num_array[slide_num]);
    $("#Digit").css("background-color", slide_color[slide_num]);
    $("#f_text").text(slide_f_txt[slide_num]);
    $("#s_text").text(slide_s_txt[slide_num]);
    $("#t_text").text(slide_t_txt[slide_num]);
    $("#img_chair").attr("src", image_arr[slide_num]);



});

function uArrow() {
    slide_num--;
    if (slide_num <= 0) {
        slide_num = 0;
    }
    $("#Digit").text(num_array[slide_num]);
    $("#Digit").css("background-color", slide_color[slide_num]);
    $("#f_text").text(slide_f_txt[slide_num]).fadeIn(400);;
    $("#s_text").text(slide_s_txt[slide_num]);
    $("#t_text").text(slide_t_txt[slide_num]);

    $("#img_chair").attr("src", image_arr[slide_num]);

    if (slide_num > 0) {
        $("#img_chair").animate({
            opacity: '10%',
        }, "fast");
        $("#img_chair").animate({
            opacity: '100%',
        }, "fast");
    }


    $("#circle").css({ 'transform': rotation_arr[slide_num] });
    console.log(rotation_arr[slide_num]);





}

function bArrow() {
    slide_num++;

    if (slide_num >= 2) {
        slide_num = 2
    }

    $("#Digit").text(num_array[slide_num]);
    $("#Digit").css("background-color", slide_color[slide_num]);
    $("#f_text").text(slide_f_txt[slide_num]);
    $("#s_text").text(slide_s_txt[slide_num]);
    $("#t_text").text(slide_t_txt[slide_num]);
    $("#img_chair").attr("src", image_arr[slide_num]);

    if (slide_num < 2) {
        $("#img_chair").animate({
            opacity: '10%',
        }, "fast");
        $("#img_chair").animate({
            opacity: '100%',
        }, "fast");
    }
    $("#circle").css({ 'transform': rotation_arr[slide_num] });
    console.log(rotation_arr[slide_num]);





}