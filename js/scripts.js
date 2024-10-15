document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío real del formulario
    document.getElementById("mensajeEnviado").classList.remove("d-none");
    this.reset();  // Limpiar el formulario
});
