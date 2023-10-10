const btnEl = document.getElementById("btn")
const jokee1=document.getElementById("joke")

const apiKey="bWAmc0ci8qvtK7Ok/ytdpw==KNYeqTDoGLcJJcUy"
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey
    },
};

const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
        jokee1.innerText="Updating..."
    btnEl.disabled=true;
    btnEl.innerText="Loading..."
    const response= await fetch(apiUrl ,options)
    const data=await response.json()

    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke"
   
    jokee1.innerText=data[0].joke
        
    } catch (error) {
        jokee1.innerText="An error happend, try again later.."
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke"
        console.log(error);
    }
    
}





btnEl.addEventListener("click",getJoke)