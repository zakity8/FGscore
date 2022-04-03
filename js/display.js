let tt1;
let tt3;

let pt1;
let pt3;

let select;
let pNameName;
let tName;
let name0;
let name1;
let name2;
let name3;
let name4;
let namet;
let pTables;
let tTables;
window.addEventListener("load", function() {
    console.log('ページの読み込みが完了');
    tt1 = document.getElementById('tTable1');
    tt3 = document.getElementById('tTable3');
    pt1 = document.getElementById('pTable1');
    pt3 = document.getElementById('pTable3');
    select = document.getElementById('select');
    pName = document.getElementById('personalName');
    tName = document.getElementById('teamName');
    name0 = document.getElementById('name0')
    name1 = document.getElementById('name1')
    name2 = document.getElementById('name2')
    name3 = document.getElementById('name3')
    name4 = document.getElementById('name4')
    namet = document.getElementById('namet')
    pTables = document.getElementById('personalTables');
    tTables = document.getElementById('teamTables');
    select.style.display = 'block'
});

function tohome() {
    location.reload();
    /*
    name0.value = '';
    name1.value = '';
    name2.value = '';
    name3.value = '';
    name4.value = '';
    for (let i = 1; i < 11; i++){
        for (let j = 1; j < 12; j++){
            if(j<11){
                pt1.rows[i].cells[j].style.backgroundColor = '';
                pt1.rows[i].cells[j].style.pointerEvents = 'auto';
            }
            else pt1.rows[i].cells[j].firstChild.data = 0;
        }
    }
    pt3.rows[1].cells[1].firstChild.data = 0;

    for (let s = 1; s < 41; s++){
        for (let t = 1; t < 12; t++){
            if(s%4 != 1 && t < 11){
                tt1.rows[s].cells[t].style.backgroundColor = '';
                tt1.rows[s].cells[t].style.pointerEvents = 'auto';
            }
            else pt1.rows[i].cells[j].firstChild.data = 0;
        }
    }
    tt3.rows[1].cells[1].firstChild.data = 0;

    select.style.display = 'block'
    pName.style.display = 'none';
    tName.style.display = 'none';
    pTables.style.display = 'none';
    tTables.style.display = 'none';*/
}

function personalClick() {
    select.style.display = 'none';
    pName.style.display = 'block';
}
function teamClick() {
    select.style.display = 'none';
    tName.style.display = 'block';
}
function showPtable() {
    if (!(name0.value)){
        alert('配信者の名前を入力してください')
    }
    else {
        pt1.rows[0].cells[0].firstChild.data = name0.value;
        pt3.rows[1].cells[0].firstChild.data = name0.value;
        pName.style.display = 'none';
        pTables.style.display = 'block';
    }
}

function showTtable() {
    if (!(namet.value) || !(name1.value) || !(name2.value) || !(name3.value) || !(name4.value)){
        alert('すべて入力してください')
    }
    else {
        for(let k = 1; k < 41; k++) {
            if(k%4 == 1)
                tt1.rows[k].cells[1].firstChild.data = name1.value;
            else if(k%4 == 2)
                tt1.rows[k].cells[0].firstChild.data = name2.value;
            else if(k%4 == 3)
                tt1.rows[k].cells[0].firstChild.data = name3.value;
            else
                tt1.rows[k].cells[0].firstChild.data = name4.value;
        }
        tt3.rows[1].cells[0].firstChild.data = name1.value;
        tt3.rows[2].cells[0].firstChild.data = name2.value;
        tt3.rows[3].cells[0].firstChild.data = name3.value;
        tt3.rows[4].cells[0].firstChild.data = name4.value;
        tt1.rows[0].cells[0].firstChild.data = namet.value;
        tName.style.display = 'none';
        tTables.style.display = 'block';
    }
}