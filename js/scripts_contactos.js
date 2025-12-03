// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar el formulario
    const formulario = document.querySelector('form');
    
    // Manejar el envío del formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío por defecto
        
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar que todos los campos estén llenos
        if (nombre === '' || correo === '' || mensaje === '') {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        // Validar formato de email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            mostrarMensaje('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }
        
        // Si todo está bien, simular envío
        enviarFormulario(nombre, correo, mensaje);
    });
    
    // Función para mostrar mensajes al usuario
    function mostrarMensaje(texto, tipo) {
        // Remover mensaje anterior si existe
        const mensajeAnterior = document.querySelector('.mensaje-usuario');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }
        
        // Crear nuevo mensaje
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = `mensaje-usuario ${tipo}`;
        mensajeDiv.textContent = texto;
        
        // Insertar antes del formulario
        formulario.parentNode.insertBefore(mensajeDiv, formulario);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            mensajeDiv.remove();
        }, 5000);
    }
    
    // Función para simular el envío del formulario
    function enviarFormulario(nombre, correo, mensaje) {
        // Simular envío (aquí iría tu código para enviar por email/API)
        mostrarMensaje(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Te responderemos pronto a ${correo}.`, 'exito');
        
        // Limpiar formulario
        formulario.reset();
        
        // Opcional: mostrar datos enviados en consola para desarrollo
        console.log('Datos enviados:', { nombre, correo, mensaje });
    }
});
