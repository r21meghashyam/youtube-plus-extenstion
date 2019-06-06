if (window.location.host == "www.hotstar.com") {
  setInterval(() => {
    let obj = JSON.parse(localStorage.getItem("sportlivetimeentries"));
    if (obj) {
      let nofreeluncheon = JSON.parse(obj.nofreeluncheon);
      if (nofreeluncheon)
        Object.keys(nofreeluncheon).forEach(id => {
          let elapsedTime = nofreeluncheon[id].elapsedTime;
          if (elapsedTime > 300000) {
            localStorage.clear();
            window.location =
              window.location.origin + window.location.pathname + "?lang=eng";
          }
        });
    }
  }, 1000);
  console.log("HOTSTAR HACK RUNNING");
}
