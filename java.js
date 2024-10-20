// Alternar entre o tema claro e o tema escuro
const colorToggle = document.getElementById('colorToggle');

colorToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
