let monto=0;
let opcion =1;
let a=0;
let b=0; 
let cuota;
let flete=0;
let nombre;
let precio;

let contenedorNav = document.createElement("div");
contenedorNav.innerHTML = `<nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <ul>
            <a class="navbar-brand" href="index.html"><img src="../images/logosofinieder.jpg" id="logo" alt="logo de Sofi Nieder"/></a>
            <a class="navbar-brand" href="index.html">Sofi Nieder Deco</a>
        </ul>
        <a href="./carrito.html" id="iconoCarrito" class="bg-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-basket2" viewBox="0 0 16 16">
                <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
            </svg>
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
document.getElementById("navBar").appendChild(contenedorNav);

let productos = [
    {"Id": 1, "nombre": "Mesa Ratona ovalada", "precio": 4500, "imagen": 1},
    {"Id": 2, "nombre": "Sillon Gervasoni", "precio": 7000, "imagen": 2},
    {"Id": 3, "nombre": "Almohadones de respaldo 40x40", "precio": 1000, "imagen": 3},
    {"Id": 4, "nombre": "Perchero Escalera", "precio": 2500, "imagen": 4},
    {"Id": 5, "nombre": "Espejo redondo", "precio": 7000, "imagen": 5}
];

let ProductosCarrito =[];

function agregarProducto(Id){
    const productos = cargarProductosLs();
    let elProducto = productos.find(item=> item.Id === Id);
    ProductosCarrito.push(elProducto);
}

function cardCarrito(producto){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="card col-6 col-sm-3 border-0" style="width: 18rem;">
    <img src="images/${producto.imagen}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">${producto.nombre}</h5>
    <p class="card-text text-center">Precio $ ${producto.precio}</p>
    <p class="card-text text-center">Cantidad de stock ${producto.cantidad}</p>
    </div>
    </div>`
    document.getElementById("cardsCarrito").appendChild(contenedor);
}

function chango(ProductosCarrito){
   for(let producto of ProductosCarrito){
    console.log(producto);
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div>
    <h1>${producto.nombre}</h1>
    </div>`
    document.getElementById("cardsCarrito").appendChild(contenedor);
   }
}

chango(ProductosCarrito);

function cartelError(){
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'La opcion ingresada no es valida!',
        showConfirmButton: false,
        timer: 2500
      })
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

let empleado= document.getElementById("btnEmpleado");
empleado.addEventListener ("click", respuestaClick);

function cartelErrorCodigo(){
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: 'El codigo ingresado no es valido!',
      showConfirmButton: false,
      timer: 2000
    })
}

function cantidadProductos(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'actualmente hay ' + productos.length + ' productos distintos.',
        showConfirmButton: false,
        timer: 2000
      })
}

function respuestaClick(){
    let contrasenia = parseInt(prompt("Ingrese codigo de acceso: "));
    const clave = (contrasenia == 3636) ? true: false;
    clave ? cantidadProductos() : cartelErrorCodigo();
    if (clave){
        opcion = parseInt(prompt("Ingrese el numero del producto para cargar el stock : \n 1- Mesa Ratona ovalada. $ 4500 \n 2- Sillon Gervasoni $ 7000 \n 3- Almohadones de respaldo 40x40 $ 1000 \n 4- Perchero Escalera $ 2500 \n 5- Espejo redondo $ 7000 \n 6-Ver stock de un producto especifico. \n 7- Ver stock total actual. "));
        switch (opcion) {
        case 1:
            let cant=parseInt(prompt("Ingrese la cantidad de productos que ingresan: "));    
            productos[0].cantidad+=cant;
        break; 
        case 2:                
            cant=parseInt(prompt("Ingrese la cantidad de productos que ingresan: "));    
            productos[1].cantidad+=cant;
            break; 
        case 3:
            cant=parseInt(prompt("Ingrese la cantidad de productos que ingresan: "));    
            productos[2].cantidad+=cant;
            break; 
        case 4:
            cant=parseInt(prompt("Ingrese la cantidad de productos que ingresan: "));    
            productos[3].cantidad+=cant;
            break; 
        case 5:
            cant=parseInt(prompt("Ingrese la cantidad de productos que ingresan: "));    
            productos[4].cantidad+=cant;
            break;
        case 6:
            let a=prompt("Mesa Ratona ovalada \n Sillon Gervasoni \n Almohadones de respaldo \n Perchero Escalera \n Espejo redondo \n Ingrese el nombre del producto que desea ver el stock").toUpperCase();
            console.log(" Stock actual de: " + a )
            console.log(" ........................ ")
            let t=0;
            for (const producto of stock){
                if(producto.nombre===a){
                    console.log(" - hay " + producto.cantidad + " unidades del producto " + a );
                    t++;
                } 
            }
            if (t==0){
                console.log(" cero, porque no existe el producto " + a);
            }    
            break;
        case 7:
            console.log(" Stock actual: ")
            console.log(" ................. ")
            for (const producto of stock){
                console.log(" - " + producto.nombre + " " + producto.cantidad);
            }
            break; 
        default:
            cartelError();
        break; 
                }       
            
    }
}*/