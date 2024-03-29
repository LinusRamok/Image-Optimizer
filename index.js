import {transformContentfulUrl} from './URLTransformers/transformContentfulUrl.js'
import {transformCloudinaryUrl} from './URLTransformers/transformCloudinaryUrl.js';
import {selectImageFormat} from './Utils/OptimizedFormatfinder.js'

function transformImageUrl(imageUrl, platform) {

    const format = selectImageFormat()
    console.log("image format", format)

    switch (platform.toLowerCase()) {
        case 'contentful':
            return transformContentfulUrl(imageUrl, format);
        case 'cloudinary':
            return transformCloudinaryUrl(imageUrl, format);
        // Add cases for other supported platforms...
        default:
            throw new Error(`Unsupported platform: ${platform}`);
    }

}
export { transformImageUrl };