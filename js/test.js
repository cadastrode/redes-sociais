const usuario="marcos"

const titulo= document.getElementById("titulo")
const texto= document.getElementById("texto")  
const foto= document.getElementById("foto ")
const video= document.getElementById("video")
const endPoint="db.txt"
fetch(endPoint
)

.then(res=>res.text())
.then(res=>console.log(res))

