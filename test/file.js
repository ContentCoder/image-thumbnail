var thumb = require('../thumbnail');

var imagePath = __dirname + '/sunflower.jpg';
var thumbPath = __dirname + '/out.jpg';

var options = {
	height: 	256, 
	width:		256,
	crop:		'Center'
};
thumb.thumbnailFile(imagePath, thumbPath, options, function(e) {
	if (e) 
		console.log(JSON.stringify(e, null, 2));
	else 
		console.log('done');
});

