function OnOffAmpoule(){
    const currentSource=String(document.getElementById("ampoule").src)
    if (currentSource=="file:///home/psyamen/Polytech/3A/WEB/Web/ressources/images/pic_bulbon.gif"){
        document.getElementById('ampoule').src="images/pic_bulboff.gif";
    }
    else{
        document.getElementById('ampoule').src="images/pic_bulbon.gif";
    }
}
