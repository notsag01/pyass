import { carrito } from "./main.js";

    $("#carrito").append(`
            <div class="container" id="carrito-toggle"> 
                <div class="row">
                    <div class="col-4">
                        <img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt="">
                    </div>
                    <div id="nombre-producto-carrito" class="col d-flex justify-content-start">
                        
                    </div>        
                </div>
            </div>                        
    `)
    
    $("#carrito").click(()=>{
        $("#carrito-toggle").toggle("slow");
    })

    for (const producto of carrito){
        console.log(producto)
        $("#nombre-producto-carrito").append(
            `<h6> ${producto.nombre} </h6>`
        )     
    }    
    