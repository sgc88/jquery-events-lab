console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", function handleClick(event){
		var call=("You clicked" +$(this).text()+ Date.now());
		$('ul').append('<li>'+call+'</li>')
	});

})




