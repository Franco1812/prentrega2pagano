
function Producto(nombre, precio, cantidadDisponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadDisponible = cantidadDisponible;
  }
  
  
  const stock = [
    new Producto("Coca cola", 750, 100),
    new Producto("Monster energy",800, 50),
    new Producto("Sprite", 650, 30),
    new Producto("Monster Valentino Rossi", 700, 75),
    new Producto("Monster manzana", 700, 75),
    new Producto("Monster anana", 700, 75),
    new Producto("Monster mango", 700, 75),
  ];
  
  
  function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad disponible:"));
  
    if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
      const nuevoProducto = new Producto(nombre, precio, cantidad);
      stock.push(nuevoProducto);
      alert("Producto agregado correctamente.");
    } else {
      alert("Por favor, ingrese valores válidos.");
    }
  }
  
  
  function buscarProducto() {
    const nombreBuscado = prompt("Ingrese el nombre del producto a buscar:");
    const productoEncontrado = stock.find(producto => producto.nombre === nombreBuscado);
  
    if (productoEncontrado) {
      alert(`Producto encontrado:\nNombre: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nCantidad: ${productoEncontrado.cantidadDisponible}`);
    } else {
      alert("Producto no encontrado.");
    }
  }
  
  
  function listarProductos() {
    let lista = "Productos en stock:\n";
    stock.forEach(producto => {
      lista += `Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidadDisponible}\n`;
    });
    alert(lista);
  }
  
 
  agregarProducto();
  buscarProducto();
  listarProductos();
  