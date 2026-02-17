document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura de datos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const consulta = document.getElementById('mensaje').value;
    
    // Tu número de destino
    const nroWA = "5492235370799";

    // Construcción del mensaje formateado con el nuevo nombre
    const texto = `*NUEVA CONSULTA MODUBIT*%0A` +
                  `*Cliente:* ${nombre}%0A` +
                  `*Email:* ${email}%0A` +
                  `*WhatsApp:* ${tel}%0A` +
                  `*Mensaje:* ${consulta}`;

    // Apertura de WhatsApp
    window.open(`https://wa.me/${nroWA}?text=${texto}`, '_blank');
    
    this.reset();
});

// Función para botones de modelos actualizada
function irAContacto(modelo) {
    // El texto ahora invita a consultar por el modelo específico de Modubit
    document.getElementById("mensaje").value = `¡Hola! Me interesa recibir información sobre el modelo: ${modelo}.`;
    document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
}