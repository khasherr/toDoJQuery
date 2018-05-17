//checking off to do with strike-through / crossing it off or on 
// can be done with if / else statemnts but toggleClass replaces it 
// with single line.
$("ul").on("click", "li", function(){ 
$(this).toggleClass("completed"); 
});


//selected span, clicked to remove the entire li by fade and remove  
$("ul").on("click", "span", function(e) { 
$(this).parent().fadeOut(400, function(){
	$(this).remove();

});
e.stopPropagation();
});

 $("input[type='text']").keypress(function(e){ 
 
 //when you press enter
 if(event.which === 13){ 

 //grabs to do list from input
 var todoText = $(this).val();
 $(this).val(" "); 
 //created new li and added to ul
 $("ul").append("<li> <span> <i class= 'fa fa-minus-square'> </i> </span>" + todoText + "  </li>");
}


 });

 $(".fa-plus").click(function(e) { 
 $("input[type='text']").fadeToggle()
});