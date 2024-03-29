export const transformCloudinaryUrl = (url, format) => {
    if (!url.includes("cloudinary.com") && !url.includes("/image/")) {
        console.log("Not a valid Cloudinary URL");
      return url; // Not a Cloudinary URL
    }
  

    // Split the URL into parts
    const parts = url.split("/");

    const imageIndex = findImageIndex(parts);

    // Preserve "stitch-fix" or similar cloud name
    const cloudName = parts[imageIndex - 1];

    let newUrl = parts.slice(0, imageIndex - 1).join("/"); // Rebuild base URL

    if (parts[imageIndex].startsWith("image")) {
        // Existing "image" section
        newUrl += `/${cloudName}/${parts[imageIndex]}/${parts[imageIndex + 1]}`;

    } else {
        // No existing "image" section
        newUrl += `/${cloudName}/image/upload`;

    }

    const transformationIndex = parts.findIndex(part => hasLetterAndUnderscore(part));
    if (transformationIndex !== -1) {
        // Existing transformation found
        const existingTransformations = parts[transformationIndex].split(",");
        const newTransformations = [];
        let formatFound = false;

        for (const transformation of existingTransformations) {
            if (transformation.startsWith("f_")) {
                formatFound = true;
                newTransformations.push(`f_${format}`);
            } else {
                newTransformations.push(transformation);
            }
        }

        if (!formatFound) {
            newTransformations.push(`f_${format}`);
        }
        newUrl += `/${newTransformations.join(",")}`;
    } else {
        // No existing transformation
        newUrl += `/f_${format}`;
        newUrl += "/" + parts.slice(imageIndex + 2).join("/");
        return newUrl;
    }
    // Add remaining parts after the image section
    newUrl += "/" + parts.slice(imageIndex + 3).join("/");

    return newUrl;
}

function findImageIndex(parts) {
    return parts.findIndex(part => part.includes("image"));
}
function hasLetterAndUnderscore(word) {
    const regex = /^[a-zA-Z]_([^.]*)$/; // Regular expression for letter followed by underscore (any characters after)
    return regex.test(word);
}