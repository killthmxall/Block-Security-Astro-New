let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

// Verificar si la animación ya fue reproducida
if (!localStorage.getItem('introPlayed')) {
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400);
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50);
                });
            }, 2000);

            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 2300);

            // Guardar en localStorage que la animación ya se ejecutó
            localStorage.setItem('introPlayed', 'true');
        });
    });
} else {
    // Ocultar el splash screen si ya se mostró antes
    intro.style.display = 'none';
}
