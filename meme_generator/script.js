const generateBtn=document.querySelector(".btn")
const memeTitle=document.querySelector(".meme-title")
const memeImage=document.querySelector(".meme-generator")
const authorName=document.querySelector(".author")
const source="https://meme-api.com/gimme/wholesomememes"
let updateDetails=(source,title,author)=>{
    memeImage.setAttribute("src", source)
    memeTitle.innerHTML=title
    authorName.innerHTML=`Meme by: ${author}`
    

}


function getData(){
    fetch(source)
    .then((response=>(response.json())))
    .then(data=>{
        updateDetails(data.url, data.title, data.author)
    }
    )

}
generateBtn.addEventListener("click", ()=>{
    getData()
})
getData()