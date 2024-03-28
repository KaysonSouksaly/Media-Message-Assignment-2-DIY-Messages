let slide = 1;
let autoSlideInterval;
$(document).ready(function(){
    autoSlideInterval = setInterval(next, 10000)
});
$(window).on("click", function(){
    if($("#tab-1").is(":checked")){
        $("#content-item-1").addClass("visible");
        $("#content-item-2, #content-item-3, #content-item-4").removeClass("visible");
        slide = 1;
    } else if($("#tab-2").is(":checked")){
        $("#content-item-2").addClass("visible");
        $("#content-item-1, #content-item-3, #content-item-4").removeClass("visible");
        slide = 2;
    } else if($("#tab-3").is(":checked")){
        $("#content-item-3").addClass("visible");
        $("#content-item-1, #content-item-2, #content-item-4").removeClass("visible");
        slide = 3;
    } else if($("#tab-4").is(":checked")){
        $("#content-item-4").addClass("visible");
        $("#content-item-1, #content-item-2, #content-item-3").removeClass("visible");
        slide = 4;
    }
});

function back(){
    slide--;
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(next, 10000);
    switch (slide){
        case 1:
            $("#content-item-1").addClass("visible");
            $("#content-item-2, #content-item-3, #content-item-4").removeClass("visible");
            $("#tab-1").prop("checked", true);
            $("#tab-2, #tab-3, #tab-4").prop("checked", false);
            break;
        case 2:
            $("#content-item-2").addClass("visible");
            $("#content-item-1, #content-item-3, #content-item-4").removeClass("visible");
            $("#tab-2").prop("checked", true);
            $("#tab-1, #tab-3, #tab-4").prop("checked", false);
            break;
        case 3:
            $("#content-item-3").addClass("visible");
            $("#content-item-1, #content-item-2, #content-item-4").removeClass("visible");
            $("#tab-3").prop("checked", true);
            $("#tab-1, #tab-2, #tab-4").prop("checked", false);
            break;
        case 4:
            $("#content-item-4").addClass("visible");
            $("#content-item-1, #content-item-2, #content-item-3").removeClass("visible");
            $("#tab-4").prop("checked", true);
            $("#tab-1, #tab-2, #tab-3").prop("checked", false);
            break;
        default:
            $("#content-item-4").addClass("visible");
            $("#content-item-1, #content-item-2, #content-item-3").removeClass("visible");
            $("#tab-4").prop("checked", true);
            $("#tab-1, #tab-2, #tab-3").prop("checked", false);
            break;
    }
}

function next(){
    slide++;
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(next, 10000)
    if (slide > 4) {
        slide = 1;
    }
    switch (slide){
        case 1:
            $("#content-item-1").addClass("visible");
            $("#content-item-2, #content-item-3, #content-item-4").removeClass("visible");
            $("#tab-1").prop("checked", true);
            $("#tab-2, #tab-3, #tab-4").prop("checked", false);
            break;
        case 2:
            $("#content-item-2").addClass("visible");
            $("#content-item-1, #content-item-3, #content-item-4").removeClass("visible");
            $("#tab-2").prop("checked", true);
            $("#tab-1, #tab-3, #tab-4").prop("checked", false);
            break;
        case 3:
            $("#content-item-3").addClass("visible");
            $("#content-item-1, #content-item-2, #content-item-4").removeClass("visible");
            $("#tab-3").prop("checked", true);
            $("#tab-1, #tab-2, #tab-4").prop("checked", false);
            break;
        case 4:
            $("#content-item-4").addClass("visible");
            $("#content-item-1, #content-item-2, #content-item-3").removeClass("visible");
            $("#tab-4").prop("checked", true);
            $("#tab-1, #tab-2, #tab-3").prop("checked", false);
            break;
        default:
            $("#content-item-1").addClass("visible");
            $("#content-item-2, #content-item-3, #content-item-4").removeClass("visible");
            $("#tab-1").prop("checked", true);
            $("#tab-2, #tab-3, #tab-4").prop("checked", false);
            break;
    }
}

function notExist(){
    alert("SORRY! I did not add that page yet!")
}