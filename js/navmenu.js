const closeBtn=document.querySelector('.hide-btn');
const showBtn=document.querySelector('.show-btn');

function showMenu(){
    document.querySelector('.nav-buttons').style.right="0";
}
function hideMenu(){
    document.querySelector('.nav-buttons').style.right="-200px";
}

closeBtn.addEventListener('click',hideMenu);
showBtn.addEventListener('click',showMenu)