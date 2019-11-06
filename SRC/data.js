// function Data (score, scale){
// this.score = score;
// this.scale = scale;

// }

function data (score, scaleName){
    let lastGame = { score: score , scale: scaleName};

    var localStorageScoreString = localStorage.getItem('scoreboard');

    if(localStorageScoreString === null) {
        var scoreArray = [];
    
        scoreArray.push(lastGame);
        var scoreStringified = JSON.stringify(scoreArray);
        localStorage.setItem("scoreboard", scoreStringified)
    }else if (localStorageScoreString){
        var scoreArray = JSON.parse(localStorageScoreString);
    
        scoreArray.push(lastGame);
    
    
    
    
        // CALCULATE AVERAGE
    
    
        // ONLY AFTER CALCULATION
        var scoreStringified = JSON.stringify(scoreArray);
        localStorage.setItem("scoreboard", scoreStringified)
        //console.log('checkkkk data ', localStorageScoreString);
        console.log('trrrry', localStorage.getItem("scoreboard"));
}
}





// const score = [
//     {
//         name: 'Jon',
//         score: 1500,
//         scale: 'c Major',

//     },
//     {
//         name: 'Emma',
//         score: 1500,
//         scale: 'd Major',

//     },
//     {
//         name: 'Bob',
//         score: 1500,
//         scale: 'd Major',

//     },
//     {
//         name: 'Susan',
//         score: 1500,
//         scale: 'c Major',

//     },
// ];




//console.log('okkkkkkkk', lastGame);

// TRY TO GET DATA FROM LOCAL STORAGE
      


//----------------





//--------------------



// CALCULATE AVERAGE
// let lastGameScale = lastGame.scale;

// score.push(lastGame)

// let allScores = 0;
// const currentScale = score.filter((score) => {
//     if (score.scale === lastGameScale) {
//         allScores += score;
//         return true;
//     }
// })

// const averageScore = allScores / currentScale.length;


// currentScale.sort( (a,b) => a.score - b.score);

// // SHOW THE RESULT
// console.log(currentScale);

// SET BACK TO THE LOCAL STORAGE



