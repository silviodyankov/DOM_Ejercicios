const boton1 = document.getElementById('boton1')

let suma = 0;

function agregar () {
    const inputValue = document.getElementById('input1').value
    const ListaUl = document.getElementById('lista')
    const elementoLista = document.createElement('li')
    elementoLista.innerText = 'El número es: ' + inputValue
    ListaUl.appendChild(elementoLista)

    suma += Number(inputValue)
}

boton1.addEventListener("click", agregar);


const boton2 = document.getElementById('boton2')

function sumatoria () {
    const titulo = document.getElementById('r1')
    r1.innerText = ('La sumatoria es : ' + suma)
    }

boton2.addEventListener("click", sumatoria);
