const URL_GET_PRODUCTOS = `productos.json`

const carrito = JSON.parse(localStorage.getItem(`carrito`)) || []


class ProductosCarrito{
    constructor(id, nombre, precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}

/* --------------------------   RENDERIZO LAS SECCION PRINCIPAL/ PRODUCTOS SELECCIONADOS DE PLATA */
    $.get(URL_GET_PRODUCTOS, (respuesta, estado)=>{
        if(estado !== "success"){
            throw new Error("ERROR!")
        }
        const pagPrincipal= respuesta.filter(element=>element.paginaPrincipal==="true" && element.cat2 === "PLATA" )
        console.log(pagPrincipal)
    
            
            for(const producto of pagPrincipal){
                //console.log("hola")
                
            $("#contenedor-productos-plata").append(
                `
                    <div class="col-md-6 col-xl-4 columnas">
                        <div class="contTarj">
                            <div class="d-flex justify-content-center">
                                <a class="mt-3" href=""><img src=" ${producto.img} " style="max-width: 100%;" alt=""></a>
                            </div>
                                <hr>
                            <div id="producto" class="text-center">
                                <div class="descripcion">
                                    <h4 id="nombre-producto" >${producto.nombre} DE ${producto.cat2}</h4>
                                    <p> id: ${producto.id} </p>
                                </div>
                            <div>
                                <span id="spam-precio">$${producto.precio}</span>
                            </div>
                            <div class=" botones">
                                <a href=""><button class="comprar">COMPRAR</button></a>
                                <button id="enviar-carrito-${producto.id}" type="button" class="ver"> + CARRITO</button>
                            </div>
                        </div>        
                    </div>
                </div>  `                
                )
                $(`#enviar-carrito-${producto.id}`).click(()=>{
                    //console.log(producto.nombre)
                    const itemCarrito= new ProductosCarrito(producto.id, producto.nombre, producto.precio)
                    //console.log(itemCarrito)
                    addItemCarrito(itemCarrito)
                } 
                ) 
            }  
                             
                 
    })

/*  --------------------------------   RENDERIZO PRODUCTOS SELECCIONADOS DE ACERO   ---------------------------------------------- */

    $.get(URL_GET_PRODUCTOS, (respuesta, estado)=>{
        if(estado !== "success"){
            throw new Error("ERROR!")
        }
        const pagPrincipal= respuesta.filter(element=>element.paginaPrincipal==="true" && element.cat2 === "ACERO" )
        console.log(pagPrincipal)
    
            
            for(const producto of pagPrincipal){
                //console.log("hola")
                
            $("#contenedor-productos-acero").append(
                `
                    <div class="col-md-6 col-xl-4 columnas">
                        <div class="contTarj">
                            <div class="d-flex justify-content-center">
                                <a class="mt-3" href=""><img src="${producto.img} " style="max-width: 100%;" alt=""></a>
                            </div>
                                <hr>
                            <div id="producto" class="text-center">
                                <div class="descripcion">
                                    <h4 id="nombre-producto" >${producto.nombre} DE ${producto.cat2}</h4>
                                    <p> id: ${producto.id} </p>
                                </div>
                            <div>
                                <span id="spam-precio">$${producto.precio}</span>
                            </div>
                            <div class=" botones">
                                <a href=""><button class="comprar">COMPRAR</button></a>
                                <button id="enviar-carrito-${producto.id}" class="ver"> + CARRITO</button>
                            </div>
                        </div>        
                    </div>
                </div>  `                
                )
                $(`#enviar-carrito-${producto.id}`).click(()=>{
                    //console.log(producto.nombre)
                    const itemCarrito= new ProductosCarrito(producto.id, producto.nombre, producto.precio)
                    //console.log(itemCarrito)
                    addItemCarrito(itemCarrito)
                } 
                ) 
            }  
                             
                 
    })

/*  --------------------   FUNCION PARA AGREGAR PRODUCTOS AL CARRITO   -------------------------------------------------- */
    const addItemCarrito=(item)=>{
        carrito.push(item)
        localStorage.setItem(`carrito`, JSON.stringify(carrito))
        console.log(carrito)

        rendCarrito()
    }
            /* ----------   RENDERIZO EL CARRITO  ------------- */
    const rendCarrito=()=>{  

        $("#productos-del-carrito").empty()
        for(const producto of carrito){
            $("#productos-del-carrito").append(
                `                                            
                <div class="container">
                <div class"row">
                        <div class"col-6">
                            <p> ${producto.nombre} </p>
                        </div>    
                        <div class"col-6">
                            <p> ${producto.precio} </p>
                        </div>    
                    </div>
                </div>          
                `
            )
        }
        }
        
$(".nav-link").css({"font-weight": "bolder"}
)


 


/*  ----------------------   BUSCAR PRODUCTOS EN EL JSON   -------------------------- */

const getElementoBuscar=document.getElementById("buscar")

$("#busca-productos").submit((e)=>{
    e.preventDefault()

    const elemento= getElementoBuscar.value
    const elementoB=elemento.toUpperCase()

    buscar(elementoB)    
})

const buscar=(elemento)=>{

    $.get(URL_GET_PRODUCTOS,(respuesta,estado)=>{
        if(estado!== "success"){
            throw new Error(" Error en bucar!")
        }
        const productos = respuesta
        

        const resultado=productos.filter(producto=>
            producto.nombre.includes(elemento)  )            

        renderResultado(resultado)

    })

}
const renderResultado=(producto)=>{
    console.log(producto)
}

for (const producto of carrito){
$("#contenedor-productos-carrito").append(
        `<div class="col-md-6 col-xl-4 columnas">
        <div class="contTarj">
            <div class="d-flex justify-content-center">
                <a class="mt-3" href=""><img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt=""></a>
            </div>
                <hr>
            <div id="producto" class="text-center">
                <div class="descripcion">
                    <h4 id="nombre-producto" >${producto.nombre} DE ${producto.cat2}</h4>
                    <p> id: ${producto.id} </p>
                </div>
            <div>
                <span id="spam-precio">$${producto.precio}</span>
            </div>
            <div class=" botones">
                
                <button id="enviar-carrito-${producto.id}" class="ver"> QUITAR </button>
            </div>
        </div>        
    </div>
</div>`
        )
    }



export{    
    carrito, ProductosCarrito,
}



