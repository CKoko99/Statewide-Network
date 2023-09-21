import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function ScreenshotTool(props) {
    const containerRef = useRef(null);

    function captureScreenshot() {
        const container = containerRef.current;
        const element = document.getElementById('your-element-id'); // Replace with the ID of the element you want to capture

        // Set the desired viewport width directly in the style attribute
        container.style.width = '1200px';
        container.style.margin = '0 auto'; // Center the content

        html2canvas(element).then((canvas) => {
            // Create a temporary link element
            const downloadLink = document.createElement('a');
            downloadLink.href = canvas.toDataURL('image/png');

            // Set the filename for the downloaded image
            downloadLink.download = 'screenshot.png';

            // Optionally, set the width and height of the image
            // For example, setting width to 800px and height to auto (maintaining aspect ratio)
            canvas.style.width = '800px';
            canvas.style.height = 'auto';

            // Append the canvas element to the link
            downloadLink.appendChild(canvas);

            // Append the link element to the DOM
            // linkRef.current.appendChild(downloadLink);

            // Simulate a click on the link to trigger the download
            downloadLink.click();

            // Reset the styles after capturing the screenshot
            container.style.width = 'auto'; // Reset width
            container.style.margin = ''; // Reset margin
        });
    };
    return (<>
        <div>
            <div ref={containerRef} id="your-element-id">
                {props.children}
            </div>
            <button onClick={captureScreenshot}>Capture Screenshot</button>
        </div>
    </>)
}