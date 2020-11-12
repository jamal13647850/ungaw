window.addEventListener('DOMContentLoaded', (event) => {
    let timer   = document.getElementById("timer");
    let time    = 50;
    let ball    = document.getElementById("ball");
  
    let timerid = setInterval(()=>{
        time--;
        timer.innerHTML=time+" Seconds";
        if(time<1){
            endGame(time);
            clearInterval(timerid);
        }
    },1000)


    ball.addEventListener("click", ()=>{
        clearInterval(timerid);

        let Width  = ball.offsetWidth;
        let Height = ball.offsetHeight;
        let top    = ball.offsetTop;
        let left   = ball.offsetLeft;
        ball.classList.remove("anim");
        ball.classList.add("paused");

        ball.style.width = Width;
        ball.style.height = Height;
        ball.style.top = top;
        ball.style.left = left;


        endGame(time);
        
    });
});

const endGame = (time)=>{
let scoreList = JSON.parse(localStorage.getItem("scoresList"));

        alert("Your score is: "+time);

        for (var i = (scoreList.length-1); i >=0; i--) {
            if(scoreList[i].score==-1){
                scoreList[i]={name:scoreList[i].name,score:time}
                break;
            }
        }

        localStorage.removeItem("scoreList");
        localStorage.setItem("scoresList",JSON.stringify(scoreList) );

        window.location = "scoreList.html"
}