// Espera a que el documento cargue
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos por su ID
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        // 2. Agregar el "escuchador de evento" al botón
        menuToggle.addEventListener('click', () => {
            // 3. Alternar la clase 'active' en los enlaces para mostrar/ocultar
            navLinks.classList.toggle('active');
        });
    }
});