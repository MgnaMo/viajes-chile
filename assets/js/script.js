/* evento envío correo */
$(document).ready(function(){
    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado a tu correo :)")
    })

        $(".destacados").dblclick(function () {
            $(this).hide(2500);
    });
});


/* tooltip navbar */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))