function update(){
    // input
    var nam = document.getElementById("subinput1").value;
    let ema = document.getElementById("subinput2").value;
    let num = document.getElementById("subinput3").value;

    // updated
    let upnam = document.getElementById("name");
    let upema = document.getElementById("email");
    let upcon = document.getElementById("contact");
    upnam.innerText = nam;
    upema.innerText = ema;
    upcon.innerText = num;

    //reset
    
}
 
// function reset(){
//     let alertbox = document.getElementById("alert-box");
//     alertbox.innerText = "Note this will reset the whole page";
//     upnam.value = '';
// }

function selecta(){
    let inselect1 = document.getElementById("input2-eduction-radio-subselect1");
    inselect1.style.display = "block";

    let inselect2 = document.getElementById("input2-eduction-radio-subselect2");
    inselect2.style.display = "none";
    let inselect3 = document.getElementById("input2-eduction-radio-subselect3");
    inselect3.style.display = "none";
}
function pera(){
    let input1per = document.getElementById("input1-per");
    let input2eductionradiosubselect1per = document.getElementById("input2-eduction-radio-subselect1-per");
    input1per.style.display = "inline";
    input2eductionradiosubselect1per.style.display = "inline";

    let input1gra = document.getElementById("input1-gra");
    let input2eductionradiosubselect1gra = document.getElementById("input2-eduction-radio-subselect1-gra");
    input1gra.style.display = "none";
    input2eductionradiosubselect1gra.style.display = "none";

}
function gra(){
    let input1gra = document.getElementById("input1-gra");
    let input2eductionradiosubselect1gra = document.getElementById("input2-eduction-radio-subselect1-gra");
    input1gra.style.display = "inline";
    input2eductionradiosubselect1gra.style.display = "inline";

    let input1per = document.getElementById("input1-per");
    let input2eductionradiosubselect1per = document.getElementById("input2-eduction-radio-subselect1-per");
    input1per.style.display = "none";
    input2eductionradiosubselect1per.style.display = "none";
}

function selectb(){
    let inselect2 = document.getElementById("input2-eduction-radio-subselect2");
    inselect2.style.display = "block";

    let inselect1 = document.getElementById("input2-eduction-radio-subselect1");
    inselect1.style.display = "none";
    let inselect3 = document.getElementById("input2-eduction-radio-subselect3");
    inselect3.style.display = "none";
}

function perc(){
    let input2per = document.getElementById("input3-per");
    let input2eductionradiosubselect1per = document.getElementById("input2-eduction-radio-subselect3-per");
    input2per.style.display = "inline";
    input2eductionradiosubselect1per.style.display = "inline";

    let input2gra = document.getElementById("input3-gra");
    let input2eductionradiosubselect1gra = document.getElementById("input2-eduction-radio-subselect3-gra");
    input2gra.style.display = "none";
    input2eductionradiosubselect1gra.style.display = "none";

}
function grc(){
    let input1gra = document.getElementById("input3-gra");
    let input2eductionradiosubselect1gra = document.getElementById("input2-eduction-radio-subselect3-gra");
    input1gra.style.display = "inline";
    input2eductionradiosubselect1gra.style.display = "inline";

    let input1per = document.getElementById("input3-per");
    let input2eductionradiosubselect1per = document.getElementById("input2-eduction-radio-subselect3-per");
    input1per.style.display = "none";
    input2eductionradiosubselect1per.style.display = "none";
}
function selectc(){
    let inselect3 = document.getElementById("input2-eduction-radio-subselect3");
    inselect3.style.display = "block";

    let inselect1 = document.getElementById("input2-eduction-radio-subselect1");
    inselect1.style.display = "none";
    let inselect2 = document.getElementById("input2-eduction-radio-subselect2");
    inselect2.style.display = "none";
}

