// Function to change the big image and update styles based on the clicked small image
const changeImg = (event) => {
    // Get the small image element that was clicked based on its ID (event)
    let small_IMG = document.getElementById(event);
    
    // Get the big image element that will be updated
    let big_IMG = document.getElementById('image_biggest');
    
    // Get the first <figcaption> element to update its text content
    let figurateText = document.getElementsByTagName('figcaption')[0];

    // Switch statement to handle different small image IDs
    switch (small_IMG.id) {
        case 'img_1':
            // Update the big image source to the pink flowers image
            big_IMG.setAttribute('src', 'flowers-pink-large.jpg');
            // Update the caption text
            figurateText.textContent = 'Image of pink flowers';
            // Remove grayscale filter from the clicked small image
            small_IMG.style.filter = 'grayscale(0%)';
            // Set the border color of the big image to pink
            document.querySelector("#image_biggest").style.border = '5px solid pink';
            // Apply grayscale filter to the other small images
            document.getElementById('img_2').style.filter = 'grayscale(100%)';
            document.getElementById('img_3').style.filter = 'grayscale(100%)';
            document.getElementById('img_4').style.filter = 'grayscale(100%)';
            document.getElementById('img_5').style.filter = 'grayscale(100%)';
            break;

        case 'img_2':
            // Update the big image source to the purple flowers image
            big_IMG.setAttribute('src', 'flowers-purple-large.jpg');
            // Update the caption text
            figurateText.textContent = 'Image of purple flowers';
            // Remove grayscale filter from the clicked small image
            small_IMG.style.filter = 'grayscale(0%)';
            // Set the border color of the big image to purple
            document.querySelector("#image_biggest").style.border = '5px solid purple';
            // Apply grayscale filter to the other small images
            document.getElementById('img_1').style.filter = 'grayscale(100%)';
            document.getElementById('img_3').style.filter = 'grayscale(100%)';
            document.getElementById('img_4').style.filter = 'grayscale(100%)';
            document.getElementById('img_5').style.filter = 'grayscale(100%)';
            break;

        case 'img_3':
            // Update the big image source to the red flowers image
            big_IMG.setAttribute('src', 'flowers-red-large.jpg');
            // Update the caption text
            figurateText.textContent = 'Image of red flowers';
            // Remove grayscale filter from the clicked small image
            small_IMG.style.filter = 'grayscale(0%)';
            // Set the border color of the big image to red
            document.querySelector("#image_biggest").style.border = '5px solid red';
            // Apply grayscale filter to the other small images
            document.getElementById('img_1').style.filter = 'grayscale(100%)';
            document.getElementById('img_2').style.filter = 'grayscale(100%)';
            document.getElementById('img_4').style.filter = 'grayscale(100%)';
            document.getElementById('img_5').style.filter = 'grayscale(100%)';
            break;

        case 'img_4':
            // Update the big image source to the white flowers image
            big_IMG.setAttribute('src', 'flowers-white-large.jpg');
            // Update the caption text
            figurateText.textContent = 'Image of white flowers';
            // Remove grayscale filter from the clicked small image
            small_IMG.style.filter = 'grayscale(0%)';
            // Set the border color of the big image to white
            document.querySelector("#image_biggest").style.border = '5px solid white';
            // Apply grayscale filter to the other small images
            document.getElementById('img_1').style.filter = 'grayscale(100%)';
            document.getElementById('img_2').style.filter = 'grayscale(100%)';
            document.getElementById('img_3').style.filter = 'grayscale(100%)';
            document.getElementById('img_5').style.filter = 'grayscale(100%)';
            break;

        case 'img_5':
            // Update the big image source to the yellow flowers image
            big_IMG.setAttribute('src', 'flowers-yellow-large.jpg');
            // Update the caption text
            figurateText.textContent = 'Image of yellow flowers';
            // Remove grayscale filter from the clicked small image
            small_IMG.style.filter = 'grayscale(0%)';
            // Set the border color of the big image to yellow
            document.querySelector("#image_biggest").style.border = '5px solid yellow';
            // Apply grayscale filter to the other small images
            document.getElementById('img_1').style.filter = 'grayscale(100%)';
            document.getElementById('img_2').style.filter = 'grayscale(100%)';
            document.getElementById('img_3').style.filter = 'grayscale(100%)';
            document.getElementById('img_4').style.filter = 'grayscale(100%)';
            break;
    }
}
