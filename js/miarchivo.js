
let monto=0;
let opcion =1;
let a=0;
let b=0; 
let cuota;
let nombre;
let precio;




let contenedorNav = "";
contenedorNav += `<nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <ul>
            <a class="navbar-brand" href="index.html"><img src="../images/logosofinieder.jpg" id="logo" alt="logo de Sofi Nieder"/></a>
            <a class="navbar-brand" href="index.html">Sofi Nieder Deco</a>
        </ul>
        <a href="./carrito.html" id="iconoCarrito" class="bg-dark">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Sofi Nieder Deco</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tituloProductos">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" id="btnEmpleado" >Ingresar como empleado</a>
                    </li>
            </div>
        </div>
    </div>
</nav>`;
document.getElementById("navBar").innerHTML=contenedorNav;

let contenedorCarrousel = "";
contenedorCarrousel += `
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="./images/1.jpg" class="d-block fCarrousel" alt="imagen del producto 1"/>
        </div>
        <div class="carousel-item">
            <img src="./images/2.jpg" class="d-block fCarrousel" alt="imagen del producto 2"/>
        </div>
        <div class="carousel-item">
            <img src="./images/3.jpg" class="d-block fCarrousel " alt="imagen del producto 3"/>
        </div>
        <div class="carousel-item">
            <img src="./images/4.jpg" class="d-block fCarrousel" alt="imagen del producto 4"/>
        </div>
        <div class="carousel-item">
            <img src="./images/5.jpg" class="d-block fCarrousel" alt="imagen del producto 5"/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
`;
document.getElementById("carrousel").innerHTML=contenedorCarrousel;

let productos = [
    {"Id": 1, "nombre": "Mesa Ratona ovalada", "precio": 4500, "imagen": 1, "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis eum odio eius fuga in nesciunt, voluptas quisquam quia dolorum velit ipsum assumenda earum consequuntur vero unde cum commodi alias.", "cantidad": 0},
    {"Id": 2, "nombre": "Sillon Gervasoni", "precio": 7000, "imagen": 2, "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis eum odio eius fuga in nesciunt, voluptas quisquam quia dolorum velit ipsum assumenda earum consequuntur vero unde cum commodi alias.", "cantidad": 0},
    {"Id": 3, "nombre": "Almohadones de respaldo 40x40", "precio": 1000, "imagen": 3, "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis eum odio eius fuga in nesciunt, voluptas quisquam quia dolorum velit ipsum assumenda earum consequuntur vero unde cum commodi alias.", "cantidad": 0},
    {"Id": 4, "nombre": "Perchero Escalera", "precio": 2500, "imagen": 4, "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis eum odio eius fuga in nesciunt, voluptas quisquam quia dolorum velit ipsum assumenda earum consequuntur vero unde cum commodi alias.", "cantidad": 0},
    {"Id": 5, "nombre": "Espejo redondo", "precio": 7000, "imagen": 5, "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis eum odio eius fuga in nesciunt, voluptas quisquam quia dolorum velit ipsum assumenda earum consequuntur vero unde cum commodi alias.", "cantidad": 0}
    ];

 new Promise((respuesta, rejected)=>{
    let url = 'www.productos.com.ar'
    if (url === 'www.productos.com.ar'){   
    setTimeout(()=>{
        respuesta(
        fetch('js/data.json')
        .then( (response) => response.json())
        .then( (data) => {
            data.forEach((producto) => {
            newCard(producto);
        })
        }))
        }, 2000);
    } else{
        rejected("400 not found")
    }
})

