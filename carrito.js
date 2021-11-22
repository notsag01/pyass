import { carrito, ProductosCarrito } from "./main.js";

let totalCarrito=0;
console.log(totalCarrito)




$("#carrito").append(`
            <div class="container" id="carrito-toggle"> 
                <div class="row">
                    <div id="nombre-producto-carrito"></div>                    
                </div>
            </div>        
                                   
    `)
    

        $("#carrito").click(()=>{
            $("#carrito-toggle").toggle("slow");

            /* for(const producto of carrito){
                totalCarrito=producto.precio + totalCarrito
            
                } */  
        })

        
              
        


    

   
        
    
    