export function getMediaUrl(url: unknown): string {
    if (typeof url !== 'string' || !url) {
      return ''; // Return an empty string if url is not a string or is empty
    }
  
    // Handle Google Drive URL
    const fileId = url.match(/[-\w]{25,}/);
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
  }
  
  