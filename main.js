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
        /* if(estado !== "success"){
            throw new Error("ERROR!")
        } */

        for(const producto of respuesta){
            
            //console.log(respuesta)
            //console.log(estado)

            
            if(estado!== "success"){
                throw new Error("ERROR!")
            }
            
            for(const producto of respuesta){
                //console.log("hola")
                
            $("#contenedor-productos").append(
                `
                    <div class="col-6 col-md-4 columnas">
                        <div class="contTarj">
                            <div class="d-flex justify-content-center">
                                <a class="mt-3" href=""><img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt=""></a>
                            </div>
                                <hr>
                            <div id="producto" class="text-center">
                                <div class="descripcion">
                                    <h4 >${producto.nombre}</h4>
                                </div>
                            <div>
                                <span>$${producto.precio}</span>
                            </div>
                            <div class=" botones">
                                <a href=""><button class="comprar">COMPRAR</button></a>
                                <button id="enviar-carrito-${producto.id}" type="button" class="ver">CARRITO</button>
                            </div>
                        </div>        
                    </div>
                </div>  `                
                )
                
            }  
            $(`#enviar-carrito-${producto.id}`).click(()=>{
                //console.log(producto.nombre)
                const itemCarrito= new ProductosCarrito(producto.id, producto.nombre, producto.precio)
                //console.log(itemCarrito)
                addItemCarrito(itemCarrito)
            })                  
        }           
    })

    const addItemCarrito=(item)=>{
        carrito.push(item)
        console.log(carrito)
    }

$(".nav-link").css({"font-weight": "bolder"}
)






export{    
    carrito
}



