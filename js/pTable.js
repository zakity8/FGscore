let psum = 0;

function cellClick(TD) {
    //console.log(TD.parentNode.rowIndex); //y
    //console.log(TD.cellIndex);           //x
    
    /*もし、2列目以降で前のcellが選択されてなかったら*/
    if (TD.cellIndex > 1 && pt1.rows[TD.parentNode.rowIndex].cells[TD.cellIndex-1].style.backgroundColor ==''){
        /*alart 順番に選択してください。*/
        alert('順番に選択してください。');
    }
    /*青色にする*/
    else if(TD.style.backgroundColor==''){
        TD.style.backgroundColor = '#8EA9DB';
        
        //2列目以降なら
        if (TD.cellIndex > 1){
            pt1.rows[TD.parentNode.rowIndex].cells[TD.cellIndex-1].style.pointerEvents = 'none';
        }
    }
    /*黄色にする*/
    else if (TD.style.backgroundColor=='rgb(142, 169, 219)'){
        TD.style.backgroundColor = '#FFFF00';
        //同じ行で以降の列のcellの入力をなくす。
        for (let i = TD.cellIndex + 1; i < 11; i++){
            pt1.rows[TD.parentNode.rowIndex].cells[i].style.pointerEvents = 'none';
            pt1.rows[TD.parentNode.rowIndex].cells[i].style.backgroundColor = '#5f5f5f'
        }
        //小計を入力(TD.innerTextをコピペ)
        pt1.rows[TD.parentNode.rowIndex].cells[11].firstChild.data = TD.innerText;
    }
    /*橙色にする*/
    else if (TD.style.backgroundColor=='rgb(255, 255, 0)'){
        TD.style.backgroundColor = '#FFC000';
        
        //小計に出力(TD.innerText + 3)
        pt1.rows[TD.parentNode.rowIndex].cells[11].firstChild.data = parseInt(TD.innerText) +parseInt(finalPoint);
    }
    /*赤色にする*/
    else if (TD.style.backgroundColor=='rgb(255, 192, 0)'){
        TD.style.backgroundColor = '#FF0000';
        
        //小計に出力(TD.innerText + 23)
        pt1.rows[TD.parentNode.rowIndex].cells[11].firstChild.data = parseInt(TD.innerText) +winPoint;
    }
    /*戻す*/
    else {
        TD.style.backgroundColor = '';
        
        //ひとつ前のcell入力再開
        pt1.rows[TD.parentNode.rowIndex].cells[TD.cellIndex-1].style.pointerEvents = 'auto';
        //同じ行で以降の列のcellの入力を再度受け付ける。
        for (let i = TD.cellIndex + 1; i < 11; i++){
            pt1.rows[TD.parentNode.rowIndex].cells[i].style.pointerEvents = 'auto';
            pt1.rows[TD.parentNode.rowIndex].cells[i].style.backgroundColor = ''
        }
        //小計を0にする
        pt1.rows[TD.parentNode.rowIndex].cells[11].firstChild.data = 0;
    }

    psum = 0;
    for (let j = 1; j < 11; j++){
        psum += parseInt(pt1.rows[j].cells[11].firstChild.data);
    }
    pt3.rows[1].cells[1].firstChild.data = psum
}