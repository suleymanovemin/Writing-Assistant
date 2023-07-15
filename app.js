window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const textarea = document.querySelector(".textarea")
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement("p");
recognition.addEventListener("result",(e)=>{
    const text= Array.from(e.results).map((result)=>result[0]).map(result =>result.transcript).join('');
    p.innerText = text;
    textarea.appendChild(p);
    let openPage = Array.from(e.results).map((result)=>result[0]).map(result =>result.transcript).join('')
    if(e.results[0].isFinal){
        p = document.createElement("p")
    }
    console.log(openPage);
    if (openPage === "YouTube'u aç") {
        console.log("salam");
        window.open("https://www.youtube.com/", "_blank");
      }else if (openPage === "instagram aç"){
         window.open("https://www.instagram.com/emin_su1eymanov/", "_blank");
    }        
})
recognition.addEventListener("end",()=>{

recognition.start();

})
recognition.start() 
