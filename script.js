document.getElementById('birthdayButton').addEventListener('click', function() {
    var imgContainer = document.getElementById('imageContainer');
    var video = document.getElementById('backgroundVideo');
    imgContainer.innerHTML = ''; // Clear previous images if any

    // List of images
    var images = ["assets/img1.jpeg", "assets/img2.jpeg", "assets/img3.jpeg", "assets/img4.jpeg", "assets/img5.jpeg"];

    // Hide the button after it's clicked
    video.style.display = 'block';
    this.style.display = 'none';
    
    setTimeout(() => {
        // Create an image element and set attributes for each image
        images.forEach(function(src) {
            var img = document.createElement('img');
            img.src = src;
            img.style.display = 'inline-block'; // Display images side by side
            imgContainer.appendChild(img);
        });
    }, 2000)
});