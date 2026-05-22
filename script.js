// Seleciona os elementos do menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Abre/Fecha o menu mobile ao clicar no botão
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu automaticamente quando o usuário clica em algum link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});