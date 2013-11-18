var fs = require('fs');
var thumb = require('../thumbnail');

var imagePath = __dirname + '/sunflower.jpg';
var thumbPath = __dirname + '/out.jpg';

var options = {
  width: 	300,
  height: 300,
  crop:		'North'
};
thumb.thumbnailStream(imagePath, options, function(e, stream) {
  if (e) {
    console.log(JSON.stringify(e, null, 2));
  } else {
    stream.pipe(fs.createWriteStream(thumbPath));
    console.log('done');
  }
});

