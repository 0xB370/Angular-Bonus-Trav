/***************************************************************************************************/
/**********************************************NEWS LETTER******************************************/
/***************************************************************************************************/

expresionEmailFooter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com)+$/;

window.onload = function() {
    const emailNews = document.getElementById("emailNewsLetter");
    const submit = document.getElementById("submitNewsLetter");
    const formularioNews = document.getElementById("newsForm");

    // Ante cada cambio en el campo E-mail, verifico si tengo que habilitar el botón Enviar
    emailNews.addEventListener("input", function(e) {
        if ((emailNews.value === "") || (!expresionEmailFooter.test(emailNews.value))) {
            submit.style.background = "#bd7027";
            submit.style.cursor = "unset";
            submit.disabled = true;
        } else {
            submit.style.background = "#f99639";
            submit.style.cursor = "pointer";
            submit.disabled = false;
        }
    });



}




// Función a la que se llama al hacer click en Enviar
function validarNewsLetter() {
    const submit = document.getElementById("submitNewsLetter");
    const formularioNews = document.getElementById("newsForm");

    let par = document.createElement("p");
    par.textContent = "¡Suscripción a NewsLetter exitosa!";
    par.style.color = "white";
    par.style.fontSize = "15px";
    par.style.marginTop = "-5%";

    submit.after(par);

    setTimeout(function() {
        par.remove();
        formularioNews.reset();
        submit.style.background = "#bd7027";
        submit.style.cursor = "unset";
        submit.disabled = true;
    }, 5000);

    return false;
}

function myFunc() {
    const emailNews = document.getElementById("emailNewsLetter");
    const submit = document.getElementById("submitNewsLetter");
    const formularioNews = document.getElementById("newsForm");

    // Ante cada cambio en el campo E-mail, verifico si tengo que habilitar el botón Enviar
    emailNews.addEventListener("input", function(e) {
        if ((emailNews.value === "") || (!expresionEmailFooter.test(emailNews.value))) {
            submit.style.background = "#bd7027";
            submit.style.cursor = "unset";
            submit.disabled = true;
        } else {
            submit.style.background = "#f99639";
            submit.style.cursor = "pointer";
            submit.disabled = false;
        }
    });
}