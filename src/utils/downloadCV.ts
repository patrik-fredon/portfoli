'use client';

export const downloadCV = async () => {
  try {
    const response = await fetch('/CV.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = 'Portfolio_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading CV:', error);
    alert('Failed to download CV. Please try again later.');
  }
};

// Function to handle the download with analytics tracking
export const handleCVDownload = () => {
  // You can add analytics tracking here
  // Example: trackEvent('CV_Download', { source: 'hero_section' });
  
  downloadCV();
};

// Function to check if CV file exists
export const checkCVAvailability = async (): Promise<boolean> => {
  try {
    const response = await fetch('/CV.pdf', { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking CV availability:', error);
    return false;
  }
};
