const URL_GET_PRODUCTOS = `productos.json`

const carrito=[]



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
                carrito.push(producto)
                console.log(carrito)
            })                  
        }           
    })

$(".nav-link").css({"font-weight": "bolder"}
)


$("#carrito").append(`
        <div class="container" id="carrito-toggle"> 
            <div class="row">
                <div class="col-4">
                    <img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt="">
                </div>
                <div class="col">
                    <h3> `${carrito.nombre}`</h3> 
                </div>        
            </div>
        </div>                        
`)

$("#carrito").click(()=>{
    $("#carrito-toggle").toggle("fast");
})

