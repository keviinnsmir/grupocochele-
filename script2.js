// Efecto de desplazamiento suave al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.contenido section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollY;

            // Si la sección está en el campo visible de la pantalla
            if (scrollY + windowHeight - 100 > sectionTop) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
            }
        });
    });
});

// Efecto de animación al pasar el ratón sobre el pie de página
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', () => {
    footer.style.backgroundColor = '#00A859'; // Verde más brillante al pasar el ratón
});

footer.addEventListener('mouseout', () => {
    footer.style.backgroundColor = '#006F3F'; // Vuelve al color original
});
