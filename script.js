document.getElementById('consult-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('response').textContent = 'Thanks for reaching out! I’ll get back to you soon.';
  });

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
