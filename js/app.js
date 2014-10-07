

/*
//hide spoiler
$(".menu-informal").hide();
//add a button with manipulation method (append)
$(".menu-informal").append("<button>Menu informal</button>");
//WHen button pressed, that is an event.
$("button").click(function(){
//show spoiler by selecting it.
$(".menu-informal").show();
//get rid of button via DOM removal

});


//hide spoiler
$(".clientes-2").hide();
//add a button with manipulation method (append)
$(".clientes-2").append("<button>Nos Eligen</button>");
//WHen button pressed, that is an event.
$("button").click(function(){
//show spoiler next to the button clicked.
$(this).prev().show();
//get rid of button via DOM removal
$(this).remove();
});


//capture the click event on a link to an image
//get te value of an attr for the first element
//in a set of matched elements or set one or more attr
//for every matched element
/*$("imageGallery a").click(function(event){
	event.preventDefault();
	var href =  $(this).attr("href");
	console.log(href);
});*/

