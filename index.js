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

 let carrito = []
 const contenedor = document.querySelector('#contenedor')

 productos.forEach((prod) =>{
  const {id, nombre, precio, desc, img, cantidad} = prod
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
})

function agregarProducto(id){

const item = productos.find((prod) => prod.id === id)
  carrito.push(item)
  mostrarCarrito()
}

const mostrarCarrito = () =>{
    const modalBody = document.querySelector('.modal .modal-body')
     
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
          <p>Precio: ${precio}</p>
          <p>Cantidad :${cantidad}</p>
          <button onclick="eliminarProducto(${id})" type="button" class="btn btn-danger"  >Eliminar del carrito</button>
        </div>
      </div> `
    })
}

function eliminarProducto(id){
    const camisetaId = id 
    carrito = carrito.filter((camiseta) => camiseta.id !== camisetaId)
    mostrarCarrito()
}