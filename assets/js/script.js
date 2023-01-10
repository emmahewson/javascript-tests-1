let members = [{
        name: 'John',
        age: 56,
        scores: {
            darts: 125,
            snooker: 34,
            bridge: 1986
        },
    },
    {
        name: 'Mary',
        age: 21,
        scores: {
            darts: 96,
            snooker: 147,
            bridge: 3002
        },
    },
    {
        name: 'Barb',
        age: 73,
        scores: {
            darts: 180,
            snooker: 130,
            bridge: 1032
        },
    },
    {
        name: 'Murray',
        age: 102,
        scores: {
            darts: 126,
            snooker: 98,
            bridge: 3001
        },
    },
    {
        name: 'Ceinwen',
        age: 13,
        scores: {
            darts: 180,
            snooker: 147,
            bridge: 1504
        },
    },
    {
        name: 'Andrew',
        age: 43,
        scores: {
            darts: 34,
            snooker: 45,
            bridge: 2574
        },
    },
    {
        name: 'Makka',
        age: 56,
        scores: {
            darts: 78,
            snooker: 129,
            bridge: 1689
        },
    },
    {
        name: 'Newt',
        age: 65,
        scores: {
            darts: 35,
            snooker: 102,
            bridge: 3200
        },
    }
];


function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function userResultsTable() {
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let darts = document.getElementById('darts');
    let snooker = document.getElementById('snooker');
    let bridge = document.getElementById('bridge');

    let userResultsTable = document.createElement('table');

    let userTableHtml = `
    <thead>
        <tr>
            <th>${capitalise(name.name)}</th>
            <th>${capitalise(age.name)}</th>
            <th>${capitalise(darts.name)}</th>
            <th>${capitalise(snooker.name)}</th>
            <th>${capitalise(bridge.name)}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td id="user-name">${name.value}</td>
            <td id="user-age">${age.value}</td>
            <td id="user-darts">${darts.value}</td>
            <td id="user-snooker">${snooker.value}</td>
            <td id="user-bridge">${bridge.value}</td>
        </tr>
    </tbody>
    `
    userResultsTable.innerHTML = userTableHtml;
    document.getElementById("results-user").appendChild(userResultsTable);
}


function createMemberResultsTable() {

    let html = `
        <h2>Other Members' Results</h2>
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

}


function clearBoxes() {
    let answerBoxes = document.getElementsByClassName("answer-box");
    for (let answerBox of answerBoxes) {
        answerBox.value = "";
    }
}


function changeElements() {
    let form = document.getElementById("stats-form");
    form.style.display = 'none';
    let openingText = document.getElementById("opening-text");
    openingText.innerHTML = "<p>How do you compare?</p>";
}


function handleSubmit(event) {
    event.preventDefault();
    userResultsTable();
    createMemberResultsTable();
    clearBoxes();
    changeElements();
}

function compareMaster(arr, num) {
    let totalNum = 0;
    let noOfMembers = 0;

    for(let member of arr) {
        totalNum += member[num];
        noOfMembers++;
    }
    return Math.floor(totalNum / noOfMembers);
}

function compareAge() {
    let averageAge = compareMaster(members, 'age');
    let ageCompareText = document.getElementById("age-compare-text");
    let userAge = document.getElementById('user-age').textContent;
    let ageComparison = "";
    if (userAge > averageAge) {
        ageComparison = "You are " + (userAge - averageAge) + " years older than the average :-(";
    } else if (userAge < averageAge) {
        ageComparison = "You are " + (averageAge - userAge) + " years younger than average!";
    } else if (userAge === averageAge) {
        ageComparison = "You are exactly the average age!";
    };

    ageCompareText.innerHTML = `
        <p>The average age is ${averageAge}</p>
        <p>Your age is ${userAge}</p>
        <p>${ageComparison}</p>`


}

