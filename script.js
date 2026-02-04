// Manejo del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "¡Gracias! Hemos recibido tu mensaje. Un asesor te contactará en breve.",
  );
  this.reset();
});

// Función simple para los botones de modelos
function alertarInteres(modelo) {
  console.log("Interés en: " + modelo);
  document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);
  // Esto le dice a Netlify: "Guardame esto en el cajón de contacto-nexus"
  formData.append("form-name", "contacto-nexus");

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      alert("¡Recibido! Nos comunicaremos con vos a la brevedad.");
      myForm.reset();
    })
    .catch((error) => alert("Error de conexión: " + error));
});
