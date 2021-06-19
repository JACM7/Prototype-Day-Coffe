const botonCar = document.querySelectorAll('.boton1');
botonCar.forEach((agregarCar) => {
    agregarCar.addEventListener('click', clickCar);
});

const contenedor = document.querySelector('.tabla');

function clickCar(event) {
    const boton = event.target;
    const item = boton.closest('.itemBox');

    const titulo = item.querySelector('.item-text').textContent;
    const precio = item.querySelector('.pesos').textContent;

    agregarItemsCar(titulo, precio);
} 

function agregarItemsCar(titulo, precio) {
    const agregaTr = document.createElement('tr');
    const contenido = ` <td>${titulo}</td>
                        <td>${precio}</td>
                        <td>1</td>
                        <td>x</td>`;

    agregaTr.innerHTML = contenido;
    contenedor.append(agregaTr);
}