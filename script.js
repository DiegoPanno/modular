document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura de datos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const consulta = document.getElementById('mensaje').value;
    
    // Tu número de destino
    const nroWA = "5492235370799";

    // Construcción del mensaje formateado
    const texto = `*NUEVA CONSULTA BIT=HOME*%0A` +
                  `*Cliente:* ${nombre}%0A` +
                  `*Email:* ${email}%0A` +
                  `*WhatsApp:* ${tel}%0A` +
                  `*Mensaje:* ${consulta}`;

    // Apertura de WhatsApp
    window.open(`https://wa.me/${nroWA}?text=${texto}`, '_blank');
    
    this.reset();
});

// Función para botones de modelos
function irAContacto(modelo) {
    document.getElementById("mensaje").value = `Hola! Me interesa el modelo: ${modelo}.`;
    document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
}