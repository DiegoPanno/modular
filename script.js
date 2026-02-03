// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias! Hemos recibido tu mensaje. Un asesor te contactará en breve.');
    this.reset();
});

// Función simple para los botones de modelos
function alertarInteres(modelo) {
    console.log("Interés en: " + modelo);
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
}