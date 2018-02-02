function changePicture() {
	var thisSrc = $(this).data('photo');
	$('#bigimage').attr('src', thisSrc);		
}

function changePictureBack() {
	$('#bigimage').hover(changePictureBack);
}

$('.button').hover(changePicture, changePictureBack);

$('#second').hover(changePicture);
$('#third').hover(changePicture);
