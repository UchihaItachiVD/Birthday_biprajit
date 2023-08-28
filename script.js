// JavaScript for opening the gift video and showing the messages
document.getElementById('giftButton').addEventListener('click', function() {
    var giftVideo = document.getElementById('giftVideo');
    var messages = document.getElementById('message');
    
    // Play the video
    var video = document.getElementById('videoElement');
    video.play();
    
    // Play the audio
    var audio = new Audio('song.mp3'); // Use the correct audio file name
    audio.play();
    
    // Display the gift video
    giftVideo.style.display = 'block';
    
    // Display the messages
    messages.style.display = 'block';
});
