export const downloadCV = async () => {
  try {
    // You would typically store your CV in the public directory
    const response = await fetch('/CV.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Professional_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading CV:', error);
    // You might want to show a user-friendly error message here
  }
};
