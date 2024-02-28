// Función para cargar el contador desde el almacenamiento local
function cargarContador() {
    let contador = localStorage.getItem('contador');
    if (contador === null) {
        contador = 0;
    } else {
        contador = parseInt(contador);
    }
    return contador;
}

// Función para guardar el contador en el almacenamiento local
function guardarContador(contador) {
    localStorage.setItem('contador', contador);
}

// Función para actualizar el valor del contador en la interfaz
function actualizarContador(valor) {
    document.getElementById('contador').textContent = valor;
}

// Función principal que se ejecuta al cargar la página
window.onload = function() {
    let contador = cargarContador();
    actualizarContador(contador);

    // Manejador de eventos para el botón de incremento
    document.getElementById('botonIncrementar').addEventListener('click', function() {
        contador++;
        actualizarContador(contador);
        guardarContador(contador);
    });
};
