const form1 = document.querySelector('.form');
const contenedor = document.querySelector('.direccion');
const botonAgre = document.querySelector('.botonclick');

form1.addEventListener('submit', function(event) {
    event.preventDefault();
    
    form1.reset();
});

botonAgre.addEventListener('click', () => {
    const calle = form1.calle.value;
    const numero = form1.num.value;
    const colonia = form1.col.value;
    const cp = form1.cod.value;
    const ciudad = form1.ciudad.value;
    const pais = form1.pais.value;

    agregarItemsCar(calle, numero, colonia, cp, ciudad, pais);
});

function agregarItemsCar(calle, numero, colonia, cp, ciudad, pais) {
    const agregaDiv = document.createElement('div');
    agregaDiv.classList.add('insert')
    const content = `<i class="fas fa-map-marker-alt"></i>
                     <p>${calle} ${numero}, Col. ${colonia}, C.P ${cp}, ${ciudad}, ${pais}.</p>
                     <button class="elim">Eliminar</button>
                     <input type="checkbox" checked>`;

    agregaDiv.innerHTML = content;
    contenedor.append(agregaDiv);

    agregaDiv.querySelector('.elim').addEventListener('click', eliminaProd);
}

function eliminaProd(event) {
    const botonClick = event.target;
    botonClick.closest('div').remove();
}

// function habilita() {
//     const calle = form1.calle.value;
//     const numero = form1.num.value;
//     const colonia = form1.col.value;
//     const cp = form1.cod.value;
//     const ciudad = form1.ciudad.value;
//     const pais = form1.pais.value;

//     if (calle == '' && numero == '' && colonia == '' && cp == '' && ciudad == '' && pais == '') {
//         return 0;
//     } else {
//         const botonHab = document.querySelector('.botonclick');
//         botonHab.classList.remove("disabled");
//     }
// } 