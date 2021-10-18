/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Botones header@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$-Switch-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const btnswitch = document.querySelector('#switch');
						btnswitch.addEventListener('click',() =>{
						  document.body.classList.toggle('dark');
						  btnswitch.classList.toggle('active');
              //Guardar el modo en localstorage.
              if (document.body.classList.contains('dark')){
                localStorage.setItem('dark-mode', 'true');
              } else {
                localStorage.setItem('dark-mode', 'false');
              }
});
//obtener el modo actual.
if(localStorage.getItem('dark-mode') ==='true'){
  document.body.classList.add('dark');
  btnswitch.classList.add('active');
}else {
  document.body.classList.remove('dark');
  btnswitch.classList.remove('active');
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$-Ayuda-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const btnayuda = document.querySelector('#ayuda');
						btnayuda.addEventListener('click',() =>{
						  btnayuda.classList.toggle('active');
});
//obtener el modo actual.
if(localStorage.getItem('active') ==='true'){
  btnayuda.classList.add('active');
}else {
  btnayuda.classList.remove('active');
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$-Notificaciones-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const btnnotificaciones = document.querySelector('#notificaciones');
						btnnotificaciones.addEventListener('click',() =>{
						  btnnotificaciones.classList.toggle('active');
});
//obtener el modo actual.
if(localStorage.getItem('active') ==='true'){
  btnnotificaciones.classList.add('active');
}else {
  btnnotificaciones.classList.remove('active');
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$-Perfil-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const btnperfil = document.querySelector('#perfil');
						btnperfil.addEventListener('click',() =>{
						  btnperfil.classList.toggle('active');
});
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Botones header@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$-Menu-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const btnmenu = document.querySelector('#menu');
						btnmenu.addEventListener('click',() =>{
						  document.body.classList.toggle('menu');
						  btnmenu.classList.toggle('active');
              //Guardar el modo en localstorage.
              if (document.body.classList.contains('menu')){
                localStorage.setItem('menu', 'true');
              } else {
                localStorage.setItem('menu', 'false');
              }
});
//obtener el modo actual.
if(localStorage.getItem('menu') ==='true'){
  document.body.classList.add('menu');
  btnmenu.classList.add('active');
}else {
  document.body.classList.remove('menu');
  btnmenu.classList.remove('active');
}
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Marca aside hover@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/*let marker = document.querySelector('#marker');
let list = document.querySelectorAll('aside li');
function moveIndicator(e){
  marker.style.top = e.offsetLeft+'px';
  marker.style.width = e.offsetWidth+'px';
}
list.forEach(link =>{
  link.addEventListener('mousemove',(e)=>{
    moveIndicator(e.target);
  })
})
function activelink(){
  list.forEach((item)=>
  item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('mouseover',activelink));*/