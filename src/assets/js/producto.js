
window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex2){
        modal.style.display = 'none';
        console.log('sssss');
    }
    else{
        console.log('ddddd');
    }
});

let modal = document.getElementById('MiModal');
let flex2 = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');


cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

