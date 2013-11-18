# image-thumbnail

Image Thumbnail Module

## API

### thumbnailBuffer(image, options, callback)

Create image thumbnail buffer.
- image: image file.
- options: 
	- width: thumbnail width.
	- height: thumbnail height.
	- crop: crop method, "Center" or "North".
- callback: 
	- err: error.
	- buffer: thumbnail buffer.

### thumbnailFile(image, thumb, options, callback)

Create image thumbnail file.

### thumbnailStream(image, options, callback)

Create image thumbnail stream.

