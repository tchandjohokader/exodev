function dropfunction(){
    document.getElementById('dropped').classList.toggle("dropdown-showed");
}

window.onclick=function(event){
    if (event.target.id!=='menubtn'){
        var dropdownDiv=document.getElementById('dropped');
        if (dropdownDiv.classList.contains('dropdown-showed')){
            dropdownDiv.classList.remove('dropdown-showed');
        }
    }
}

let start = Date.now();
let timer = setInterval(function(){
    let timepassed = Date.now()-start;
    if (timepassed >= 2000) {
        clearInterval(timer); // terminer l'animation après 2 secondes
        return;
    }
    draw(timepassed);
},20 );

// function draw(timepassed){
//     logo-id.style.left=timepassed /5 + 'px';
// }


