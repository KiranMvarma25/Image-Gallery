# Image Gallery

Showcasing the IMages in a Grid view and Copy button to copy image on your clipboard.

1. Fetching the data from an API with useEffect Hook and storing it in an Array with useState.

2. Create copyToClipboard function where enables users to copy image in to the clipboard directly.
    
    - Converting image into a Blob.

    - Creating a canvas to process the image.

    - Drawing the image on the canvas.

    - Converting the canvas image to a PNG format.

    - Using the Clipboard API to copy the PNG image.

    - an alert confirming success message after successfully copying the image on to the clipboard.

3. Browsers are not supporting direct copy of Image on to the clipboard.