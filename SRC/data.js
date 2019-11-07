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
        //var updatedScores = localStorage.getItem("scoreboard");
    
    
    
        // CALCULATE AVERAGE
    
    
        // ONLY AFTER CALCULATION
        var scoreStringified = JSON.stringify(scoreArray);
        localStorage.setItem("scoreboard", scoreStringified)
        //console.log('checkkkk data ', localStorageScoreString);
        
    }


    var allScales = {
    cScale: {
        name: 'C / Am',
        sumOfScores: 0,
        count: 0,
    },
    cShScale: {
        name: 'C# / A#m',
        sumOfScores: 0,
        count: 0,
    },
    dScale: {
        name: 'D / Bm',
        sumOfScores: 0,
        count: 0,
    },
    dShScale: {
        name: 'D# / Cm',
        sumOfScores: 0,
        count: 0,
    },
    eScale: {
        name: 'E / C#m',
        sumOfScores: 0,
        count: 0,
    },
    fScale: {
        name: 'F / Dm',
        sumOfScores: 0,
        count: 0,
    },
    fShScale: {
        name: 'F# / D#m',
        sumOfScores: 0,
        count: 0,
    },
    gScale: {
        name: 'G / Em',
        sumOfScores: 0,
        count: 0,
    },
    gShScale: {
        name: 'G# / Fm',
        sumOfScores: 0,
        count: 0,
    },
    aScale: {
        name: 'A / F#m',
        sumOfScores: 0,
        count: 0,
    },
    aShScale: {
        name: 'A# / Gm',
        sumOfScores: 0,
        count: 0,
    },
    bScale: {
        name: 'B / G#m',
        sumOfScores: 0,
        count: 0,
    }
    }
    console.log('allScales', allScales)
    scoreArray.forEach(function(ele){
        switch (ele.scale) {

            case 'C / Am':
            allScales.cScale.count++;
            allScales.cScale.sumOfScores += ele.score; 
            break;
            case 'C# / A#m':
            allScales.cShScale.count++;
            allScales.cShScale.sumOfScores += ele.score;
            break;
            case 'D / Bm':
            allScales.dScale.count++;
            allScales.dScale.sumOfScores += ele.score;
            break;
            case 'D# / Cm':
            allScales.dShScale.count++;
            allScales.dShScale.sumOfScores += ele.score;
            break;
            case 'E / C#m':
            allScales.eScale.count++;
            allScales.eScale.sumOfScores += ele.score;
            break;
            case 'F / Dm':
            allScales.fScale.count++;
            allScales.fScale.sumOfScores += ele.score;
            break;
            case 'F# / D#m':
            allScales.fShScale.count++;
            allScales.fShScale.sumOfScores += ele.score;
            break;
            case 'G / Em':
            allScales.gScale.count++;
            allScales.gScale.sumOfScores += ele.score;
            break;
            case 'G# / Fm':
            allScales.gShScale.count++;
            allScales.gShScale.sumOfScores += ele.score;
            break;
            case 'A / F#m':
            allScales.aScale.count++;
            allScales.aScale.sumOfScores += ele.score;
            break;
            case 'A# / Gm':
            allScales.aShScale.count++;
            allScales.aShScale.sumOfScores += ele.score;
            break;
            case 'B / G#m':
            allScales.bScale.count++;
            allScales.bScale.sumOfScores += ele.score;
            break;

        };
    });

    document.getElementById('scale').innerHTML = scaleName;

    var printTable = `
        <tr>
            <th>Scale</th>
            <th>Times played</th>
            <th>Average score</th>
        </tr>
    `;
    for (let key in allScales){
        var average = 0;

        if ((allScales[key].sumOfScores/allScales[key].count).toFixed(1) > 0){
            average = (allScales[key].sumOfScores/allScales[key].count).toFixed(1);
        }
    

        printTable += `<tr id="score-row"><td>${allScales[key].name}</td><td>${allScales[key].count}</td><td>${average}</td></tr>`;
    };

    var scoreScreen = document.querySelector('table');
    scoreScreen.innerHTML = printTable;


    console.log(printTable);
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



