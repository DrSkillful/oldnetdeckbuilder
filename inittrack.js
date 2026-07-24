const initParty = [];
let initRound = 1;
let initTurn = 0;

function addInit() {
    initParty.push({name:document.getElementById("nameInput").value, pos:document.getElementById("numInput").value});
    document.getElementById("showInit").innerHTML = "";

    for(let i = 0; i<initParty.length;i++) {
        document.getElementById("showInit").innerHTML += `<p id="person${i}">${initParty[i].name}    ${initParty[i].pos}     <button onclick="initRemove(${i})" id="button${i}">Remove</button></p>`;
    }

}

function initRemove(num) {
    initParty.splice(num, 1);

    document.getElementById(`person${num}`).remove();
}

function beginInit() {
    initParty.sort((a, b) => b.pos - a.pos);

    document.getElementById("initAdder").remove();
    document.getElementById("showInit").innerHTML = " ";

    for(let i = 0; i<initParty.length;i++) {
        document.getElementById("showInit").innerHTML += `<p id="person${i}">${initParty[i].name}    ${initParty[i].pos}`;
    }

    document.getElementById("showInit").innerHTML += `<button onclick="moveInit()">Next</button>`;

    init();
}

function init() {
    document.getElementById("announce").innerHTML = `<h1>Round ${initRound}</h1>`;
    document.getElementById("announce").innerHTML += `<h2>${initParty[initTurn].name}'s turn!</h2>`;

    for(let i=0;i<initParty.length;i++) {
        if (i == initTurn) {
            document.getElementById(`person${i}`).style.color = "#0066ff";
        } else {
            document.getElementById(`person${i}`).style.color = "#ffffff";
        }
    }
}

function moveInit() {
    initTurn += 1;

    if (initTurn >= initParty.length) {
        initRound += 1;
        initTurn = 0;
    }

    console.log(initTurn);
    console.log(initParty.length)

    init();
}