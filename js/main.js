//change color text in menu HOME
$(document).ready(function(){
    $("#menu").click(function(){
        $(this).css("color","red");
    });
});

//add green border for image  
$(document).ready(function(){
    $("#bird1").click(function(){
        $(this).css("border", "solid 10px green");
    });
});
//increase image
$(document).ready(function(){
    $("#bird2").click(function(){
        $(this).css({ 'height': '200px', 'width': '200px' });
    });
});