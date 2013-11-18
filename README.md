# image-thumbnail

Image Thumbnail Module

## API

### thumbnailBuffer(image, options, callback)

Get image thumbnail buffer.
- image: image file.
- options: thumbnail options, 
	- width: thumbnail width.
	- height: thumbnail height.
	- crop: crop method, "Center" or "North".
- callback: callback function, 
	- err: error.
	- buffer: thumbnail buffer.

### thumbnailFile(image, thumb, options, callback)

Get image thumbnail file.
- image: image file.
- thumb: thumbnail file.
- options: thumbnail options, 
	- width: thumbnail width.
	- height: thumbnail height.
	- crop: crop method, "Center" or "North".
- callback: callback function, 
	- err: error.

### thumbnailStream(image, options, callback)

Get image thumbnail stream.
- image: image file.
- options: thumbnail options, 
	- width: thumbnail width.
	- height: thumbnail height.
	- crop: crop method, "Center" or "North".
- callback: callback function, 
	- err: error.
	- stream: thumbnail stream.

