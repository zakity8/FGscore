let pTables;
let tTables;
let tt1;
let tt3;
let pt1;
let pt3;

let select;

let form1;
let form2;

let player;
let tName;
let member1;
let member2;
let member3;
let member4;

let dl;

window.addEventListener("load", function() {
    console.log('ページの読み込みが完了');

    pTables = document.getElementById('form1Tables');
    tTables = document.getElementById('form2Tables');

    tt1 = document.getElementById('tTable1');
    tt3 = document.getElementById('tTable3');
    pt1 = document.getElementById('pTable1');
    pt3 = document.getElementById('pTable3');

    select = document.getElementById('select');

    form1 = document.getElementById('form1');
    form2 = document.getElementById('form2');

    player = document.getElementById('player');
    tName = document.getElementById('teamName');
    member1 = document.getElementById('member1');
    member2 = document.getElementById('member2');
    member3 = document.getElementById('member3');
    member4 = document.getElementById('member4');
    dl = document.getElementById('download');
    select.style.display = 'block'
});

function tohome() {
    location.reload();
}

function showForm1() {
    select.style.display = 'none';
    form1.style.display = 'block';
}
function showForm2() {
    select.style.display = 'none';
    form2.style.display = 'block';
}
function showPtable() {
    if (!(player.value)){
        alert('配信者の名前を入力してください')
    }
    else {
        pt1.rows[0].cells[0].firstChild.data = player.value;
        pt3.rows[1].cells[0].firstChild.data = player.value;
        form1.style.display = 'none';
        pTables.style.display = 'block';
        dl.style.display = 'inline-block';
    }
}

function showTtable() {
    if (!(tName.value) || !(member1.value) || !(member2.value) || !(member3.value) || !(member4.value)){
        alert('すべて入力してください')
    }
    else {
        for(let k = 1; k < 41; k++) {
            if(k%4 == 1)
                tt1.rows[k].cells[1].firstChild.data = member1.value;
            else if(k%4 == 2)
                tt1.rows[k].cells[0].firstChild.data = member2.value;
            else if(k%4 == 3)
                tt1.rows[k].cells[0].firstChild.data = member3.value;
            else
                tt1.rows[k].cells[0].firstChild.data = member4.value;
        }
        tt3.rows[1].cells[0].firstChild.data = member1.value;
        tt3.rows[2].cells[0].firstChild.data = member2.value;
        tt3.rows[3].cells[0].firstChild.data = member3.value;
        tt3.rows[4].cells[0].firstChild.data = member4.value;
        tt1.rows[0].cells[0].firstChild.data = tName.value;
        form2.style.display = 'none';
        tTables.style.display = 'block';
        dl.style.display = 'inline-block';
    }
}
