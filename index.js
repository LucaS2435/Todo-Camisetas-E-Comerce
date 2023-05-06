const productos = [
   {
      id: 1,
      nombre: "Argentina 2022",
      cantidad: 1,
      desc: "Remera 3 estrellas",
      precio: 8000,
      img: "./img/arg3.jpg" ,
    },
    {
        id: 2,
        nombre: "Argentina 86",
        cantidad: 1 ,
        desc: "Camiseta del Diego",
        precio: 7000,
        img: "./img/arg 86.jpg" ,
    },
    {
        id: 3,
        nombre:"Argentina 94",
        cantidad: 1 ,
        desc: "Camiseta Mundial 94",
        precio: 6500 ,
        img: "./img/arg94.jpg" ,
    },
    {
        id: 4,
        nombre: "Boca Juniors",
        cantidad:1 ,
        desc:"Camiseta del 2000 Campeón" ,
        precio: 4700,
        img: "./img/boca2000.jpg" ,
    },
    {
        id: 5,
        nombre: "Villa Mitre",
        cantidad: 1,
        desc:"Camiseta temporada 2022",
        precio: 3500 ,
        img:"./img/vm.jpg",
    },
    {
     id: 6,
     nombre:"Chaco For Ever" ,
     cantidad:1,
     desc:"Temporada 2021" ,
     precio: 3000,
     img: "./img/charco.jpg" ,
    },
    {
      id: 7,
     nombre:"Nueva Chicago" ,
     cantidad: 1,
      desc:"Temporada 94" ,
     precio: 2500,
     img: "./img/chicago.jpg",
    },
    {
     id: 8,
      nombre:"Napoli" ,
       cantidad:1 ,
       desc:"Camiseta del DIEGO" ,
       precio: 5750,
      img:"./img/diegonapo.jpg",
    },
    {
        id: 9,
     nombre:"Ferrocarril del Oeste" ,
      cantidad: 1 ,
      desc: "Temporada 2020",
      precio: 4000,
     img:"./img/ferro.jpg"  ,
    },
    {
     id: 10,
     nombre: "Villa Mitre",
     cantidad:1 ,
     desc: "Temporada 05/06 Ascenso",
     precio:5000,
     img:"./img/vm06.jpg",
    },
    {
        id: 11,
        nombre: "Newell's Old Boys",
        cantidad: 1,
        desc: "Temporada 2022",
        precio: 5000,
        img:"./img/nubels.jpg",
    },   
    {
        id: 12,
        nombre: "Platense",
        cantidad: 1,
        desc: "Temporada 2019",
        precio:4500,
        img:"./img/platen.jpg",
    },
    {
        id: 13,
        nombre: "River Plate",
        cantidad: 1,
        desc: "Campeon Copa Libertadores 2015",
        precio:6500,
        img:"./img/rivwe.jpg",
    }, 
    {
        id: 14,
        nombre: "Quilmes",
        cantidad: 1,
        desc: "Temporada 2018",
        precio: 2600,
        img:"./img/quilmes.jpg",
    },  
    {
        id: 15,
        nombre: "Sarmiento de Junín",
        cantidad: 1,
        desc: "Temporada 2020",
        precio: 3600,
        img:"./img/sarmiento.jpg",
    },  
    {
        id: 16,
        nombre: "Sacachispa",
        cantidad: 1,
        desc: "Temporada 2022",
        precio: 2000,
        img:"./img/saca.jpg",
    },   
    {
        id: 16,
        nombre: "Merlo",
        cantidad: 1,
        desc: "Temporada 2007",
        precio: 3000,
        img:"./img/merlo.jpg",
    }, 
];

let carrito = [];
const contenedor = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector('#carritoContenedor');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');
const procesarCompra = document.querySelector ('#procesarCompra');
const activarFuncion = document.querySelector ('#activarFuncion');
const totalProceso = document.querySelector('#totalProceso');
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

if(formulario){
   formulario.addEventListener('submit', enviarPedido)
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  
  if (activarFuncion) {
    document.querySelector('#activarFuncion').click(procesarPedido)
  }
  
 
});

