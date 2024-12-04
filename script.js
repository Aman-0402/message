const gallery = document.getElementById('gallery');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Function to update gallery position
function updateGalleryPosition() {
    const containerWidth = document.querySelector('.gallery-container').offsetWidth;
    gallery.style.transform = `translateX(${-currentIndex * containerWidth}px)`;

    // Show/Hide buttons based on the current index
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex'; // Hide Prev button on the first image
    nextBtn.style.display = 'flex'; // Always show Next button
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % gallery.children.length; // Loop back to the first image
    updateGalleryPosition();
}

// Function to move to the previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1) % gallery.children.length;
        updateGalleryPosition();
    }
}

// Handle window resizing
window.addEventListener('resize', updateGalleryPosition);

// Initialize the gallery position
updateGalleryPosition();
