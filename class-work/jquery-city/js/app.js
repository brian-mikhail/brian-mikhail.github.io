// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/*
$('#first').click(changeToFirst);
$('#second').click(changeToSecond);
$('#third').click(changeToThird);
$('#fourth').click(changeToFourth);
*/

$('.thumb').click(changeBigImage);

function changeBigImage () {
	var imageUrl = $(this).attr('src');
	$('#bigimage').attr('src', imageUrl);
}


/*
function changeToFirst() {
	$('#bigimage').attr('src', 'img/1.jpg');

}

function changeToSecond() {
	$('#bigimage').attr('src', 'img/2.jpg');
}

function changeToThird () {
	$('#bigimage').attr('src', 'img/3.jpg');
}

function changeToFourth () {
	$('#bigimage').attr('src', 'img/4.jpg');
}

*/

//function swapPuppyForKitten() {
 // $('img').attr('src','https://i.pinimg.com/736x/85/b4/cf/85b4cf112cf40c191ca5676b726fc410--cute-fluffy-kittens-cute-baby-cats.jpg')