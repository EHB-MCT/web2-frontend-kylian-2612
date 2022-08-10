let Games = [];
let outdoor = [];

function getData(){
    fetch('https://data.mongodb-api.com/app/data-tsxzy/endpoint/data/v1')
    .then(response => {
        return response.json();
    }).then(data => {
        Games = data.Games
        for(let element of Games){
            fetch(element.detail).then(response => {
                return response.json();
            }).then(data =>{
                outdoor.push(data);
            })
        }
    });
}