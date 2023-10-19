import fetchData from "./fetchData";

const checkBtn = document.getElementById("checkBtn");

if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
          console.log("SW registrado", registration);  
        }).catch(err=>{
            console.log("SW no registrado", err)
    });
 });
}

checkBtn.addEventListener("click", e => {
    e.preventDefault();
    fetchData();
});
