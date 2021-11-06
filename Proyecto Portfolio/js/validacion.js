const nombres= document.getElementById("nombre")
const correo= document.getElementById("correo")
const mensaje=document.getElementById("mensaje")

const form= document.getElementById("form")
const parrafo= document.getElementById("warnings")


form.addEventListener ("submit", e=>{

     e.preventDefault()

     let warnings= ""
     let entrar=false
     parrafo.innerHTML=""
     let regexEmail=
     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     

     if(nombres.value.length <6){
   
       warnings+="Los nombres no son VALIDOS <br>"
       entrar=true

     }

     
     if(!regexEmail.test (correo.value)){

      warnings+="El email no es VALIDO <br>"
      entrar=true

     }

     if(entrar){

      parrafo.innerHTML= warnings

     }
        

})


