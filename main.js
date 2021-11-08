const URL_GET_PRODUCTOS = `productos.json`





    $.get(URL_GET_PRODUCTOS, (respuesta, estado)=>{
        /* if(estado !== "success"){
            throw new Error("ERROR!")
        } */

        for(const producto of respuesta){
            
            console.log(respuesta)
            console.log(estado)

            
            if(estado!== "success"){
                throw new Error("ERROR!")
            }
            
            for(const producto of respuesta){
                //console.log("hola")
                
            $("#linea-separadora").append(
                `
                <div class="contTarj">
                <div class="d-flex justify-content-center">
                    <a class="mt-3" href=""><img src="./assets/img/pulseras/acero/pulsera acero bolitas 210x210.jpg " style="max-width: 100%;" alt=""></a>
                </div>
                <hr>
                <div id="producto" class="text-center">
                    <div class="descripcion">
                        <a href="">${producto.nombre}</a>
                    </div>
                    <div>
                        <span>$${producto.precio}</span>
                    </div>
                    <div class=" botones">
                        <a href=""><button class="comprar">COMPRAR</button></a>
                        <a href=""><button class="ver">VER</button></a>
                    </div>
                </div>
            </div>  `
                )
            }

        }
    })