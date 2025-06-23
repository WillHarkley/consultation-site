document.getElementById('consult-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('response').textContent = 'Thanks for reaching out! I’ll get back to you soon.';
  });

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

const img = document.createElement('img');
img.src = 'images/your-photo.jpg'; // Replace with your actual image path
img.alt = 'Photo of Will';
img.style.width = '40%'; // Or set a specific width like '200px'
img.style.borderRadius = '12px';

document.getElementById('image-container').appendChild(img);
