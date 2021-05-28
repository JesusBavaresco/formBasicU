var inputs = document.getElementsByClassName('formularioInput');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var correo = document.getElementById('correo');
var vcorreo = document.getElementById('vcorreo');
var tel = document.getElementById('tel');
var fnacimiento = document.getElementById('fnacimiento');
var direccion = document.getElementById('direccion');
var ciudad = document.getElementById('ciudad');
var cpostal = document.getElementById('cpostal');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');

error.style.color = 'red';





function enviarFormulario(){
    

    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
         mensajesError.push('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido');
    }
    if(correo.value === null || correo.value === ''){
        mensajesError.push('El correo no puede estar vacio')
    }
    if(vcorreo.value != correo.value ){
        mensajesError.push('El correo de verificacion debe coincidir con el correo');
    }

    if(tel.value === null || tel.value === ''|| tel.value.length < 8){
        mensajesError.push('El numero de tlf debe tener al menos 8 caracteres');
    }

    if(direccion.value === null || direccion.value === ''){
        mensajesError.push('la direccion no puede estar vacio');
    }
    if(ciudad.value === null || ciudad.value === ''){
        mensajesError.push('la ciudad no puede estar vacia');
    }
    if(cpostal.value === null || cpostal.value === '' || cpostal.value.length < 5){
        mensajesError.push('el codigo postal debe tener al menos 5 caracteres numericos');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('El mensaje no puede estar vacio');
    }

    error.innerHTML = mensajesError.join(', ')


    return false;
}