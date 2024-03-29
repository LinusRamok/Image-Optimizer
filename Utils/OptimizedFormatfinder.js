import { detect } from 'detect-browser';

export const selectImageFormat = () => {
    const browserInfo = detect();

    // Check if browserInfo is null
    if (!browserInfo) {
        // Handle the case where browserInfo is null
        console.warn('Browser information could not be detected.');
        // Return a default image format or handle it based on your application's requirements
        return 'jpeg';
    }

    const browserEngine = browserInfo.name
    const browserVersion = parseFloat(browserInfo.version);

    const avifSupport = {
        'chrome': { minVersion: 85 },
        'firefox': { minVersion: 93 },
        'safari': { minVersion: 16.4 },
        'edge': { minVersion: 121 },
        'opera': { minVersion: 71 }
    };

    const webpSupport = {
        'chrome': { minVersion: 32 },
        'firefox': { minVersion: 65 },
        'safari': { minVersion: 16 },
        'edge': { minVersion: 18 },
        'opera': { minVersion: 19 }
    };

    if (avifSupport[browserEngine] && browserVersion >= avifSupport[browserEngine].minVersion) {
        return 'avif';
    }

    if (webpSupport[browserEngine] && browserVersion >= webpSupport[browserEngine].minVersion) {
        return 'webp';
    }

    return 'jpeg';
}
