document.getElementById('birthdayButton').addEventListener('click', function() {
    var imgContainer = document.getElementById('imageContainer');
    imgContainer.innerHTML = ''; // Clear previous images if any

    // List of images
    var images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg"];
    // Create an image element and set attributes for each image
    images.forEach(function(src) {
        var img = document.createElement('img');
        img.src = src;
        img.style.display = 'inline-block'; // Display images side by side
        imgContainer.appendChild(img);
    });

    // Change background after clicking the button
    document.body.style.backgroundImage = "url('assets/bg.webp')";
});