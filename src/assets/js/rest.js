async function guardar() {
    try{
        let nombre = document.getElementById("nombre");
        let email = document.getElementById("emailContacto");
        let formulario = document.getElementById("contact-form");
        let errores = {};

        // Expresión regular para validar que el campo Nombre solo contenga letras y espacios
        expresionNombre = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;

        // Validación del campo Nombre
        if ( nombre.value === "") {
            errores.nombre = "El campo Nombre no puede ser nulo";
            nombre.style.background = "hsla(0, 0%, 0%, 0.2)";
        } else if (!expresionNombre.test(nombre.value)){
            errores.nombre = "El campo Nombre solo puede contener letras y espacios";
            nombre.style.background = "hsla(0, 0%, 0%, 0.2)";
        } else {
            nombre.style.background = "transparent";
        }

        // Validación del campo E-mail
        if (email.value === "") {
            errores.email = "El campo E-mail no puede ser nulo";
            email.style.background = "hsla(0, 0%, 0%, 0.2)";
        } else if (!expresionEmail.test(email.value)){
            errores.email = "E-mail inválido";
            email.style.background = "hsla(0, 0%, 0%, 0.2)";
        } else {
            email.style.background = "transparent";
        }

        // Validación del campo Mensaje
        if (mensaje.value === "") {
            errores.mensaje = "El campo Mensaje no puede ser nulo";
            mensaje.style.background = "hsla(0, 0%, 0%, 0.2)";
        } else if (mensaje.value.length > 150){
            errores.mensaje = "La longitud máxima del mensaje admitida es de 150 caracteres";
            mensaje.style.background = "hsla(0, 0%, 0%, 0.2)";
        } else {
            mensaje.style.background = "transparent";
        }
        
        var promise = new Promise((resolve, reject) => {
            if ( !("nombre" in errores) && !("email" in errores) && !("mensaje" in errores) ) {
                alert("Todo OK");
                var obj = {
                    nombre: nombre.value,
                    email: email.value,
                    mensaje: mensaje.value
                };
                $.ajax({
                    type: 'POST',
                    data: JSON.stringify(obj),
                    cache: false,
                    contentType: 'application/json',
                    datatype: "json",
                    url: '/api/contact',
                    success: function(data){
                        if (data['fail']) {
                            alert(data['mensaje']);
                            reject ("Error");
                        } else {
                            //window.location.assign("/nosotros.html");
                            console.log(data);
                            //bd.push(obj);
                            formulario.reset();
                            par.textContent = "0/150";
                            resolve("Hecho!");
                        }
                    }
                });
                /* 
                formulario.reset();
                par.textContent = "0/150";
                setTimeout(() => {
                    bd.push(obj);
                    resolve("Hecho!");
                }, 5000); */
            } else {
                // Si no le concateno con "\n" y hago que tome los saltos de línea del template string,en el alert me sale el mensaje tomando también las tabulaciones de la identaicón
                reject(`${"nombre" in errores ? (errores.nombre + "\n") : "" }` + 
                `${"email" in errores ? (errores.email + "\n") : "" }`  +
                `${"mensaje" in errores ? (errores.mensaje) : "" }`);
            }
            
        });
        const res = await promise;        

        if (res == "Hecho!" ){
            /* for(var singleKey in bd){
                console.log(bd[singleKey]);
            } */
            alert("Guardado");
        } else {
            throw res;
        }

    } catch(e) {
        alert(e);
    }
}



async function leer() {
    try{
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let parrafo = document.createElement("pre");
                parrafo.textContent = JSON.stringify(bd, null, 4);
                document.getElementById("bd").appendChild(parrafo); 
                resolve("Hecho!");
            }, 3000)
        });
        const res = await promise;
        if (res != "Hecho!"){
            throw "Error al leer datos"
        }
    } catch(e) {
        alert(e);
    }
}