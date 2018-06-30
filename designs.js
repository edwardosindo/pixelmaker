var height, width,color;
$("#sizePicker").submit(function(event){
	event.preventDefault();
	height = $("#inputHeight").val();
	width = $("#inputWeight")	.val();
	makeGrid(height,width);
	//console.log('Height:' +height+ 'and Width:' +width);	

})


function makeGrid(x,y){
	$('tr').remove();
	//code goes here!
	for(var i=1; i<=x; i++){
		$('#pixelcanvas').append('<tr id=table' +i+'></tr>');
		for(var j=1; j<=y; j++){
			$('#table' +i).append('<td></td>');
		}
	}
	//add color to cell
	$('td').click(function addColor(){
		color = $('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		}else{
			$(this).attr('style','background-color:'+color);
		}
	})
}