const teladeinicio = document.querySelector(".botao-inicio")
const personagemM = document.querySelector(".botao-michael")
const personagemF = document.querySelector(".botao-franklin")
const personagemT = document.querySelector(".botao-trevor")

const texto = document.querySelector("p")
const imagem = document.querySelector(".imagem-personagem")
const fundo = document.querySelector(".video-de-fundo")
const fundoM = document.querySelector(".fundosM")
const fundoF = document.querySelector(".fundosF")
const fundoT = document.querySelector(".fundosT")


function inicio(){
   

    texto.innerHTML = "Adentre um mundo onde a liberdade é sua maior arma e as ruas de Los Santos são seu playground. Em GTA V, cada esquina é uma nova aventura esperando para acontecer. Seja um mestre do crime, um piloto habilidoso ou simplesmente explore uma metrópole vibrante onde cada decisão molda seu destino."
    imagem.src = "./assets/imgdescricao.png"
    teladeinicio.style.backgroundColor = "green"
    personagemM.style.backgroundColor = "white"
    personagemF.style.backgroundColor = "white"
    personagemT.style.backgroundColor = "white"
    fundo.style.visibility = "visible"
    fundoM.style.visibility = "hidden"
    fundoF.style.visibility = "hidden"
    fundoT.style.visibility = "hidden"
}


function troca1(){
   
    texto.innerHTML = "Michael é um ex-assaltante de banco e criminoso conhecido, que fingiu sua morte para se aposentar e viver uma vida pacífica com sua família em Los Santos. No entanto, ele sofre com seu relacionamento doentio com eles e logo é puxado de volta para sua vida criminosa, forçando-o a voltar aos velhos tempos."
    imagem.src = "./assets/michael.png"
    personagemM.style.backgroundColor = "green"
    teladeinicio.style.backgroundColor = "white"
    personagemF.style.backgroundColor = "white"
    personagemT.style.backgroundColor = "white"
    fundo.style.visibility = "hidden"
    fundoM.style.visibility = "visible"
    fundoF.style.visibility = "hidden"
    fundoT.style.visibility = "hidden"

}

function troca2(){

    texto.innerHTML = "Franklin é um jovem gângster que está tentando crescer na vida, sua vida muda para sempre quando encontra Michael De Santa. Ele começa a entrar e se aprofundar nas profundezas do crime, com escândalos políticos e governamentais o seguindo, enquanto é forçado a se afastar da própria gangue, as Famílias…"
    imagem.src = "./assets/franklin.png"
    personagemF.style.backgroundColor = "green"
    teladeinicio.style.backgroundColor = "white"
    personagemM.style.backgroundColor = "white"
    personagemT.style.backgroundColor = "white"
    fundo.style.visibility = "hidden"
    fundoM.style.visibility = "hidden"
    fundoF.style.visibility = "visible"
    fundoT.style.visibility = "hidden"
}

function troca3(){

    texto.innerHTML = "Trevor é um criminoso conhecido e ex-ladrão de banco com um passado complicado, que mais tarde fundou sua própria empresa, Trevor Philips Enterprises, operando com tráfico de drogas e contrabando de armas no Blaine County."
    imagem.src = "./assets/trevor.png"
    teladeinicio.style.backgroundColor = "white"
    personagemM.style.backgroundColor = "white"
    personagemF.style.backgroundColor = "white"
    personagemT.style.backgroundColor = "green"
    fundo.style.visibility = "hidden"
    fundoM.style.visibility = "hidden"
    fundoF.style.visibility = "hidden"
    fundoT.style.visibility = "visible"
}

teladeinicio.addEventListener("click",inicio)
personagemM.addEventListener("click",troca1)
personagemF.addEventListener("click",troca2)
personagemT.addEventListener("click",troca3)