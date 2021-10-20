
    const productosALaVenta=[]
    const carrito=[]
    const costos=[]

    console.log(productosALaVenta)
    console.log(carrito)
    console.log(costos)

    let totalCostos=0;
    let montoTotalAAbonar=0;

    class Productos{
        constructor(id, nombre, costo, cantidad){
            this.id=id; 
            this.nombre=nombre.toUpperCase();
            this.costo=Number(costo);
            this.cantidad=Number(cantidad)
        }
    }


    /* AGREGO 3 PRODUCTOS */
    productosALaVenta.push( new Productos("1", "pulsera Acero", 500, 10))
    productosALaVenta.push( new Productos("2", "pulsera Plata", 1000, 10))
    productosALaVenta.push( new Productos("3", "pulsera Oro", 1500, 10))
    productosALaVenta.push( new Productos("4", "anillo plata", 2000, 10))
    productosALaVenta.push( new Productos("5", "anillo Oro", 3000, 10))
    
    localStorage.setItem("productos", JSON.stringify(productosALaVenta))
    
    const getAll=()=>{
        console.log(productosALaVenta)
    }
    for(const producto of productosALaVenta){
        console.log(producto.nombre)
    }


  
    /* ------------------------   FUNCION BUSCAR   ---------------------------------- */
    const bucar=(nombre)=>{
        nombre=nombre.toUpperCase()

        const producto= productosALaVenta.find(
            productos=>productos.nombre===nombre
        )

        if (!producto){
            console.log(`no existe ${producto}`)
        }
        return(producto)
    }

    //COMPROBACION
    /* console.log(bucar("pulsera plata")) */



    /* ------------------    FUNCION PARA BORRAR   ----------------------------------- */

    const borrar=(nombre)=>{
        const producto =bucar(nombre)
        const index= productosALaVenta.indexOf(
            producto
        )           
        productosALaVenta.splice(index,1)           
    }

    //COMPROBACION
    /* console.log(borrar("pulsera plata")) */

    /* --------------------    CARRITO DE VENTA     --------------------- */


    const nuevaVenta=(nombre)=>{
        const producto =bucar(nombre)
            
        carrito.push(producto)
    }

    nuevaVenta("pulsera acero")

    //COMPROBACION        -----------------------este despues va a ser un boton!!!
    /* nuevaVenta(prompt("nombre")) */

    localStorage.setItem("carrito de compras", JSON.stringify(carrito))




