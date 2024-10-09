const mascota= document.querySelector('#mascota')
const propietario= document.querySelector('#propietario')
const telefono= document.querySelector('#telefono')
const fecha= document.querySelector('#fecha')
const hora= document.querySelector('#hora')
const sintomas=document.querySelector('#sintomas')
const formulario= document.querySelector('#nueva-cita')
const contenedorCitas= document.querySelector('#citas')

const objCita={
    mascota:'',
    propietario: '',
    telefono:'',
    fecha:'',
    hora:'',
    sintomas:''
    //esto me ayuda para crear diferentes dato en las misma cajas de informacion
 
}

evento()
function evento(){
    formulario.addEventListener('submit', nuevaCita)
    mascota.addEventListener('change', datosCitas)
    propietario.addEventListener('change', datosCitas)
    telefono.addEventListener('change', datosCitas)
    fecha.addEventListener('change', datosCitas)
    hora.addEventListener('change', datosCitas)
    sintomas.addEventListener('change', datosCitas)
    //importante de declarar esto para que se cuarden los diferentes datos en estas cajas 

}

//crear clases
class citas{
 constructor(){
    this.citas=[]// esto ayuda llamarse el arreglos a si mismo
 }

 agregarCita(citas){
  //citas.push(cita)
  this.citas=[...this.citas,citas]
  console.log(this.citas)
  /// es para ver como va guardanddo las citas 
 }
 eliminarCita(id){
   this.citas =this.citas.filter(citas=>citas.id !== id)

 
 }
 editarCita(citas){
   this.citas= this,citas.map(citas=>citas.id ===citaAct.id ? citaAct:citas)
 }
}
const administrarCitas =new citas()



// sintaxis de la version lega de lo que se encuentra en la parte de editar las cita 
//condicion es igual a "?" si es true : false 

//let status
// if estatus > 30{
// console.log ('la temperatura esta bien ')}
//else{
// console. log (' la temperatura esta mal')}

class ui{
    imprimirAlerta(mensaje,tipo){
        const divMensaje =document.createElement('div')
        divMensaje.classList.add('text-center','alert','d-block','col-12')
        if(tipo==='error'){
            divMensaje.classList.add('alert-danger')

        }else{
            divMensaje.classList.add('alert-succes')
             
        }
        // aqui abajo es para mostara en el mensaje en la pantallea del usuario 
        divMensaje.textContent= mensaje
        // este sera lo que el mensaje 
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'))

        setTimeout(()=>{
            divMensaje.remove();
        },3000)

    }

    imprimirCitas(citas){
        //console.log('imprimir citas')
        citas.array.forEach(citas => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id } = citas
            const divCitas = document.createElement('div')
            divCitas.classList.add('citas','p.3')
            //esto es un atributo personalizado
            divCitas.dataset.id=id
            

            //generar las contastates de las fichas 
            const mascotaParrafo =document.createElement('h2')
            mascotaParrafo.classList.add('card-tilte','font-weigth-bolder')
            mascotaParrafo.textContent=mascota

            const propietarioParrafo= document.createElement('p')
            propietarioParrafo.innerHTML=`
            <span class = font-weight-bolder>propietario:${propietario}</span>`

            const telefonoParrafo= document.createElement('p')
            telefonoParrafo.innerHTML=`
            <span class = font-weight-bolder>telefono:${telefono}</span>`


            const fechaParrafo= document.createElement('p')
            fechaParrafo.innerHTML=`
            <span class = font-weight-bolder>fecha:${fecha}</span>`

            const horaParrafo= document.createElement('p')
            horaParrafo.innerHTML=`
            <span class = font-weight-bolder>hora:${hora}</span>`

            const sintomasParrafo= document.createElement('p')
            sintomasParrafo.innerHTML=`
            <span class = font-weight-bolder>sintomas:${sintomas}</span>`

            divCitas.appendChild(mascotaParrafo)
            divCitas.appendChild(propietarioParrafo)
            divCitas.appendChild(telefonoParrafo)
            divCitas.appendChild(fechaParrafo)
            divCitas.appendChild(horaParrafo)
            divCitas.appendChild(sintomasParrafo)

            contenedorCitas.appendChild(divCitas)

        });
    }

    
}
const useri = new ui()

//las constantes para referirnos a las clases siempre deben juntas no separadas  

function nuevaCita(e) {
    
    e.preventDefault()
    //console.log(nuevaCita)
    const {mascota, propietario, telefono, fecha, hora, sintomas}= objCita
    if(mascota===""|| propietario===""||telefono===""||fecha===""||hora===""||sintomas===""){
     //console.log('todos los campos son obligatorios')
        useri.imprimirAlerta('Todos los campos son obligatorios','error')
        return
    
    }else{
        //console.log(nuevaCita)
        administrarCitas.agregarCita({...objCita})
        objCita.id= Date.now()
        
        formulario.reset()
        reiniciarObjeto()
        useri.imprimirCitas(administrarCitas)

        useri.imprimirAlerta('Se ha agregado la cita correctamente')
    }
       
}
    


function datosCitas(e){
    //console.log(e.target.name)
    objCita[e.target.name]= e.target.value // esta te ayuda a ser el puntero del formulario
    //console.log(objCita)   
}


function reiniciarObjeto(){
    objCita.mascota = '';
    objCita.propietario='';
    objCita.telefono='',
    objCita.fecha='';
    objCita.hora='';
    objCita.sintomas='';
}


