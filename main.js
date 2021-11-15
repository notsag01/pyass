const URL_GET_PRODUCTOS = `productos.json`

const carrito=[]

class ProductosCarrito{
    constructor(id, nombre, precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}
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
                                <a class="mt-3" href=""><img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt=""></a>
                            </div>
                                <hr>
                            <div id="producto" class="text-center">
                                <div class="descripcion">
                                    <h4 id="nombre-producto" >${producto.nombre} DE ${producto.cat2}</h4>
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
                                <a class="mt-3" href=""><img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt=""></a>
                            </div>
                                <hr>
                            <div id="producto" class="text-center">
                                <div class="descripcion">
                                    <h4 id="nombre-producto" >${producto.nombre} DE ${producto.cat2}</h4>
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

    const addItemCarrito=(item)=>{
        carrito.push(item)
        console.log(carrito)

        rendCarrito()
    }

    

    const rendCarrito=()=>{  

        $("#nombre-producto-carrito").empty()
        for(const producto of carrito){
            $("#nombre-producto-carrito").append(
                `
                
                                            
                            <ul>
                                <li> ${producto.nombre} - $${producto.precio} </li>                               
                            </ul>                           
                       
                    <br>
                
                `
            )
        }
         }
        rendCarrito()

$(".nav-link").css({"font-weight": "bolder"}
)






export{    
    carrito, ProductosCarrito,
}



