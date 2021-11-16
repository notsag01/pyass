import { carrito, ProductosCarrito } from "./main.js";



$("#carrito").append(`
            <div class="container" id="carrito-toggle"> 
                <div class="row">
                    <div id="nombre-producto-carrito">                        
                </div>
            </div>        
                                   
    `)
    

        $("#carrito").click(()=>{
            $("#carrito-toggle").toggle("slow");           
        })
    
  


    

   
        
    
    