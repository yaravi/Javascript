var edad = prompt("Que edad tienes?");

// Validaciones

// Primera validación de edad mayor a 30 años
if (edad >= 30) {
    console.log("puedes vacunarte")
}
else if (edad == 29) {
    var edad29 = prompt("cumples 30 este año?")
        if (edad29 == "si") {
            console.log("puedes vacunarte")
        }
            else if (edad29 == "no") {
                console.log("NNO puedes vacunarte")
            }
}

// Segunda Validación sobre sexo y embarazo
else if  (edad <= 28) {
    var _sexo = prompt("cual es tu sexo? M para Masculuno, F para femenino").toLowerCase();
        if (_sexo == "f") {
            var embarazo = prompt("estas embarazada?");
                if (embarazo == "si") {
                    console.log("puedes vacunarte");
                    }
// Tercera validación de Mujer y estado fronterizo
                    else {
                        var residencia = prompt("Vives en un estado fronterizo con USA?").toLowerCase();
                        if (residencia == "si")
                        console.log("SII puedes vacunarte")
                        else {
                            console.log("NNNO puedes vacunarte")
                        }
                    }
        }
        
// Cuarta validación sobre estado fronterizo con sexo Masculino       
        else if (_sexo == "m") {
            var residencia = prompt("Vives en un estado fronterizo con USA?").toLowerCase();
            if (residencia == "si")
            console.log("SII puedes vacunarte")
            else {
                console.log("NNNO puedes vacunarte")
        }
}
}