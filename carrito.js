import { carrito } from "main.js";

for(const producto of carrito){


    $("#carrito").append(`
            <div class="container" id="carrito-toggle"> 
                <div class="row">
                    <div class="col-4">
                        <img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt="">
                    </div>
                    <div class="col">
                        <h3> ${producto.nombre} </h3> 
                    </div>        
                </div>
            </div>                        
    `)
    $("#carrito").click(()=>{
        $("#carrito-toggle").toggle("fast");
    })
    }