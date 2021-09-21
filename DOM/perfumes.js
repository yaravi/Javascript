var ventasJuana = {
    aqua: 0,
    emocion: 0,
    alegria: 0,
    frescura: 0
}

var ventasPedro = {
    aqua: 0,
    emocion: 0,
    alegria: 0,
    frescura: 0
}
let totalJuana = 0;
let totalPedro = 0;

ventasJuana.aqua = document.getElementById("ventasJuanaAqua").value;
ventasJuana.emocion = document.getElementById("ventasJuanaEmocion").value;
ventasJuana.alegria = document.getElementById("ventasJuanaAlegria").value;
ventasJuana.frescura = document.getElementById("ventasJuanaFrescura").value;

ventasPedro.aqua = document.getElementById("ventasPedroAqua").value;
ventasPedro.emocion = document.getElementById("ventasPedroEmocion").value;
ventasPedro.alegria = document.getElementById("ventasPedroAlegria").value;
ventasPedro.frescura = document.getElementById("ventasPedroFrescura").value;


function sumaJuana () {
    totalJuana = ventasJuana.aqua * 200 + ventasJuana.emocion * 180 + ventasJuana.alegria * 160 + ventasJuana.frescura * 150
    console.log("aqua: " + ventasJuana.aqua * 200)
    console.log("emocion: " + ventasJuana.emocion * 180)
    console.log("alegria: " + ventasJuana.alegria * 160)
    console.log("frescura: " + ventasJuana.frescura * 150)
    console.log("el total de ventas de juana fue: " + totalJuana)
    let alert = document.getElementById("text");
        alert.classList.add("alert-danger");
        alert.innerText="Total de ventas de Juana es: " + totalJuana;
}

function sumaPedro () {
    totalPedro = ventasPedro.aqua * 200 + ventasPedro.emocion * 180 + ventasPedro.alegria * 160 + ventasPedro.frescura * 150
    console.log("aqua: " + ventasPedro.aqua * 200)
    console.log("emocion: " + ventasPedro.emocion * 180)
    console.log("alegria: " + ventasPedro.alegria * 160)
    console.log("frescura: " + ventasPedro.frescura * 150)
    console.log("el total de ventas de Pedro fue: " + totalPedro)
    console.log(totalPedro)
    let alert = document.getElementById("text");
        alert.classList.add("alert-danger");
        alert.innerText="Total de ventas de Pedro es: " + totalPedro;
}

function ganar () {
    if (totalJuana > totalPedro) {
        console.log("Gano Juana")
    }
    else if (totalJuana < totalPedro) {
        console.log("Gano Pedro")
    }
    else {
        console.log("fue empate")
    }
}


let btnClick = document.getElementById("btn-click");
btnClick.addEventListener("click", function() {
    ventasJuana.aqua = document.getElementById("ventasJuanaAqua").value;
    ventasJuana.emocion = document.getElementById("ventasJuanaEmocion").value;
    ventasJuana.alegria = document.getElementById("ventasJuanaAlegria").value;
    ventasJuana.frescura = document.getElementById("ventasJuanaFrescura").value;
    ventasPedro.aqua = document.getElementById("ventasPedroAqua").value;
    ventasPedro.emocion = document.getElementById("ventasPedroEmocion").value;
    ventasPedro.alegria = document.getElementById("ventasPedroAlegria").value;
    ventasPedro.frescura = document.getElementById("ventasPedroFrescura").value;
});

let btnClick2 = document.getElementById("btn-click2");
btnClick2.addEventListener("click", function() { 
    sumaJuana ();
});

let btnClick3 = document.getElementById("btn-click3");
btnClick3.addEventListener("click", function() { 
    sumaPedro ();
});

let btnClick4 = document.getElementById("btn-click4");
btnClick4.addEventListener("click", function() { 
    ganar ();
});