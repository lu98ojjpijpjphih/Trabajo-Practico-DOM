let p = document.querySelector("#parrafo")
let titulo = document.querySelector("h1")
let img = document.querySelector("#imagen1")
let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")




boton1.onclick = function(){
titulo.textContent = "Gato Montés"
p.textContent = "Felino muy similar al lince ibérico, hasta el punto de ser difícil su distinción. Posee un pelaje gris atigrado y una larga cola con punta redonda. Y este mismo se alimenta de pequeños roedores, insectos, y aves que acecha durante las horas de la noche, dado que este animal tiene los mayores grados de actividad nocturna"
img.src = "https://inaturalist-open-data.s3.amazonaws.com/photos/40278868/large.jpg"
}


boton2.onclick = function(){
titulo.textContent = "Puma"
p.textContent = "El puma un mamífero carnívoro de la familia Felidae nativo de América, este es adaptable y generalista. Es el segundo mayor felino del continente, después del jaguar, y el cuarto más grande del mundo, después del tigre, y el león."
img.src = "https://www.cba.gov.ar/wp-content/uploads/2020/06/nature-animal-wilderness-head-53001-1024x708.jpg"
}


boton3.onclick = function(){
titulo.textContent = "Zorro gris"
p.textContent = "El zorro Gris es una especie de mamífero carnívoro de la familia de los cánidos que habita en América del Sur. Se caracteriza por tener hocico largo y cuerpo más o menos peludo y cola mediana, pero a diferencia de los perros poseen orejas puntiagudas y grandes, y un hocico delgado y anguloso"
img.src = "https://masneuquen.com/wp-content/uploads/2020/09/Zorro-gris-Lycalopex-gymnocercus.jpg"
}


boton1.style.color = 'green'
boton3.style.color = 'green'
boton2.style.color = 'green'
titulo.style.color = 'pink'

