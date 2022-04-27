const today = new Date();

const year = today.getFullYear();
let month = today.getMonth()+1;
if (month<10){
    month = '0'+month;
}
let date = today.getDate();
if (date<10){
    date = '0'+date;
}

const fileName = year+'_'+month+'_'+date;

function printPage() {
    if(pTables.style.display == 'block'){
        html2canvas(document.getElementById('form1Tables'), {
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            x:-35,
            y:-25,
            windowWidth: 1200,
            windowHeight: 400,
            width: 1200,
            height: 400
          }).then(canvas => { 
            let downloadEle = document.createElement("a");
            downloadEle.href = canvas.toDataURL("image/png");
            downloadEle.download = fileName+'.png';
            downloadEle.click();
        });
    }
    else{
        html2canvas(document.getElementById('form2Tables'), {
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            x:-35,
            y:-20,
            windowWidth: 1200,
            windowHeight: 1200,
            width: 1200,
            height: 1200
          }).then(canvas => { 
            let downloadEle = document.createElement("a");
            downloadEle.href = canvas.toDataURL("image/png");
            downloadEle.download = fileName+'.png';
            downloadEle.click();
        });
    }
}