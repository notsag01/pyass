import { carrito, ProductosCarrito } from "./main.js";

let totalCarrito=0;
console.log(totalCarrito)


    

       

        
        $("#abrir-nav").click(()=>{
            document.getElementById("mi-carrito").style.width="400px"
         })     
         $("#cerrar-nav").click(()=>{
            document.getElementById("mi-carrito").style.width="0"
         })     
         
         

        /*  for (const producto of carrito){
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
                            <a href=""><button class="comprar">COMPRAR</button></a>
                            <button id="enviar-carrito-${producto.id}" class="ver"> + CARRITO</button>
                        </div>
                    </div>        
                </div>
            </div>`
                    )
                }  */        
        


    

   
        
    
    