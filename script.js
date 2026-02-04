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

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const myForm = e.target;
    const formData = new FormData(myForm);
    
    // ESTA LÍNEA ES CLAVE: vincula el envío con el nombre del form en el panel
    formData.append('form-name', 'contacto-nexus'); 

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
        alert('¡Gracias! Nexus Habit ha recibido tu consulta.');
        myForm.reset();
    })
    .catch((error) => alert('Hubo un error: ' + error));
});