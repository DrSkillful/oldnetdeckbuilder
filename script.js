const deckLegends = [];
const deckColours = [];
let deckRedRAM = 0;
let deckYellowRAM = 0;
let deckBlueRAM = 0;
let deckGreenRAM = 0;
const deckCards = [];
let totalCards = 0;
const allCards = [];
const legends = [];
let totalUnits = 0;
let totalPrograms = 0;
let totalGear = 0;
const cardQuant = [];
let flag = 0;
let counter = 0;

for (let i=0; i < cards.length;i+=1) {
if (cards[i].cardType === "Legend") {
        legends.push(cards[i]);
    }
}

function showLegends() {
    let showPlace = document.getElementById("legendShow");
    let addedLegend = document.getElementById("legends");
    showPlace.innerHTML = "";
    addedLegend.innerHTML = "";
    
    for(let i = 0; i < legends.length; i++) {
        if(i%4 == 0) {
            showPlace.innerHTML += "<br>";
        }
        showPlace.innerHTML += `<button onclick="addLegend(${i})" class="legendButton"><img src=${legends[i].pic} width="180px", height="240px"></button>`;
    }
}

function addLegend(legendNum) {
    let showPlace = document.getElementById("legendShow");
    let addedLegend = document.getElementById("legends");
    showPlace.innerHTML = "";

    deckLegends.push(legends[legendNum]);
    deckColours.push(legends[legendNum].cardColour);

    switch(legends[legendNum].cardColour) {
        case "R":
            deckRedRAM += legends[legendNum].cardRAM;
            break;
        case "B":
            deckBlueRAM += legends[legendNum].cardRAM;
            break;
        case "Y":
            deckYellowRAM += legends[legendNum].cardRAM;
            break;
        case "G":
            deckGreenRAM += legends[legendNum].cardRAM;
            break;
    }
    
    for(let i = 0; i < deckLegends.length; i++) {
        addedLegend.innerHTML += `<button onclick="replaceLegend(${i})" class="legendButton2"><img src=${deckLegends[i].pic} width="180px", height="240px"></button>`;
    }
    legends.splice(legendNum, 1);
    document.getElementById(`legend${deckLegends.length}`).remove();

    if (deckLegends.length == 3) {
        document.getElementById("cards").innerHTML = `<button onclick="showCards()" class="legendBTN"><img src="assets/addcards.png"></button>`;
    }

    console.log(deckLegends)
}

function replaceLegend(num) {
    legends.splice(0);

    for (let i=0; i < cards.length;i+=1) {
        if (cards[i].cardType === "Legend") {
            legends.push(cards[i]);
        }
    }

    switch (deckLegends[num].cardColour) {
        case "R":
            deckRedRAM -= legends[num].cardRAM;
            break;
        case "B":
            deckBlueRAM -= legends[num].cardRAM;
            break;
        case "Y":
            deckYellowRAM -= legends[num].cardRAM;
            break;
        case "G":
            deckGreenRAM -= legends[num].cardRAM;
            break;
    }

    deckLegends.splice(num, 1);
    deckColours.splice(num, 1);

    console.log(deckBlueRAM, deckGreenRAM, deckRedRAM, deckYellowRAM, deckColours);

    showLegends();
}

function showCards() {
    let showPlace = document.getElementById("legendShow");
    let cardPos = 0;
    showPlace.innerHTML = "";

    if (deckLegends[0].cardName === deckLegends[1].cardName || deckLegends[1].cardName === deckLegends[2].cardName || deckLegends[0].cardName === deckLegends[2].cardName) {
        alert("You cannot have the same legend twice, please change them.");
    } else {
        for(let i=0;i<cards.length;i++) {
        if(cards[i].cardType != "Legend") {
            if (cards[i].cardColour == deckLegends[0].cardColour || cards[i].cardColour == deckLegends[1].cardColour || cards[i].cardColour == deckLegends[2].cardColour) {
                if (cards[i].cardRAM <= deckBlueRAM && cards[i].cardColour == "B" || cards[i].cardRAM <= deckRedRAM && cards[i].cardColour == "R" || cards[i].cardRAM <= deckYellowRAM && cards[i].cardColour == "Y" || cards[i].cardRAM <= deckGreenRAM && cards[i].cardColour == "G" ) {
                    if(cardPos%5==0) {
                        showPlace.innerHTML += "<br><br>";
                    }

                    showPlace.innerHTML += `<img src=${cards[i].pic} width="180px", height="240px" class="normalCard"><input type="number" max="3" min="0" value="0" step=1 id="input${i}">`
                    cardPos +=1;
                }
            }
        }
    }

    document.getElementById("deckCards").innerHTML = `<button onclick="addCards()" id="addCards">Add cards to deck</button>`;
    document.getElementById("cards").remove();
    }
}

