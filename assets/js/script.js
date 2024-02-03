/* evento envío correo */
$(document).ready(function(){
    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado a tu correo :)")
    })
});


/* tooltip navbar */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))