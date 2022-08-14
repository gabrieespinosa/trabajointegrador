let producto = document.querySelector(".producto");
let precio = document.querySelector(".precio");
let agregar = document.querySelector(".agregar_btn");
let total = document.querySelector(".total_btn");
let lista = document.querySelector(".lista");
let texto = document.querySelector("#texto");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

const agregarCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));
  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  producto.value = "";
  precio.value = "";
};

const valorTotal = () => {
  suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  if (suma >= 2500) {
    texto?.innerHTML =
      "tuvo un descuento 10 %. El precio total es:" + suma * 0.9;
  } else {
    texto?.innerHTML = "el precio total es" + suma;
  }
};
agregar.addEventListener("click", agregarCarrito);
total.addEventListener("click", valorTotal);
