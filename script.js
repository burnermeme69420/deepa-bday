document.getElementById('birthdayButton').addEventListener('click', function() {
    var imgContainer = document.getElementById('imageContainer');
    var video = document.getElementById('backgroundVideo');
    var audio = document.getElementById('birthdaySong');
    imgContainer.innerHTML = ''; // Clear previous images if any

    // List of images
    var images = ["assets/img1.jpeg", "assets/img2.jpeg", "assets/img3.jpeg", "assets/img4.jpeg", "assets/img5.jpeg"];

    // Fade out the button
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
        // Show the video
        video.style.display = 'block';
        // Play the audio
        audio.play();
    }, 600); // Adjust time to match the fade-out duration
    
    setTimeout(() => {
        images.forEach(function(src) {
            var img = document.createElement('img');
            img.src = src;
            img.style.display = 'inline-block'; // Display images side by side
            imgContainer.appendChild(img);
            img.classList.add('fade-in'); // Add fade-in class to trigger the animation
        });
    }, 2000);
    
});