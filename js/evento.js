document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('inscripcion-form');
  const successBox = document.getElementById('inscripcion-success');
  const eventoInput = document.getElementById('evento');

  function clearErrors() {
    form.querySelectorAll('.field-error-text').forEach(el => el.remove());
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  }

  function showFieldError(input, message) {
    input.classList.add('input-error');
    const err = document.createElement('div');
    err.className = 'field-error-text';
    err.textContent = message;
    input.parentNode.appendChild(err);
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      const nombre = form.querySelector('#nombre');
      const correo = form.querySelector('#correo');
      const whatsapp = form.querySelector('#whatsapp');
      const comentarios = form.querySelector('#comentarios');
      const evento = eventoInput;

      let valid = true;

      if (!nombre.value.trim()) {
        showFieldError(nombre, 'Por favor escribe tu nombre.');
        valid = false;
      }

      if (!correo.value.trim() || !validarEmail(correo.value.trim())) {
        showFieldError(correo, 'Introduce un correo válido.');
        valid = false;
      }

      if (!evento.value.trim()) {
        showFieldError(evento, 'Selecciona o escribe el evento al que deseas inscribirte.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      // Aquí puedes añadir la lógica real de envío (fetch a API, Google Forms, etc.)
      // Por ahora mostramos un mensaje de éxito y limpiamos el formulario.
      if (successBox) {
        successBox.innerHTML = `¡Inscripción recibida! <strong>${nombre.value}</strong>, te hemos registrado para: <em>${evento.value}</em>. Te contactaremos a <strong>${correo.value}</strong>${whatsapp && whatsapp.value?` o por WhatsApp al ${whatsapp.value}`:''}.`;
        successBox.classList.remove('hidden');
        successBox.scrollIntoView({behavior: 'smooth', block: 'center'});
      }

      // Simular envío: limpiar formulario excepto el evento (opcional)
      form.reset();

      // Conservar el evento en el input para referencia
      if (evento) evento.value = '';
    });

    // Prellenado desde botones de inscripción (si existen)
    document.querySelectorAll('.cards-container .btn').forEach(btn => {
      btn.addEventListener('click', function (ev) {
        const text = this.getAttribute('data-evento') || this.textContent || '';
        // Si el enlace ya tiene onclick inline que pone el valor, esto lo sobreescribe antes del salto
        if (eventoInput) {
          // Limpiar cualquier hash navigation default hasta que se ponga el valor
          ev.preventDefault();
          // Determinar valor más limpio
          let value = '';
          const data = this.getAttribute('data-evento');
          if (data) value = data;
          else {
            // intentar obtener el texto del título dentro de la tarjeta
            const card = this.closest('.card');
            const h3 = card ? card.querySelector('h3') : null;
            value = h3 ? h3.textContent.trim() : '';
          }
          eventoInput.value = value;
          // Navegar al formulario suavemente
          const target = document.getElementById('inscripcion');
          if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
          // foco en nombre
          const nombre = document.getElementById('nombre');
          if (nombre) nombre.focus();
        }
      });
    });
  }
});
