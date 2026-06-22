// =============================================================
// script.js - Olympic Gym
// Validación del formulario y mensaje de confirmación
// =============================================================

// PASO 1: Esperamos a que toda la página cargue antes de ejecutar el código.
// Así nos aseguramos de que el formulario ya existe en el HTML.
document.addEventListener("DOMContentLoaded", function () {

  // PASO 2: Buscamos el formulario por su ID y lo guardamos en una variable.
  const formulario = document.getElementById("formulario-contacto");

  // PASO 3: Buscamos el div donde vamos a mostrar el mensaje de confirmación.
  const mensajeDiv = document.getElementById("mensaje-confirmacion");

  // PASO 4: Escuchamos el evento "submit" (cuando el usuario hace clic en Enviar).
  formulario.addEventListener("submit", function (evento) {

    // PASO 5: Obtenemos el valor de cada campo (sin espacios en blanco extra).
    const nombre   = document.querySelector("input[name='nombre']").value.trim();
    const email    = document.querySelector("input[name='email']").value.trim();
    const consulta = document.querySelector("textarea[name='consulta']").value.trim();

    // PASO 6: Validamos que ningún campo esté vacío.
    if (nombre === "" || email === "" || consulta === "") {

      // Si falta algún campo, detenemos el envío con preventDefault()
      // y mostramos un mensaje de error en rojo.
      evento.preventDefault();

      mensajeDiv.innerHTML = `
        <div class="alert alert-danger fw-bold">
          ⚠️ Por favor completá todos los campos antes de enviar.
        </div>`;

      return; // Salimos de la función, no se envía nada.
    }

    // PASO 7: Validamos que el email tenga un formato válido usando una expresión regular.
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {

      evento.preventDefault(); // Detenemos el envío

      mensajeDiv.innerHTML = `
        <div class="alert alert-danger fw-bold">
          ⚠️ El formato del correo electrónico no es válido.
        </div>`;

      return;
    }

    // PASO 8: Si todo está bien, mostramos un mensaje de éxito antes de que
    // el formulario se envíe a FormSubmit.
    mensajeDiv.innerHTML = `
      <div class="alert alert-success fw-bold">
        ✅ ¡Gracias ${nombre}! Tu consulta fue enviada correctamente. 
        Nos contactaremos a la brevedad a ${email}.
      </div>`;

    // El formulario se envía normalmente a FormSubmit (no bloqueamos el submit).

  });

});
