import { itemsBuscados } from "../main.js";

console.log(itemsBuscados)

for (const producto of itemsBuscados){
    $("#contenedor-productos-buscados").append(
        `
            <div class="col col-xl-4 columnas">
                <div class="contTarj">
                    <div class="d-flex justify-content-center">
                        <img class="mt-3" src=".${producto.imagen} " width="250" heigth="250"" alt="">
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
        </div>  `                
        )}
