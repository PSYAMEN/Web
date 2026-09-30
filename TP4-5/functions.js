function load(){
    listeTache();
    updateStats();
    const theme=getCookie("themes");
    if(theme!=""){
        const allTheme=theme.split(' ')
        for (let i=0;i<allTheme.length;i++){
            document.getElementById("body").classList.add(allTheme[i]);
        }
    }
}


function setLightDark(){
    const currentThemes=getCookie("themes");
    if(currentThemes.includes("dark")){
        document.getElementById("body").classList.remove("dark");
        document.cookie="themes="+document.getElementById("body").classList
    }
    else{
        document.getElementById("body").classList.add("dark");
        document.cookie="themes="+getCookie("themes")+" dark";
    }

    document.getElementById("placeholder").innerHTML=getCookie("themes");
}
function setEasyRead(){
        const currentThemes=getCookie("themes");
    if(currentThemes.includes("easyRead")){
        document.getElementById("body").classList.remove("easyRead");
        document.cookie="themes="+document.getElementById("body").classList
    }
    else{
        document.getElementById("body").classList.add("easyRead");
        document.cookie="themes="+getCookie("themes")+" easyRead";
    }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function listeTache(){
    const data = getCookie("tachesAFaire");
    const sortedData = data.split(',');
    const list = document.getElementById("tachesAFaire");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    if(data!=""){
        for (let i = 0; i < sortedData.length; i++) {
            const li = document.createElement("li");
            li.innerText = sortedData[i];
            list.appendChild(li);
        }
        if(sortedData.length!=0){
            document.getElementById("aucuneTache").innerHTML=""
        }
    }
}

function ajoutTache(){
    const nouvelleTache=document.getElementById("NTache").value;
    if(nouvelleTache!=""){
        if(getCookie("tachesAFaire")==""){
            document.cookie="tachesAFaire="+nouvelleTache;
        }
        else{
            document.cookie="tachesAFaire="+getCookie("tachesAFaire")+","+nouvelleTache;
        }
    }
    document.cookie="tachesAFaire=";
    document.cookie="tachesFaites=";
    listeTache();
    updateStats();
}   

function updateStats(){
    const tachesAFaire=getCookie("tachesAFaire");
    const tachesFaites=getCookie("tacheFaites");
    let total=0;
    let aFaire=0;
    let fini=0;
    if(tachesAFaire!=""){
        tachesAFaire.split(',').forEach( element => {total++;aFaire++;});
    }
    if(tachesFaites!=""){
        tachesFaites.split(',').forEach( element => {total++;fini++;});
    }
    document.getElementById("terminees").innerHTML=document.getElementById("terminees").innerHTML.split(':')[0]+": "+fini;
    document.getElementById("total").innerHTML=document.getElementById("total").innerHTML.split(':')[0]+": "+total;
    document.getElementById("restantes").innerHTML=document.getElementById("restantes").innerHTML.split(':')[0]+": "+aFaire;
}