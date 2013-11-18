var fs = require('fs');
var thumb = require('../thumbnail');

var imagePath = __dirname + '/sunflower.jpg';
var thumbPath = __dirname + '/out.jpg';

var options = {
	width: 400
};
thumb.thumbnailBuffer(imagePath, options, function(e, buffer) {
  if (e) {
    console.log(JSON.stringify(e, null, 2));
    return;
  }
  fs.writeFile(thumbPath, buffer, function(e) {
    if (e) {
      console.log(JSON.stringify(e, null, 2));
    } else {
      console.log('done');
    }
  });
});

