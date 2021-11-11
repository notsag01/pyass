import { carrito, ProductosCarrito } from "./main.js";

    $("#carrito").append(`
            <div class="container" id="carrito-toggle"> 
                <div class="row">
                    <div class="col-4">
                        <img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt="">
                    </div>
                    <div id="nombre-producto-carrito" class="col d-flex justify-content-start">
                        <h6> ${carrito.id} </h6>
                    </div>        
                </div>
            </div>                        
    `)
    
    $("#carrito").click(()=>{
        $("#carrito-toggle").toggle("slow");
    })

    
    