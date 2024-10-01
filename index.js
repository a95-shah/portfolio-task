const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check if the user has previously selected a theme
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  body.classList.add('dark-mode');
}