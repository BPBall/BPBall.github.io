 font-family: 'Kaushan Script', cursive; 
 font-family: 'Pinyon Script', cursive; 
 font-family: 'Petit Formal Script', cursive; 
 font-family: 'Aguafina Script', cursive; 
font-family: 'Rouge Script', cursive; 
 font-family: 'Roboto', sans-serif;

$(function () {
	$('a.embed').on('click', function () {
		$(this.parentNode).children('.embed-pane').toggle();
		return false;
	});
	$('.embed-input').on("click", function () {
    $(this).select();
	});
});
