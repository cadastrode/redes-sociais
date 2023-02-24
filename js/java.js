
const bot = document.getElementById("postar")
const atu = document.getElementById("atualizar")
var tabela = document.getElementById("ta")
var troca = document.getElementById("troca")
troca.value = 1
var db = new Dexie("rede");
db.version(2).stores({
  usuarios: "++id, nome, foto",
  posts: "++id, usuario,titulo, texto, foto, video"
});

class Postagens {
  constructor(id, titulo, texto, foto, video, usuario) {
    this.id = id
    this.texto = texto
    this.titulo = titulo
    this.foto = foto
    this.video = video
    this.usuario = "Edson Santos"
  }
  adicionar() {
    return db.posts.add(this)
  }
  getAll() {
    return db.posts.toArray()
  }
  update() {
    return db.posts.put(this)
  }
  delete(pk){
    return db.posts.delete(pk)
  }
}

// Adiciona posts
bot.addEventListener("click", function (e) {
  e.preventDefault()
  
  const novo = new Postagens(this.usuario, document.getElementById("titulo").value, document.getElementById("areaDePostagem").value, document.getElementById("foto").value, document.getElementById("video").value)

      novo.adicionar()
      document.getElementById("areaDePostagem").value = ""
      document.getElementById("foto").value = ""
      document.getElementById("video").value = ""
      document.getElementById("titulo").value = ""
})
// função para imprimir os posts na tela
function get() {

  const mostra = new Postagens("hhasd", "hhasd", "hhasd", "jfsjdf", "fgjljdljgldgj", "jgdjjglfjg")

  mostra.getAll().then(posts =>
    posts.forEach(mostra => {
      dv = ""
      var us = document.createElement("h4")
      us.textContent = mostra.usuario
      var idi = mostra.id
      var dvel=document.createElement("div")
      dvel.setAttribute("class", "elem")
      var edel=document.createElement("div")
      edel.setAttribute("class", "elem")
      var tes=document.createElement("div")
      tes.setAttribute("class", "elem")
      var ldc=document.createElement("div")
      ldc.setAttribute("class", "elem")
      var dv = document.createElement("div")
      
      dv.setAttribute("class", "caps")
      
      dv.setAttribute("id", idi)

      var titulo = document.createElement("h2")
      titulo.textContent = mostra.titulo

      dv.appendChild(us)
      tabela.appendChild(dv)
      dv.appendChild(titulo)
      

      var text = document.createElement("p")
      text.textContent = mostra.texto
      tabela.appendChild(dv)
      dv.appendChild(text)
      dv.appendChild(dvel)
      dvel.appendChild(edel)
      dvel.appendChild(ldc)
      dvel.appendChild(tes)

      var dlk=document.createElement("img")
      dlk.src="img/hand-thumbs-down.svg"
      ldc.appendChild(dlk)

      var lk=document.createElement("img")
      lk.src="img/hand-thumbs-up.svg"
      ldc.appendChild(lk)

      var comp=document.createElement("img")
      comp.src="img/share.svg"
      ldc.appendChild(comp)

      var edit=document.createElement("img")
      edit.setAttribute("id","edit")
      
      edit.src="img/arrow-repeat.svg"
      edel.appendChild(edit)

      var dele=document.createElement("img")
      dele.setAttribute("id","dele")
      dele.src="img/trash3.svg"
      tes.appendChild(dele)

       edit.addEventListener("click", function(){
        var cli = document.getElementById(idi)
      cli.addEventListener("click", function () {
       bot.style.display="none"
       atu.style.display="block"
        document.getElementById("titulo").value = cli.childNodes[0].childNodes[0].textContent
        document.getElementById("areaDePostagem").value = cli.childNodes[1].childNodes[0].textContent
      
        atu.addEventListener("click", function (e) {
          e.preventDefault()
          
            const trocar = new Postagens(idi, document.getElementById("titulo").value, document.getElementById("areaDePostagem").value, document.getElementById("foto").value, document.getElementById("video").value)
            db.posts.put(trocar)
            document.getElementById("areaDePostagem").value = ""
            document.getElementById("foto").value = ""
            document.getElementById("video").value = ""
            document.getElementById("titulo").value = ""
            dv = ""
            bot.style.display="block"
            atu.style.display="none"
            get()
       })
        dele.addEventListener("click", function(){
        
          console.log(idi)
          console.log("deu certo")
          
          // var confirma=confirm("Tem Certeza que quer DELETAR? ")
          // if(confirma){
          //   db.posts.delete(idi)
          //}
        }) 
      })
       })

      
    })


  )
}
get()


