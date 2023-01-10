let members = [{
        name: 'John',
        age: '56',
        scores: {
            darts: 125,
            snooker: 34,
            bridge: 1986
        },
    },
    {
        name: 'Mary',
        age: '21',
        scores: {
            darts: 96,
            snooker: 147,
            bridge: 3002
        },
    },
    {
        name: 'Barb',
        age: '73',
        scores: {
            darts: 180,
            snooker: 130,
            bridge: 1032
        },
    },
    {
        name: 'Murray',
        age: '102',
        scores: {
            darts: 126,
            snooker: 98,
            bridge: 3001
        },
    },
    {
        name: 'Ceinwen',
        age: '13',
        scores: {
            darts: 180,
            snooker: 147,
            bridge: 1504
        },
    },
    {
        name: 'Andrew',
        age: '43',
        scores: {
            darts: 34,
            snooker: 45,
            bridge: 2574
        },
    },
    {
        name: 'Makka',
        age: '56',
        scores: {
            darts: 78,
            snooker: 129,
            bridge: 1689
        },
    },
    {
        name: 'Newt',
        age: '65',
        scores: {
            darts: 35,
            snooker: 102,
            bridge: 3200
        },
    }
];

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

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function handleSubmit(event) {
    event.preventDefault();

    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let darts = document.getElementById('darts');
    let snooker = document.getElementById('snooker');
    let bridge = document.getElementById('bridge');

    let userResultsTable = document.createElement('table');

    let userTableHtml = `
    <thead>
        <tr>
            <td>${capitalise(name.name)}</td>
            <td>${capitalise(age.name)}</td>
            <td>${capitalise(darts.name)}</td>
            <td>${capitalise(snooker.name)}</td>
            <td>${capitalise(bridge.name)}</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${name.value}</td>
            <td>${age.value}</td>
            <td>${darts.value}</td>
            <td>${snooker.value}</td>
            <td>${bridge.value}</td>
        </tr>
    </tbody>
    `

    userResultsTable.innerHTML = userTableHtml;
    document.getElementById("results-user").appendChild(userResultsTable);

    clearBoxes();
    changeElements();
    


}