const input = document.querySelector("input");
const createGif = document.querySelector("#submit")
const form = document.querySelector("form")
const gifCont = document.querySelector(".container")
const deleteAll = document.querySelector("#delete")

function makeGif(imgSrc){
    
 const div = document.createElement("div");
 const img = document.createElement('img')
 img.setAttribute("class","image")
 div.setAttribute("class","gif")
 img.src = imgSrc;
 div.append(img);
 gifCont.append(div);
    

}
form.addEventListener("submit", async function(e){
    e.preventDefault();
    let inputVal = input.value;
    input.value = '';
    const res = await axios.get('http://api.giphy.com/v1/gifs/search',{params:{q:inputVal, api_key:"yGHOEJqyvnv15QJjNqlU0Ic0fafc9Qfe"}});
    let randomIdx = Math.floor((Math.random() * 50)); 
    console.log(res.data.data[randomIdx].url);
    let imgSrc = res.data.data[randomIdx].images.original.url;
    makeGif(imgSrc);
})

deleteAll.addEventListener('click',function(){
    gifCont.innerHTML = '';
})