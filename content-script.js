
let old = [];
let db = JSON.parse(localStorage.getItem("youtube-plus"))||[];
setInterval(()=>{
  let tiles = document.querySelectorAll('ytd-grid-video-renderer,ytd-compact-video-renderer');
  tiles=Array.from(tiles).filter(tile=>(tile.getBoundingClientRect().y<innerHeight*0.8))
  
  tiles.forEach(tile=>{
    //console.log(tile,tile.offsetTop,(scrollY+innerHeight)/2);
    const link = tile.querySelector("a").href;
    if(old.find(_link=>link==_link))
      return;
    if(db.find(_link=>link==_link)){
      tile.style.opacity="0.1";
    }
    else{
      db.push(link);
      old.push(link);
      console.log(link+" added to list");
    }
  });
localStorage.setItem("youtube-plus",JSON.stringify(db));
},1000);
console.log("Youtube Plus running..."+db.length+" videos recorded.");