function newCard(producto){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="card col-6 col-sm-3 border-0" style="width: 18rem;">
            <img src="images/${producto.imagen}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${producto.nombre}</h5>
                <p class="card-text text-center">Precio $ ${producto.precio}</p>
                <p class="card-text text-center">${producto.descripcion}</p>

                <button class="Agregar" onClick="agregarProducto(${producto.Id})"> AGREGAR AL CARRITO </button>
            </div>
        </div>`
    document.getElementById("Cards").appendChild(contenedor);
}

let ProductosCarrito =[];

function guardarProductosCarrito(productos){
    localStorage.setItem("productosCarrito", JSON.stringify(productos));
}

function cargarProductosCarrito(){
    return JSON.parse(localStorage.getItem("productosCarrito")) || [];
}

function buscarProducto(Id){
    return productos.find(item=> item.Id === Id)
}

function actualizarBotonCarrito(){
    const productosCarrito = cargarProductosCarrito();
    let cantidad=0;
    for(const prod of productosCarrito){
        cantidad += prod.cantidad;
    }
    let contenido = `
    <button type="button" class="btn btn-primary position-relative" id="canastaa">
        <svg id="canasta" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  class="bi bi-basket2" viewBox="0 0 16 16">
            <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
        </svg>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${cantidad}
        </span>
    </button>
    `;
    document.getElementById("iconoCarrito").innerHTML=contenido;
}

function agregarProducto(Id){
    Toastify({
        text: "Producto agregado al carrito",
        className: "info",
        gravity: "bottom",
        style: {
        background: "linear-gradient( to right, rgb(42, 44, 44), rgb(42, 44, 44))",
        }
    }).showToast();
    const productosCarrito = cargarProductosCarrito();
    let pos = productosCarrito.findIndex(item => item.Id === Id);
    if(pos > -1){
        productosCarrito[pos].cantidad += 1;
    } else{
        const producto = buscarProducto(Id);
        producto.cantidad = 1;
        productosCarrito.push(producto);
    }
    guardarProductosCarrito(productosCarrito);
    actualizarBotonCarrito();
    newCardCarrito()
}

function agregar(Id){
    const productosCarrito = cargarProductosCarrito();
    let pos = productosCarrito.findIndex(item => item.Id === Id);
    if(pos > -1){
        productosCarrito[pos].cantidad += 1;
    } else{
        const producto = buscarProducto(Id);
        producto.cantidad = 1;
        productosCarrito.push(producto);
    }
    guardarProductosCarrito(productosCarrito);
    actualizarBotonCarrito();
    newCardCarrito()
    compraTotal()
}

function eliminarProducto(Id){

    const productosCarrito = cargarProductosCarrito();
    let pos = productosCarrito.findIndex(item => item.Id === Id);
    productosCarrito[pos].cantidad -=1;
    if (productosCarrito[pos].cantidad == 0){
        productosCarrito.splice(pos, 1)
    }
    guardarProductosCarrito(productosCarrito);
    actualizarBotonCarrito();
    newCardCarrito()
    compraTotal()
}

function eliminar(Id){
    const productosCarrito = cargarProductosCarrito();
    let pos = productosCarrito.findIndex(item => item.Id === Id);
        productosCarrito.splice(pos, 1)
    guardarProductosCarrito(productosCarrito);
    actualizarBotonCarrito();
    newCardCarrito()
    compraTotal()
}

function eliminarTodos(){

    localStorage.removeItem("productosCarrito");
    newCardCarrito();
    actualizarBotonCarrito();
    compraTotal();
}


function total(){
    const productosCarrito = cargarProductosCarrito();
    return productosCarrito.reduce((acumulador, item)=> acumulador + item.cantidad, 0)
}


actualizarBotonCarrito();



function montoKm(km){
    let totalFlete=km*120;
    let contenidoFlete="";
    contenidoFlete += `<div>
    El moto total por flete es de $ ${totalFlete} </div>`;
  document.getElementById("fletee").innerHTML=contenidoFlete;
}

function flete(){
    let contenidoFlete="";
    contenidoFlete += `
                    <div class="card mb-3" style="width: 95%; height: 195px;">
            <div class="row g-0">
                <div class="col-md-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="140px" height="140px" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Flete</h5>
                    <p class="card-text">Precio por kilometro: $ 120 </p>
                    Ingrese los km a transportar <input id="cantKM" onkeyup="montoKm(this.value)" type="number">
                    <p class="card-text" id="fletee"></p>
                    <a href="#" class="btn btn" onclick="confirmarFlete()">Confirmar Flete (+)</a>
                </div>
                </div>
            </div>
            </div>
            `
        document.getElementById("cardFlete").innerHTML=contenidoFlete;
}

/*
function respuestaChango(){
    actualizarCarrito();
    opcion=1;
    while(opcion!=0){
        opcion = parseInt(prompt("Desea contratar flete para el envio: \n 1- si.  2- no."));
        switch (opcion) {
        case 1:
            opcion=0;    
            let km=parseInt(prompt("Ingrese los km de distancia a recorrer por el flete."));
            flete=km*300;
            monto+=flete;
            console.log("Gasto de envio: " + flete);
        break; 
        case 2:
            opcion=0;
            break; 
        default:
            cartelError();
            break;
        }
    }
*/
/*
    function descuento(monto, descuento){
        monto=monto-(monto*descuento/100);
        return monto;
    }
    
    function formaDePago(opcion){
        opcion === 1 && (monto = descuento(monto,20));
        opcion === 2 && (monto=descuento(monto,10));
        opcion === 3 && (monto=monto*1.15);
        opcion === 3 && (cuota=(monto/2));
        opcion === 3 && (console.log("Total a pagar: $ " + monto + " en dos cuotas de $" + cuota ));
    }
    opcion = parseInt(prompt("Ingrese la forma en la que desea pagar: \n 1- Efectivo 20% de descuento. \n 2- Tarjeta en un pago 10% de descuento \n 3- Tarjeta en dos pagos (15% de interes)"));
    formaDePago(opcion);
}


*/
