function INDIA(){
    let zone1={timeZone:'ASIA/KOLKATA'}
    let currentDate = new Date().toLocaleDateString('en-US',zone1)
    let currentTime=new Date().toLocaleTimeString('en-US',zone1)
    document.querySelector('#indian-time').innerText=currentDate;
    document.querySelector('#indian-date').innerText=currentTime;

}

setInterval(INDIA,1000)


function USA(){
    let zone2={timeZone:'America/New_York'}
    let currentDate = new Date().toLocaleDateString('en-US',zone2)
    let currentTime=new Date().toLocaleTimeString('en-US',zone2)
    document.querySelector('#usa-time').innerText=currentDate;
    document.querySelector('#usa-date').innerText=currentTime;

}

setInterval(USA,1000)




function china(){
    let zone3={timeZone:'ASIA/SHANGHAI'}
    let currentDate = new Date().toLocaleDateString('en-US',zone3)
    let currentTime=new Date().toLocaleTimeString('en-US',zone3)
    document.querySelector('#china-time').innerText=currentDate;
    document.querySelector('#china-date').innerText=currentTime;

}

setInterval(china,1000)
