# Image Format Transformer

This Node.js module allows you to transform image URLs from various platforms by automatically selecting the best image format based on the browser's capabilities.

## Installation

You can install the module via npm:

```bash
npm install image-format-transformer
```
## Usage

```javascript
const { transformImageUrl } = require('image-format-transformer');

// Example : Transforming a Contentful image URL
const imageUrl = 'https://images.ctfassets.net/abc123/image.jpg';
const platformName = 'contentful'; // Replace with the platform name
const formattedUrl = transformImageUrl(imageUrl, platformName);
console.log('Formatted URL:', formattedUrl);

```

## Features
- Supports transforming image URLs from various platforms including Contentful, Cloudinary, more comng soon...
- Automatically selects the best image format based on the browser's capabilities.
- Preserves existing query parameters in the original URL.
  
## Supported Platforms
- Contentful
- Cloudinary
  more coming soon...

License
This project is licensed under the MIT License - see the LICENSE file for details.
