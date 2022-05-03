let nn = 0;
let cellStart = 0;
let tsum1 = 0;
let tsum2 = 0;
let tsum3 = 0;
let tsum4 = 0;

function tcellClick(TD) {
    //console.log(TD.parentNode.rowIndex); //y
    //console.log(TD.cellIndex);           //x
    
    if(TD.parentNode.rowIndex%4 == 1) {
        nn = 12;
        cellStart = 2;
    }
    else {
        nn = 11;
        cellStart = 1;
    }
    /*もし、2列目以降で前のcellが選択されてなかったら*/
    if (TD.cellIndex > cellStart && tt1.rows[TD.parentNode.rowIndex].cells[TD.cellIndex - 1].style.backgroundColor == '') {
        /*alart 順番に選択してください。*/
        alert('順番に選択してください。');
    }
    /*青色にする*/
    else if (TD.style.backgroundColor == '') {
        TD.style.backgroundColor = '#8EA9DB';

        //2列目以降なら
        if (TD.cellIndex > cellStart) {
            tt1.rows[TD.parentNode.rowIndex].cells[TD.cellIndex - 1].style.pointerEvents = 'none';
        }
    }
    /*黄色にする*/
    else if (TD.style.backgroundColor == 'rgb(142, 169, 219)') {
        TD.style.backgroundColor = '#FFFF00';
        //同じ行で以降の列のcellの入力をなくす。
        for (let i = TD.cellIndex + 1; i < nn; i++) {
            tt1.rows[TD.parentNode.rowIndex].cells[i].style.pointerEvents = 'none';
            tt1.rows[TD.parentNode.rowIndex].cells[i].style.backgroundColor = '#5f5f5f'
        }
        //小計を入力(TD.innerTextをコピペ)
        tt1.rows[TD.parentNode.rowIndex].cells[nn].firstChild.data = TD.innerText;
    }
    /*橙色にする*/
    else if (TD.style.backgroundColor == 'rgb(255, 255, 0)') {
        TD.style.backgroundColor = '#FFC000';

        //小計を入力(TD.innerText + 3)
        tt1.rows[TD.parentNode.rowIndex].cells[nn].firstChild.data = parseInt(TD.innerText) +3;
    }
    /*赤色にする*/
    else if (TD.style.backgroundColor == 'rgb(255, 192, 0)') {
        TD.style.backgroundColor = '#FF0000';

        //小計を入力(TD.innerText + 23)
        tt1.rows[TD.parentNode.rowIndex].cells[nn].firstChild.data = parseInt(TD.innerText) +3 +20;
    }
    /*戻す*/
    else {
        TD.style.backgroundColor = '';

        //ひとつ前のcell入力再開
        tt1.rows[TD.parentNode.rowIndex].cells[TD.cellIndex - 1].style.pointerEvents = 'auto';
        //同じ行で以降の列のcellの入力を再度受け付ける。
        for (let i = TD.cellIndex + 1; i < nn; i++) {
            tt1.rows[TD.parentNode.rowIndex].cells[i].style.pointerEvents = 'auto';
            tt1.rows[TD.parentNode.rowIndex].cells[i].style.backgroundColor = ''
        }
        //小計を0にする
        tt1.rows[TD.parentNode.rowIndex].cells[nn].firstChild.data = 0;
    }

    tsum1 = tsum2 = tsum3 = tsum4 = 0;
    for (let j = 1; j < 41; j++){
        if(j%4 == 1)
            tsum1 += parseInt(tt1.rows[j].cells[12].firstChild.data);
        else if(j%4 == 2)
            tsum2 += parseInt(tt1.rows[j].cells[11].firstChild.data);
        else if(j%4 == 3)
            tsum3 += parseInt(tt1.rows[j].cells[11].firstChild.data);
        else
            tsum4 += parseInt(tt1.rows[j].cells[11].firstChild.data);
    }

    tt3.rows[1].cells[1].firstChild.data = tsum1;
    tt3.rows[2].cells[1].firstChild.data = tsum2;
    tt3.rows[3].cells[1].firstChild.data = tsum3;
    tt3.rows[4].cells[1].firstChild.data = tsum4;
    tt3.rows[5].cells[1].firstChild.data = tsum1 + tsum2 + tsum3 + tsum4;
}