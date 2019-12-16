const agregarBotones = document.querySelector('#agregarBotones');
const insertarBotones = document.querySelector('#insertarBotones');
const fondo = document.querySelector('#fondo');

(() => {

    agregarBotones.addEventListener('click', agregar);
    insertarBotones.addEventListener('click', delegar);

})();



(()=>{
const Guardarcolor = localStorage.getItem('Colorfondo');

if(Guardarcolor === null){
fondo.className = "bg-dark";
}else{
    fondo.className = Guardarcolor;
}

})();




function agregar() {
    insertarBotones.innerHTML = `  <button class="btn btn-success btn-lg">Verde</button>
    <button class="btn btn-danger btn-lg">Rojo</button>
    <button class=" btn btn-warning btn-lg">Amarillo</button>
    <button class="btn btn-primary btn-lg">Azul</button>
    <button class="btn btn-info btn-lg">Cielo</button>`;
}

function delegar(e) {
    e.preventDefault();
    const color = e.target.classList[1];



    switch (color) {
        case "btn-success": {
            fondo.className = "bg-success";
            localStorage.setItem('Colorfondo', "bg-success");
            break;

        }
        case "btn-danger": {
            fondo.className = "bg-danger";
            localStorage.setItem('Colorfondo', "bg-danger");
            break;

        }
        case "btn-warning": {
            fondo.className = "bg-warning";
            localStorage.setItem('Colorfondo', "bg-warning");
            break;

        }
        case "btn-primary": {
            fondo.className = "bg-primary";
            localStorage.setItem('Colorfondo', "bg-primary");
            break;

        }
        case "btn-info": {
            fondo.className = "bg-info";
            localStorage.setItem('Colorfondo', "bg-info");
            break;

        }
    }
}

