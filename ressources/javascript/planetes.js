
function writeText(txt) {
    document.getElementById("desc").innerHTML = txt;
}


function writeDefault() {
    document.getElementById("currentHover").src=""
    document.getElementById("currentHover").width="0"
    document.getElementById("currentHover").height="0"
    document.getElementById("desc").innerHTML = "Mouse over the sun and the planets and see the different descriptions.";
}

function switchSun(){
    document.getElementById("currentHover").src="images/sun.gif"
    document.getElementById("currentHover").width="145"
    document.getElementById("currentHover").height="126"
    writeText('The Sun and the gas giant planets like Jupiter are by far the largest objects in our Solar System.')
}

function switchMercury(){
    document.getElementById("currentHover").src="images/merglobe.gif"
    document.getElementById("currentHover").width="145"
    document.getElementById("currentHover").height="126"
    writeText('The planet Mercury is very difficult to study from the Earth because it is always so close to the Sun.')
}

function switchVenus(){
    document.getElementById("currentHover").src="images/venglobe.gif"
    document.getElementById("currentHover").width="145"
    document.getElementById("currentHover").height="126"
    writeText('Until the 1960s, Venus was often considered a twin sister to the Earth because Venus is the nearest planet to us, and because the two planets seem to share many characteristics.')
}
