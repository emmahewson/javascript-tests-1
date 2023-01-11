// member details array

let members = [{
        name: 'John Dudley',
        age: 56,
        scores: {
            darts: 125,
            snooker: 34,
            bridge: 1986
        },
    },
    {
        name: 'Mary Shelley',
        age: 21,
        scores: {
            darts: 96,
            snooker: 147,
            bridge: 3002
        },
    },
    {
        name: 'Barb Cartland',
        age: 73,
        scores: {
            darts: 180,
            snooker: 130,
            bridge: 1032
        },
    },
    {
        name: 'Murray Walker',
        age: 102,
        scores: {
            darts: 126,
            snooker: 98,
            bridge: 3001
        },
    },
    {
        name: 'Ceinwen Jones',
        age: 13,
        scores: {
            darts: 180,
            snooker: 147,
            bridge: 1504
        },
    },
    {
        name: 'Andrew Marr',
        age: 43,
        scores: {
            darts: 34,
            snooker: 45,
            bridge: 2574
        },
    },
    {
        name: 'Makka Paul',
        age: 56,
        scores: {
            darts: 78,
            snooker: 129,
            bridge: 1689
        },
    },
    {
        name: 'Newt Scamander',
        age: 65,
        scores: {
            darts: 35,
            snooker: 102,
            bridge: 3200
        },
    }
];



// Submit Details - Helper Functions

// Function to capitalise array key names
function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to change styling on user results (helper for userResultsPrint)
function userResultsStyling() {
    let keys = document.getElementsByClassName("user-data-keys");

    for (key of keys) {
        key.style.fontWeight = "bold";
        key.style.color = 'darkblue'
    }
}

// Function to put the user's details in to a table
function userResultsPrint() {
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let darts = document.getElementById('darts');
    let snooker = document.getElementById('snooker');
    let bridge = document.getElementById('bridge');

    let userResultsText = document.createElement('table');

    let userResultsHtml = `

    <p><span class="user-data-keys">${capitalise(name.name)}:</span> <span id="user-name">${name.value}</span></p>
    <p><span class="user-data-keys">${capitalise(age.name)}:</span> <span id="user-age">${age.value}</span></p>
    <p><span class="user-data-keys">${capitalise(darts.name)}:</span> <span id="user-darts">${darts.value}</span></p>
    <p><span class="user-data-keys">${capitalise(snooker.name)}:</span> <span id="user-snooker">${snooker.value}</span></p>
    <p><span class="user-data-keys">${capitalise(bridge.name)}:</span> <span id="user-bridge">${bridge.value}</span></p>`
    
    
    userResultsText.innerHTML = userResultsHtml;
    document.getElementById("results-user").appendChild(userResultsText);
    userResultsStyling();

}

// Function to create a table from the members array and to add user data at the top
function createMemberResultsTable() {
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let darts = document.getElementById('darts');
    let snooker = document.getElementById('snooker');
    let bridge = document.getElementById('bridge');

    let html = `
        <h2>All Members' Results</h2>
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Darts</th>
            <th>Snooker</th>
            <th>Bridge</th>
        </tr>
        </thead>
        <tbody>
            <tr id="user-row">
                <td>${name.value}</td>
                <td>${age.value}</td>
                <td>${darts.value}</td>
                <td>${snooker.value}</td>
                <td>${bridge.value}</td>
            </tr>
`;

    for (i of members) {
        let rowHtml = `
            <tr>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.scores.darts}</td>
                <td>${i.scores.snooker}</td>
                <td>${i.scores.bridge}</td>
            </tr>
    `;
        html += rowHtml;
    }
    html += `
        </tbody>
  </table>
  `;

    document.getElementById('results-others').innerHTML = html;
    document.getElementById('user-row').style.backgroundColor = 'yellow';
}

// Function to append the user's scores to the member's table
function appendUserScores() {

}

// Function to clear the inputs from the input boxes (not needed as form disappears but leaving for reference)
function clearBoxes() {
    let answerBoxes = document.getElementsByClassName("answer-box");
    for (let answerBox of answerBoxes) {
        answerBox.value = "";
    }
}

