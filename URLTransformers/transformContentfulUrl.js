export const transformContentfulUrl = (originalUrl, format) => {

    if (originalUrl.includes('images.ctfassets.net')) {
        // Check if the provided format is valid
        const validFormats = ['jpg', 'png', 'webp', 'gif', 'avif'];
        if (!validFormats.includes(format)) {
            throw new Error(`Invalid image format: ${format}`);
        }

        // Parse the URL to extract existing query parameters
        const urlParts = originalUrl.split('?');
        let baseUrl = urlParts[0];
        let queryParams = '';

        if (urlParts.length > 1) {
            // If there are existing query parameters, preserve them and append the 'fm' parameter
            const existingParams = urlParts[1].split('&');
            const filteredParams = existingParams.filter(param => !param.startsWith('fm='));
            queryParams = filteredParams.join('&');
        }

        // Construct the formatted URL with the 'fm' query parameter
        const formattedUrl = `${baseUrl}?${queryParams}&fm=${format}`;
        return formattedUrl;
    }

    // If the original URL is not a Contentful image URL, return it as is
    return originalUrl;
}


