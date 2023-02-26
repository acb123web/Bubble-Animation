$(".button").bind("click", function(){
    $(this).addClass("animate");
    setTimeout(() => {
        $(this).removeClass("animate");
    }, 600);
})