function addCards() {
    let cardInp;

    if (deckCards.length != 0) {
        deckCards.splice(0);
        totalCards = 0;
        totalGear = 0;
        totalPrograms = 0;
        totalUnits = 0;
        flag = 0;
    }

    for(let i=0;i<cards.length;i++) {
        if(cards[i].cardType != "Legend") {
            if (cards[i].cardColour == deckLegends[0].cardColour || cards[i].cardColour == deckLegends[1].cardColour || cards[i].cardColour == deckLegends[2].cardColour) {
                if (cards[i].cardRAM <= deckBlueRAM && cards[i].cardColour == "B" || cards[i].cardRAM <= deckRedRAM && cards[i].cardColour == "R" || cards[i].cardRAM <= deckYellowRAM && cards[i].cardColour == "Y" || cards[i].cardRAM <= deckGreenRAM && cards[i].cardColour == "G" ) {
                    cardInp = document.getElementById(`input${i}`).value;
                    totalCards += cardInp;

                    if(cardInp != 0) {
                        addCard(i);
                    }
                }
            }
        }
    }
    counter += 1;
}

function addCard(cardNum) {
    let display = document.getElementById("deckCards");

    if (Number(document.getElementById(`input${cardNum}`).value) > 3 || Number(document.getElementById(`input${cardNum}`).value) < 1) {
        alert(`Invalid card amount. Please adjust "${cards[cardNum].cardName}" 's amount.`);
    } else {
        deckCards.push(cards[cardNum]);
        cardQuant.push(Number(document.getElementById(`input${cardNum}`).value));

        switch(cards[cardNum].cardType) {
            case "Unit":
                totalUnits += Number(document.getElementById(`input${cardNum}`).value);
                break;
            case "Program":
                totalPrograms += Number(document.getElementById(`input${cardNum}`).value);
                break;
            case "Gear":
                totalGear += Number(document.getElementById(`input${cardNum}`).value);
                break;
        }

        totalCards = totalUnits + totalPrograms + totalGear;

        display.innerHTML = `<button onclick="addCards()" id="addCards">Add cards to deck</button><br><p>Deck Colours: ${deckColours}</p><p>Red RAM: ${deckRedRAM}</p><p>Blue RAM: ${deckBlueRAM}</p><p>Yellow RAM: ${deckYellowRAM}</p><p>Green RAM: ${deckGreenRAM}</p><p>Total units: ${totalUnits}</p><p>Total Programs: ${totalPrograms}</p><p>Total Gear: ${totalGear}</p><p>Total Cards: ${totalCards}</p><br><br><button onclick="decklist()">Show Decklist (finalise)</button>`;


        if (totalCards < 40 || totalCards > 50) {
            display.innerHTML += `<p style="color: red">Your deck does not meet legality standards. Please adjust your cards</p>`;
        } else {
            display.innerHTML += `<p style="color: green">Your deck does meet legality standards!</p>`
        }
    }
}

function decklist() {
    let display = document.getElementById("deckCards");
    let showPlace = document.getElementById("legendShow");
    showPlace.innerHTML = "";
    display.innerHTML = "<hr><h1># Decklist #</h1><hr>"
    for(let i = 0; i<3; i++) {
        if (i == 0) {
            display.innerHTML += "<h3>Legends</h3>";
        }

        display.innerHTML += `<p>"${deckLegends[i].cardName}" | 1x</p>`;
    }

    for(let i = 0; i<deckCards.length; i++) {
        if(i==0) {
            display.innerHTML += "<h3># Units, Programs and Gear #</h3>";
        }

        display.innerHTML += `<p>"${deckCards[i].cardName}" | ${cardQuant[i]}x</p>`;
    }

    document.getElementById("buttons").innerHTML += `<button onclick="copy()">Copy List</button><br><button onclick="imageGen()">Generate Deck Image</button>`
}

function imageGen() {
    let display = document.getElementById("deckCards");
    
    display.innerHTML = `<div id="legends"></div><div id="upg"></div>`;

    for(let i=0;i<3;i++) {
        document.getElementById("legends").innerHTML += `<img src='${deckLegends[i].pic}' width="180px", height="240px">`;
    }

    for(let i=0;i<totalCards;i++) {
        if (i%3 == 0) {
            document.getElementById("upg").innerHTML += "<br>";
        }

        if (cardQuant[i] === 1) {
            document.getElementById("upg").innerHTML += `<img src='${deckCards[i].pic}' width="180px", height="240px">`;
        } else if (cardQuant[i] === 2) {
            document.getElementById("upg").innerHTML += `<img src='${deckCards[i].pic}' width="180px", height="240px">`;
            document.getElementById("upg").innerHTML += `<img src='${deckCards[i].pic}' width="180px", height="240px">`;
        } else {
            document.getElementById("upg").innerHTML += `<img src='${deckCards[i].pic}' width="180px", height="240px">`;
            document.getElementById("upg").innerHTML += `<img src='${deckCards[i].pic}' width="180px", height="240px">`;
            document.getElementById("upg").innerHTML += `<img src='${deckCards[i].pic}' width="180px", height="240px">`;
        }

        // I know it's unoptimised, but a for loop crashes your browser.
    }
}

function copy() {
    let display = document.getElementById("deckCards");

    navigator.clipboard.writeText(display.innerText).then(() => {
  alert('Decklist copied to clipboard');
    },() => {
  alert('Failed to copy');
    });
}