// Function to hide and reveal elements on 'submit' click
function changeElements() {
    let form = document.getElementById("stats-form");
    form.style.display = 'none';
    let openingText = document.getElementById("opening-text");
    openingText.innerHTML = "<p>How do you compare?</p>";
    let compareDiv = document.getElementById("compare-div");
    compareDiv.style.display = 'block';
}

// Main function for Submission of User Data (helper functions above)
function handleSubmit(event) {
    event.preventDefault();
    changeElements();
    userResultsPrint();
    createMemberResultsTable();

}


// Comparison functions - buttons


// Helper function - age comparison - iterates through array to return average
function compareMaster(arr, num) {
    let totalNum = 0;
    let noOfMembers = 0;

    for(let member of arr) {
        totalNum += member[num];
        noOfMembers++;
    }
    return Math.floor(totalNum / noOfMembers);
}


// Function to compare ages (uses helper function above)
function compareAge() {
    let averageAge = compareMaster(members, 'age');
    let compareText = document.getElementById("compare-text");
    let userAge = document.getElementById('user-age').textContent;
    let ageComparison = "";
    if (userAge > averageAge) {
        ageComparison = "You are " + (userAge - averageAge) + " years older than the average :-(";
    } else if (userAge < averageAge) {
        ageComparison = "You are " + (averageAge - userAge) + " years younger than average!";
    } else if (userAge === averageAge) {
        ageComparison = "You are exactly the average age!";
    };

    compareText.innerHTML = `
        <p>The average age is ${averageAge}</p>
        <p>Your age is ${userAge}</p>
        <p>${ageComparison}</p>`

}


// Helper function - scores comparison - iterates through array to return average
function compareScoresMaster(arr, num, num2) {
    let totalNum = 0;
    let noOfMembers = 0;

    for(let member of arr) {
        totalNum += member[num][num2];
        noOfMembers++;
    }
    return Math.floor(totalNum / noOfMembers);
}


// Function to compare darts scores (uses helper function above)
function compareDarts() {
    let averageScore = compareScoresMaster(members, 'scores', 'darts');
    let compareText = document.getElementById("compare-text");
    let userScore = document.getElementById('user-darts').textContent;
    let scoreComparison = "";
    if (userScore > averageScore) {
        scoreComparison = "Your score is " + (userScore - averageScore) + " points higher than the average! Congratulations!";
    } else if (userScore < averageScore) {
        scoreComparison = "Your score is " + (averageScore - userScore) + " points lower than the average.";
    } else if (userScore === averageScore) {
        scoreComparison = "Your score is perfectly average!";
    };

    compareText.innerHTML = `
        <p>The average darts score is ${averageScore}</p>
        <p>Your score is ${userScore}</p>
        <p>${scoreComparison}</p>`
}


// Function to compare snooker scores (uses helper function above)
function compareSnooker() {
    let averageScore = compareScoresMaster(members, 'scores', 'snooker');
    let compareText = document.getElementById("compare-text");
    let userScore = document.getElementById('user-snooker').textContent;
    let scoreComparison = "";
    if (userScore > averageScore) {
        scoreComparison = "Your score is " + (userScore - averageScore) + " points higher than the average! Congratulations!";
    } else if (userScore < averageScore) {
        scoreComparison = "Your score is " + (averageScore - userScore) + " points lower than the average.";
    } else if (userScore === averageScore) {
        scoreComparison = "Your score is perfectly average!";
    };

    compareText.innerHTML = `
        <p>The average snooker score is ${averageScore}</p>
        <p>Your score is ${userScore}</p>
        <p>${scoreComparison}</p>`
}


// Function to compare bridge scores (uses helper function above)
function compareBridge() {
    let averageScore = compareScoresMaster(members, 'scores', 'bridge');
    let compareText = document.getElementById("compare-text");
    let userScore = document.getElementById('user-bridge').textContent;
    let scoreComparison = "";
    if (userScore > averageScore) {
        scoreComparison = "Your score is " + (userScore - averageScore) + " points higher than the average! Congratulations!";
    } else if (userScore < averageScore) {
        scoreComparison = "Your score is " + (averageScore - userScore) + " points lower than the average.";
    } else if (userScore === averageScore) {
        scoreComparison = "Your score is perfectly average!";
    };

    compareText.innerHTML = `
        <p>The average bridge score is ${averageScore}</p>
        <p>Your score is ${userScore}</p>
        <p>${scoreComparison}</p>`
}