productos.forEach((prod) =>{
  const {id, nombre, precio, desc, img, cantidad} = prod;
  if(contenedor)
  contenedor.innerHTML += ` 
  <div class="card" style="width: 18rem;">
  <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${nombre}</h2>
    <h5 class="card-text">Precio: ${precio} $</h5>
    <h5 class="card-text">Descripción: ${desc} </h5>
    <h5 class="card-text">Cantidad: ${cantidad} </h5>
    <button onclick="agregarProducto(${id})"  class="btn btn-primary">Agregar al carrito</button>
  </div>
 </div>
  `
});


if(procesarCompra){
procesarCompra.addEventListener('click', () =>{
  if(carrito.length === 0){
    Swal.fire({
       title:"Tu carrito está vacio!",
       text:"Comprá algo para continuar la compra",
       icon:"error",
       confirmButtonText: "Aceptar", 
    }) 
  } else{
     location.href = "compra.html"
     procesarPedido()
  }
})
};

if(vaciarCarrito){
vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    mostrarCarrito()
})
};

function agregarProducto(id){
  
  const existe = carrito.some(prod => prod.id === id) 
  
  if (existe){
    const prod = carrito.map( prod => {
     prod.cantidad ++
    })
  } else{
    const item = productos.find((prod) => prod.id === id)
    carrito.push(item)    
  }

  mostrarCarrito()
};

const mostrarCarrito = () =>{
  const modalBody = document.querySelector('.modal .modal-body')
  if(modalBody){ 
  modalBody.innerHTML = ' '
  carrito.forEach((prod) =>{
        const{id, nombre,img, desc, cantidad, precio} = prod
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
          <p>Producto: ${nombre}</p>
          <p>Precio: ${precio} $</p>
          <p>Cantidad :${cantidad}</p>
          <button onclick="eliminarProducto(${id})" type="button" class="btn btn-danger"  >Eliminar del carrito</button>
        </div>
      </div> `
  })
  }  
  
  if(carrito.length === 0){
      modalBody.innerHTML = `
      <p class="text-primary parrafo">Todavia no agregaste nada!</p>
      `;
  }else{
      console.log("Algo");
  }
  

  carritoContenedor.textContent = carrito.length
    
  if(precioTotal){
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad* prod.precio, 0);
  }
  guardarStorage()
};

function eliminarProducto(id){
    const camisetaId = id 
    carrito = carrito.filter((camiseta) => camiseta.id !== camisetaId)
    mostrarCarrito()
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function procesarPedido(){

  carrito.forEach((prod) =>{

    const listaCompra = document.querySelector('#lista-compra tbody')
    const{id, nombre, precio, cantidad, img} = prod

    const row = document.createElement('tr')
    row.innerHTML += `
      <td>
      <img class="img-fluid img-carrito" src="${img}"/>
      </td>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>${precio * cantidad }</td>
    `
    listaCompra.appendChild(row)
  })
  
  totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad* prod.precio, 0)



}

function enviarPedido(e){
  e.preventDefault()
  const persona = document.querySelector('#persona').value
  const correo = document.querySelector('#correo').value
  const telefono = document.querySelector('#telefono').value
  const provincia = document.querySelector('#provincia').value
  const ciudad = document.querySelector('#ciudad').value
  const direccion = document.querySelector('#direccion').value
  
  if(correo == '' || persona == '' ||telefono == '' ||provincia == '' ||ciudad == '' ||direccion == ''){
 
    Swal.fire({
      title: "Tenés que completar los datos que faltan!!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar" 
  
    })
  }else{

   const btn = document.getElementById('button');

    //document.getElementById('form')
    //.addEventListener('submit', function(event) {
    //event.preventDefault();

    btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zsru4vb';

   emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
      btn.value = 'Finalizar compra';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
  };



  const spinner = document.querySelector ('#spinner')
    spinner.classList.add('d-flex')
    spinner.classList.remove('d-none')
    
    setTimeout(() =>{
      spinner.classList.remove('d-flex')
      spinner.classList.add('d-none')
      formulario.reset()
    }, 3000)

    const alerExito = document.createElement ('p');
    alerExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-md-12', 'mt-2', 'alert-success')
    alerExito.textContent = "Su compra fue realizada correctamente"
    formulario.appendChild(alerExito)

    setTimeout(()=>{
      alerExito.remove('')
    }, 3000)


  }








