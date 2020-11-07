
window.addEventListener('DOMContentLoaded', (event) => {
        
    //Declare all Variables and grab DOM elements using jQuery
    let btnMove = document.getElementsByClassName('btnMove')[0],
    btnChangeColor = document.getElementsByClassName('btnChangeColor')[0];
    btnRotation = document.getElementsByClassName('btnRotation')[0];
    btnChangeScale = document.getElementsByClassName('btnChangeScale')[0];
    btnBalls = document.getElementsByClassName('btnBalls')[0];
    let tl = new TimelineLite();
            


    btnMove.addEventListener("click", ()=>{
        tl.to("#rectangle", 1, {x: 200});
        tl.to("#rectangle", {duration: 1, y: 200});
        tl.to("#rectangle", 1, {x: 0});
        tl.to("#rectangle", {duration: 1, y: 0});
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
    
    btnBalls.addEventListener("click", ()=>{
        gsap
        .timeline({
            defaults: {
            duration: 1.5
            }
        })
        .to('.ball', {
            opacity: 1
        })
        .to('.ball2', {
            opacity: 1
        })
        .to('.ball3', {
            opacity: 1
        })
        .to('.ball', {
            rotationX: 360,
            rotationY: 180,
            x: 300,
            scale: 2,
            ease: "bounce"
        })
        .to('.ball2', {
            x: 300,
            scale: 2,
            ease: "bounce"
        })
        .to('.ball3', {
            x: 300,
            scale: 2,
            ease: "bounce"
        })
        
    });




});