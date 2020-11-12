window.addEventListener('DOMContentLoaded', (event) => {
    
    console.log( JSON.parse(localStorage.getItem("scoresList")))

    
})
const saveAndStart = ()=>{
    let scoreList =JSON.parse(localStorage.getItem("scoresList"));
    const input = document.getElementById("name");

    if(scoreList!==null){
        scoreList.push({name:input.value,score:-1});
        localStorage.setItem("scoresList",JSON.stringify(scoreList) );
    }
    else{
        console.log("henerre")
        localStorage.setItem("scoresList",JSON.stringify([
            {name:input.value,score:-1}
        ]) );
    }

    window.location = "game.html"
    
}