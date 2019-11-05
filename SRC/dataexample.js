const score = [
    {
        name: 'Jon',
        score: 1500,
        scale: 'c Major',

    },
    {
        name: 'Emma',
        score: 1500,
        scale: 'd Major',

    },
    {
        name: 'Bob',
        score: 1500,
        scale: 'd Major',

    },
    {
        name: 'Susan',
        score: 1500,
        scale: 'c Major',

    },
];


let lastGame = {name: 'Uros', score: 1200, scale: 'c Major'};

// TRY TO GET DATA FROM LOCAL STORAGE
// localStorage.getItem("score")

var localStorageScoreString = localStorage.getItem('score') === null

if(localStorageScoreString === null) {
    var scoreArray = [];

    scoreArray.push(lastGame);
    var scoreStringified = JSON.stringify(scoreArray);
    localStorage.setItem("score", scoreStringified)
}else if (localStorageScoreString){
    var scoreArray = JSON.parse(localStorageScoreString);

    scoreArray.push(lastGame);

    // CALCULATE AVERAGE


    // ONLY AFTER CALCULATION
    var scoreStringified = JSON.stringify(scoreArray);
    localStorage.setItem("score", scoreStringified)

}



// CALCULATE AVERAGE
let lastGameScale = lastGame.scale;

score.push(lastGame)

let allScores = 0;
const currentScale = score.filter((score) => {
    if (score.scale === lastGameScale) {
        allScores += score;
        return true;
    }
})

const averageScore = allScores / currentScale.length;


currentScale.sort( (a,b) => a.score - b.score);

// SHOW THE RESULT
console.log(currentScale);

// SET BACK TO THE LOCAL STORAGE



