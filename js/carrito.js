
function newCardCarrito(){
    const productos = cargarProductosCarrito();
    let contenido = "";
    productos.forEach((producto)=>{
        contenido += `
                <div class="card mb-3" style="width: 95%; height: 195px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="images/${producto.imagen}.jpg" class="img-fluid rounded-start" style="height: 193px;" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio $ ${producto.precio}</p>
                <p class="card-text"> ${producto.descripcion}<small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>
        `
    });
    document.getElementById("cardsCarrito").innerHTML=contenido;
}

newCardCarrito();
actualizarBotonCarrito();