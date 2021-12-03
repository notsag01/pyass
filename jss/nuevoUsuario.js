
class Ususario{
    constructor(usuario, nombre, apellido, email, password){
        this.usuario=usuario
        this.nombre=nombre
        this.apellido=apellido
        this.email=email
        this.password=password

    }
}

const usuarios=[]||JSON.parse(localStorage("usuarios"))

const getUsuario=document.getElementById("usuario-nuevo-usuario")
const getNombre=document.getElementById("nombre-nuevo-usuario")
const getApellido=document.getElementById("apellido-nuevo-usuario")
const getEmail=document.getElementById("email-nuevo-usuario")
const getPassword=document.getElementById("password-nuevo-usuario")

$("#nuevo-usuario").submit((e)=>{
    e.preventDefault()

    const usuario =getUsuario.value
    const nombre =getNombre.value
    const apellido =getApellido.value
    const email =getEmail.value
    const password =getPassword.value

    

    const nuevoUsusario= new Ususario(usuario,nombre, apellido, email, password)
    console.log(nuevoUsusario)
    addUsuario(nuevoUsusario)

    if(usuario===""||nombre===""|| apellido==="" || email===""||password===""){
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

