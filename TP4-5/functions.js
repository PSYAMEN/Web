function load(){
    const theme=getCookie("themes");
    if(theme!=""){
        const allTheme=theme.split(' ')
        for (let i=0;i<allTheme.length;i++){
            document.getElementById("body").classList.add(allTheme[i]);
        }
    }

    taches = JSON.parse(localStorage.getItem('taches'));
    if (taches!=""){
        document.getElementById("aucuneTache").innerHTML=""
    }
    
    document.getElementById("tachesAFaire").innerHTML=taches;
    updateStats();
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

function ajoutTache(){

    document.getElementById("aucuneTache").innerHTML="";
    const nouvelleTache=document.getElementById("NTache").value;
    if(nouvelleTache!=""){
        const list = document.getElementById("tachesAFaire");
        const li = document.createElement("li");
        li.innerText=nouvelleTache;

        //const checkbox=document.createElement("input");
        //checkbox.type="checkbox";
        //checkbox.checked="true";
        //li.appendChild(checkbox);
        list.append(li);
        saveData();
        updateStats();
    }
}

function saveData(){
    //console.log(document.getElementById("tachesAFaire").innerHTML);

    localStorage.setItem('taches',JSON.stringify(document.getElementById("tachesAFaire").innerHTML));
}   

function updateStats(){
    document.getElementById("total").innerHTML=document.getElementById("total").innerHTML.split(':')[0]+": "+document.getElementById("tachesAFaire").getElementsByTagName("li").length 
    document.getElementById("restantes").innerHTML=document.getElementById("restantes").innerHTML.split(':')[0]+": "+document.getElementById("tachesAFaire").getElementsByTagName("li").length 
    document.getElementById("terminees").innerHTML=document.getElementById("terminees").innerHTML.split(':')[0]+": "+document.getElementById("tachesAFaire").getElementsByTagName("li").length;
}