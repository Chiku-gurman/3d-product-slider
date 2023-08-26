setInterval(work,10);
function work(){
    var range = document.getElementById('ramge').value;
    var maini = document.getElementById('main');
    maini.innerHTML='<img src="images/'+range+'.jpg" alt="">';
}   