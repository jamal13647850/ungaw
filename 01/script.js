
window.addEventListener('DOMContentLoaded', (event) => {
        
    //Declare all Variables and grab DOM elements using jQuery
    let btnMoveRigth = document.getElementsByClassName('btnMoveRigth')[0],
    btnMoveLeft = document.getElementsByClassName('btnMoveLeft')[0];
    btnMoveBottom = document.getElementsByClassName('btnMoveBottom')[0];
    btnMoveTop = document.getElementsByClassName('btnMoveTop')[0];
    btnChangeColor = document.getElementsByClassName('btnChangeColor')[0];
    btnRotation = document.getElementsByClassName('btnRotation')[0];
    btnChangeScale = document.getElementsByClassName('btnChangeScale')[0];
    let tl = new TimelineLite();
            

    btnMoveRigth.addEventListener("click", ()=>{
        tl.to("#rectangle", 1, {x: 200})
    });

    btnMoveLeft.addEventListener("click", ()=>{
        tl.to("#rectangle", 1, {x: 0})
    });

    btnMoveTop.addEventListener("click", ()=>{
        tl.to("#rectangle", {duration: 1, y: 0})
    });

    btnMoveBottom.addEventListener("click", ()=>{
        tl.to("#rectangle", {duration: 1, y: 200})
        
    });
    
    btnChangeColor.addEventListener("click", ()=>{
        TweenLite.to("#rectangle", 2, {
            color:"#000000",
            ease: Power4.easeIn
        });
    });
    
    btnRotation.addEventListener("click", ()=>{
        tl.to("#rectangle", {duration: 1, rotation: 360})
    });
    
    btnChangeScale.addEventListener("click", ()=>{
        tl.to("#rectangle", {duration: 1, scale: 2});
    });
});