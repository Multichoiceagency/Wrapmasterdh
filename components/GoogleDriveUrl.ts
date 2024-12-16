export function getGoogleDriveImageUrl(url: string) {
    if (!url.includes('drive.google.com')) return url;
    const fileId = url.split('/d/')[1]?.split('/view')[0];
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : url;
  }  