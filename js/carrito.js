
function newCardCarrito(){
    const productos = cargarProductosCarrito();
    let contenido = "";
   
    if(productos == ""){
        contenido += `<div class="alert alert-danger text-center" role="alert">
        No hay productos en el carrito!
      </div>`;
    } else {
    productos.forEach((producto)=>{
        contenido += `
                <div class="card mb-3" style="width: 95%; height: 195px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="images/${producto.imagen}.jpg" class="img-fluid rounded-start" style="height: 193px; margin-left: 20%;" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio por unidad: $ ${producto.precio}</p>
                <p class="card-text"> ${producto.descripcion}</p>
                <a href="#" class="btn btn" onclick="eliminarProducto(${producto.Id})">Quitar (-)</a>
                ${producto.cantidad}
                <a href="#" class="btn btn" onclick="agregar(${producto.Id})">Agregar (+)</a>
                <a href="#" class="btn btn" onclick="eliminar(${producto.Id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                </a>
                Precio por cantidad seleccionada: ${producto.precio*producto.cantidad}
            </div>
            </div>
        </div>
        </div>
        `
    });
}
    document.getElementById("cardsCarrito").innerHTML=contenido;
}

newCardCarrito();
actualizarBotonCarrito();