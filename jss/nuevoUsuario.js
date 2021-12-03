
class Ususario{
    constructor(nombre, apellido, email){
        this.nombre=nombre
        this.apellido=apellido
        this.email=email

    }
}

const usuarios=[]||JSON.parse(localStorage("usuarios"))

const getNombre=document.getElementById("nombre-nuevo-usuario")
const getApellido=document.getElementById("apellido-nuevo-usuario")
const getEmail=document.getElementById("email-nuevo-usuario")

$("#nuevo-usuario").submit((e)=>{
    e.preventDefault()

    const nombre =getNombre.value
    const apellido =getApellido.value
    const email =getEmail.value

    

    const nuevoUsusario= new Ususario(nombre, apellido, email)
    console.log(nuevoUsusario)
    addUsuario(nuevoUsusario)

    if(nombre===""|| apellido==="" || email===""){
        alert("Todos los campos deben ser completados")
    }else{

        alert(`bienvenido ${nombre}`)
    }
    let url="../index.html"
    window.location=url

})

const addUsuario = (usuario)=>{
    usuarios.push(usuario)
    localStorage.setItem("usuarios",JSON.stringify(usuarios))

}

