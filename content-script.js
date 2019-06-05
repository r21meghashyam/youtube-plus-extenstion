try{
    if(window.location.host=="www.hotstar.com"){
        let fullscreendone=false;
        localStorage.clear();
        document.addEventListener('fullscreenchange',(e)=>{
            fullscreendone=true;
        });
        setInterval(()=>{
            let obj = JSON.parse(localStorage.getItem('sportlivetimeentries'));
            //console.log(obj);
            let nofreeluncheon = JSON.parse(obj.nofreeluncheon);
            let elapsedTime = nofreeluncheon[Object.keys(nofreeluncheon)[0]].elapsedTime
            //console.log(elapsedTime);
            if(elapsedTime>300000){
                localStorage.clear();
                window.location=window.location.origin+window.location.pathname+"?lang=eng";
            }
            let video = document.querySelector("#my_video_1_html5_api");
            
            if(video && !fullscreendone){
                video.requestFullscreen();
            }

        },1000);
        setTimeout(()=>{
            localStorage.clear();
            window.location=window.location.origin+window.location.pathname+"?lang=eng";
        },5*60*1000);
        console.log("HOTSTAR HACK RUNNING");
    }
}
catch(e){
    console.log(e);
}