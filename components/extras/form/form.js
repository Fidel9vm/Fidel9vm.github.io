function validarFormulario() {
    var formulario = document.getElementById("formularioContacto");
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var motivo = document.getElementById("motivo").value;
    var prefContacto = document.querySelectorAll('input[name="prefContacto"]:checked').length;
    var imagen = document.getElementById("imagen").value;
    var errorNombre = document.getElementById("errorNombre");
    var errorEmail = document.getElementById("errorEmail");
    var errorMensaje = document.getElementById("errorMensaje");
    var errorMotivo = document.getElementById("errorMotivo");
    var errorPrefContacto = document.getElementById("errorPrefContacto");
    var errorImagen = document.getElementById("errorImagen");
  
    errorNombre.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMensaje.innerHTML = "";
    errorMotivo.innerHTML = "";
    errorPrefContacto.innerHTML = "";
    errorImagen.innerHTML = "";
  
    var valido = true;
  
    if (nombre === "") {
      errorNombre.innerHTML = "Por favor, ingresa tu nombre";
      valido = false;
    }
  
    if (email === "") {
      errorEmail.innerHTML = "Por favor, ingresa tu email";
      valido = false;
    }
  
    if (mensaje === "") {
      errorMensaje.innerHTML = "Por favor, ingresa tu mensaje";
      valido = false;
    }
  
    if (motivo === "") {
      errorMotivo.innerHTML = "Por favor, selecciona un motivo";
      valido = false;
    }
  
    if (prefContacto === 0) {
      errorPrefContacto.innerHTML = "Por favor, selecciona al menos una preferencia de contacto";
      valido = false;
    }
  
    if (imagen === "") {
      errorImagen.innerHTML = "Por favor, adjunta una imagen";
      valido = false;
    }
  
    return valido;
  }