import { carrito, ProductosCarrito } from "./main.js";




$("#carrito").append(`
            <div class="container" id="carrito-toggle"> 
                
                    <div>
                        
                    </div>
                    <div id="nombre-producto-carrito" class="col d-flex justify-content-start">
                        
                    </div>        
                </div>
            </div>                        
    `)
    

        $("#carrito").click(()=>{
            $("#carrito-toggle").toggle("slow");
        })
    
    


    

   
        
    
    