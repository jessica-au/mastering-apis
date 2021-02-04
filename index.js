const fetch = require('node-fetch');

// fetch('https://espn.com')
// .then((response) => {
//     return response.text();
// })
// .then((html) => {
//     console.log(html);
// })

fetch('https://api.github.com/users/facebook')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
});

fetch("https://api.spacexdata.com/v3/capsules") //endpoint 
.then(response => {
    return response.json(); // .json() changes the original response so we can work with it in js
})
.then(dataArray => {
    //console.log(dataArray) // this is an array
    let c102Object = dataArray[1]; //this returns an object
    let capsuleSerial = c102Object['capsule_serial'] //bracket notation MUST be used for keys with underscores. dot notation will not work
    let capsuleStatus = c102Object.status;
    console.log(c102Object)
    console.log(capsuleSerial)
    console.log(capsuleStatus)
})