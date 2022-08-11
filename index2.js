function getConsoles(){
    fetch(`https://api.rawg.io/api/platforms?key=60f2de79bd864d66a0bbb8cabebcb5e0`)
    .then(response => response.json())
    .then(data => {
        console.log("succes",data);
        console.log(data.results.length);
        for (let i = 0; i < data.results.length; i++) {

            let containerInfo = document.getElementById("container");
            let htmlString = 
                `<div class="console">
                <h2>${data.results[i].name}</h2>
                <p>Games count: ${data.results[i].games_count}</p>
                </div>`;

        containerInfo.insertAdjacentHTML('beforeend', htmlString);
          }

    });
}
getConsoles();

function getConsolesGames(){
    fetch(`https://api.rawg.io/api/platforms?key=60f2de79bd864d66a0bbb8cabebcb5e0`)
    .then(response => response.json())
    .then(data => {
        console.log("succes",data);
        console.log(data.results);
        for (let i = 1; i < data.results.length; i++) {
            let j = 1; j < data.results.length; j++;
            let containerInfo = document.getElementById("consoleGames");
            let htmlString = 
                `<div class="consoleGames">
                <h2>${data.results[i].games[j+1].name}</h2>
                </div>`;

        containerInfo.insertAdjacentHTML('beforeend', htmlString);
          }

    });
}
getConsolesGames();




function getPcGames(){
    fetch(`https://api.rawg.io/api/platforms?key=60f2de79bd864d66a0bbb8cabebcb5e0`)
    .then(response => response.json())
    .then(data => {
        console.log("succes",data);
        console.log(data.results);
        for (let i = 0; i < data.results.length; i++) {

            let containerInfo = document.getElementById("pcGames");
            let htmlString = 
                `<div class="pcGames">
                <h2>${data.results[0].games[i].name}</h2>
                </div>`;

        containerInfo.insertAdjacentHTML('beforeend', htmlString);
          }

    });
}
getPcGames();


window.onload = () => {
    async function runTest(){
        const resp = await fetch('');
        const data = await resp.json();

        document.getElementById('dbContent').innerText = JSON.stringify(data);
        console.log(data);
    }
    runTest();
};




