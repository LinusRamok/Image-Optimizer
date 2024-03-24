# Image Format Transformer

This Node.js module allows you to transform image URLs from various platforms by specifying a different image format.

## Installation

You can install the module via npm:
npm install image-format-transformer

## Usage

```javascript
const { transformImageUrl } = require('image-format-transformer');

// Example 1: Transforming a Contentful image URL to PNG format
const contentfulUrl = 'https://images.ctfassets.net/abc123/image.jpg';
const contentfulFormattedUrl = transformImageUrl(contentfulUrl, 'png');
console.log('Contentful Formatted URL:', contentfulFormattedUrl);

// Example 2: Transforming a Cloudinary image URL to WebP format
const cloudinaryUrl = 'https://res.cloudinary.com/demo/image/upload/sample.jpg';
const cloudinaryFormattedUrl = transformImageUrl(cloudinaryUrl, 'webp');
console.log('Cloudinary Formatted URL:', cloudinaryFormattedUrl);
```

## Features
- Supports transforming image URLs from various platforms including Contentful, Cloudinary, etc.
- Automatically selects the best image format based on the browser's capabilities.
- Preserves existing query parameters in the original URL.
  
## Supported Platforms
- Contentful
- Cloudinary
  more coming soon...

License
This project is licensed under the MIT License - see the LICENSE file for details.
