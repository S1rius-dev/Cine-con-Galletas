let carrito = 0;

function agregar() {
  carrito++;
  document.getElementById("cartBtn").innerText = `Carrito (${carrito})`;
}

document.getElementById("year").innerText = new Date().getFullYear();
