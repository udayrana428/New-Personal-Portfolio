import React from 'react';

const FileDownloadButton = () => {
    const handleDownload = () => {
        // Assuming your file is in the public folder
        const filePath = '/uday-resume.pdf'; // Replace with your actual file path

        // Log file paths for debugging
        console.log('File Path:', filePath);
        console.log('Full File URL:', process.env.PUBLIC_URL + filePath);

        // Create a hidden anchor element
        const anchor = document.createElement('a');
        anchor.href = process.env.PUBLIC_URL + filePath;
        anchor.download = 'uday-resume.pdf'; // Replace with your desired file name

        // Append the anchor to the document and trigger a click
        document.body.appendChild(anchor);
        anchor.click();

        // Clean up the anchor element
        document.body.removeChild(anchor);
    };

    return (
        <button className="download-resume-btn" onClick={handleDownload}>
            Download File <i className="fa fa-download btns"></i>
        </button>
    );
};

export default FileDownloadButton;
 