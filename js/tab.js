const attend = document.getElementById('attend');
const advance = document.getElementById('advance');
const nround = document.getElementById('nround');
const bonus = document.getElementById('bonus');

const final = document.getElementById('final');
const crown = document.getElementById('crown');

const tabs = document.getElementById('tabs');
const tabf = document.getElementById('tabForm');

const selectp = document.getElementById('selectP');
const selectt = document.getElementById('selectT');

const pointInputs = document.querySelectorAll('.tab_content input')

let attendPoint;
let advancePoint;
let nr;
let bonusPoint;
let finalPoint;
let crownPoint;
let winPoint;

function setPointvalue() {
    if(!(tabs.elements[2].checked)){
        if(tabs.elements[0].checked){
            attend.value = 1;
            advance.value = 2;
            bonus.value = 0;
            nround.value = 1;
            final.value = 3;
            crown.value = 20;
        }
        else{
            attend.value = 1;
            advance.value = 1;
            bonus.value = 5;
            nround.value = 3;
    
            final.value = 5;
            crown.value = 10;
        }
        for(let i=0;i<pointInputs.length;i++){
            pointInputs[i].style.border = 'none';
        }
        nround.style.backgroundColor = ""
        attend.disabled=true;
        advance.disabled=true;
        bonus.disabled=true;
        nround.disabled=true;
        final.disabled=true;
        crown.disabled=true;
    }
    
    else{
        attend.value = '';
        advance.value = '';
        bonus.value = '';
        nround.value = '';

        final.value = '';
        crown.value = '';

        nround.style.backgroundColor = "#ff9595"
        for(let i=0;i<pointInputs.length;i++){
            pointInputs[i].style.border = 'solid 1px';
        }
        attend.disabled=false;
        advance.disabled=false;
        bonus.disabled=false;
        nround.disabled=false;
        final.disabled=false;
        crown.disabled=false;
    }
}

tabs.addEventListener("change", setPointvalue, false);