const cards = [
{"cardName":"6th Street Recruits", "cardType":"Unit", "cardColour":"R", "cardRAM":1, "cardCost":4,"pic":'assets/6sr.webp'}, 
{"cardName":"Adam Smasher - Ender of Legends", "cardType":"Legend", "cardColour":"R", "cardRAM":2, "cardCost":9,"pic":'assets/as.webp'}, 
{"cardName":"Adam Smasher - Metal Over Meat", "cardType":"Unit", "cardColour":"Y", "cardRAM":6, "cardCost":9,"pic":'assets/as2.webp'}, 
{"cardName":"Afterparty At Lizzies", "cardType":"Program", "cardColour":"Y", "cardRAM":1, "cardCost":1, "pic":'assets/aal.webp'},
{"cardName":"All Is Lost", "cardType":"Program", "cardColour":"R", "cardRAM":2, "cardCost":1,"pic":'assets/ail.webp'},
{"cardName":"Alt Cunningham - Soulkiller Architect", "cardType":"Legend", "cardColour":"B", "cardRAM":2, "cardCost":0, "pic":'assets/ac.webp'},
{"cardName":"Appetite For Destruction", "cardType":"Program", "cardColour":"R", "cardRAM": 4, "cardCost":3, "pic":'assets/afd.webp'},
{"cardName":"Augmented Negotiators", "cardType":"Unit", "cardColour":"Y", "cardRAM":1, "cardCost":3, "pic":'assets/an.webp'},
{"cardName":"Bonnie And Clyde", "cardType":"Program", "cardColour":"R", "cardRAM":3, "cardCost":3, "pic":'assets/bnc.webp'},
{"cardName":"Bootleg Black Sapphire Show", "cardType":"Program", "cardColour":"Y", "cardRAM":4, "cardCost":5,"pic":'assets/bbss.webp'},
{"cardName":"Caliber - Totentaz's Top Dog", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":5,"pic":'assets/cal.webp'},
{"cardName":"Carnage at the Colosseum", "cardType":"Program", "cardColour":"R", "cardRAM":3, "cardCost":6,"pic":'assets/cttc.webp'},
{"cardName":"Chrome Reverie", "cardType":"Program", "cardColour":"B", "cardRAM":1, "cardCost":3,"pic":'assets/cr.webp'},
{"cardName":"Corporate Surveilance", "cardType":"Program", "cardColour":"G", "cardRAM":1, "cardCost":2,"pic":'assets/cs.webp'},
{"cardName":"Corpo Security", "cardType":"Unit", "cardColour":"G", "cardRAM":1, "cardCost":2,"pic":'assets/cs1.webp'},
{"cardName":"Cyberpsychosis", "cardType":"Program", "cardColour":"Y", "cardRAM":2, "cardCost":3,"pic":'assets/cybpsy.webp'},
{"cardName":"Delamain Cab", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":4,"pic":'assets/dc.webp'},
{"cardName":"Dexter Deshawn - One Last Chance", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":3,"pic":'assets/dd.webp'},
{"cardName":"Dum Dum - Maelstrom Triggerman", "cardType":"Legend", "cardColour":"Y", "cardRAM":2, "cardCost":0,"pic":'assets/dudu.webp'},
{"cardName":"Dying Night - V's Pistol", "cardType":"Gear", "cardColour":"B", "cardRAM":2, "cardCost":2,"pic":'assets/dn.webp'},
{"cardName":"El Sombrerón - La Venganza Lenta", "cardType":"Unit", "cardColour":"R", "cardRAM":4, "cardCost":5,"pic":'assets/es.webp'},
{"cardName":"Emergency Atlus", "cardType":"Unit", "cardColour":"G", "cardRAM":1, "cardCost":3,"pic":'assets/ea.webp'},
{"cardName":"Evelyn Parker - Beautiful Enigma", "cardType":"Legend", "cardColour":"B", "cardRAM":2, "cardCost":0,"pic":'assets/ep.webp'},
{"cardName":"Evelyn Parker - Scheming Siren", "cardType":"Unit", "cardColour":"B", "cardRAM":3, "cardCost":2,"pic":'assets/ep1.webp'},
{"cardName":"Field Operator", "cardType":"Unit", "cardColour":"G", "cardRAM":2, "cardCost":3,"pic":'assets/fo.webp'},
{"cardName":"Floor It", "cardType":"Program", "cardColour":"B", "cardRAM":1, "cardCost":1,"pic":'assets/fi.webp'},
{"cardName":"Fool On The Hill", "cardType":"Program", "cardColour":"G", "cardRAM":3, "cardCost":2, "pic":'assets/foth.webp'},
{"cardName":"Gilded Matón", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":4,"pic":'assets/gm.webp'},
{"cardName":"Gorilla Arms", "cardType":"Gear", "cardColour":"Y", "cardRAM":3, "cardCost":4,"pic":'assets/ga.webp'},
{"cardName":"Goro Takemura - Hands Unclean", "cardType":"Legend", "cardColour":"G", "cardRAM":2, "cardCost":5,"pic":'assets/gt.webp'},
{"cardName":"Goro Takemura - Losing His Way", "cardType":"Unit", "cardColour":"G", "cardRAM":3, "cardCost":4,"pic":'assets/gt1..webp'},
{"cardName":"Goro Takemura - Vengeful Bodyguard", "cardType":"Legend", "cardColour":"G", "cardRAM":2, "cardCost":0,"pic":'assets/gt2.webp'},
{"cardName":"Hanako Arasaka — Daughter of the Emperor", "cardType":"Legend", "cardColour":"G", "cardRAM":2, "cardCost":0, "pic":'assets/ha1.webp'},
{"cardName":"Hanako Arasaka - In a Gilded Cage", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":4,"pic":'assets/ha.webp'},
{"cardName":"Industrial Assembly", "cardType":"Program", "cardColour":"R", "cardRAM":1, "cardCost":1,"pic":'assets/ia.webp'},
{"cardName":"Jacked In Voodoo Boy", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":2,"pic":'assets/jivb.webp'},
{"cardName":"Jackie Welles - Pour One Out For Me", "cardType":"Legend", "cardColour":"B", "cardRAM":2, "cardCost":0,"pic":'assets/jw.webp'},
{"cardName":"Jackie Welles - Ride Or Die Choom", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":6,"pic":'assets/jw1.webp'},
{"cardName":"Japantown Jonin", "cardType":"Unit", "cardColour":"R", "cardRAM":2, "cardCost":2, "pic":'assets/jj.webp'},
{"cardName":"Kerry Eurodyne - Axe, Attitude, Audience", "cardType":"Legend", "cardColour":"Y", "cardRAM":2, "cardCost":0,"pic":'assets/ke.webp'},
{"cardName":"Kerry Eurodyne - The Last Rockerboy", "cardType":"Unit", "cardColour":"R", "cardRAM":1, "cardCost":4,"pic":'assets/ke1.webp'},
{"cardName":"Kiroshi Optics", "cardType":"Gear", "cardColour":"Y", "cardRAM":1, "cardCost":1,"pic":'assets/ko.webp'},
{"cardName":"La Llorona - Ghost of the Past", "cardType":"Unit", "cardColour":"R", "cardRAM":1, "cardCost":3,"pic":'assets/ll.webp'},
{"cardName":"Live With The Aftermath", "cardType":"Program", "cardColour":"Y", "cardRAM":3, "cardCost":3, "pic":'assets/lwta.webp'},
{"cardName":"Lizzy Wizzy - Delicate Weapon", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":5,"pic":'assets/lw.webp'},
{"cardName":"Maman Brigitte - Spirit of Death", "cardType":"Unit", "cardColour":"B", "cardRAM":4, "cardCost":5,"pic":'assets/mb.webp'},
{"cardName":"Mandibular Upgrade", "cardType":"Gear", "cardColour":"Y", "cardRAM":2, "cardCost":1,"pic":'assets/mu.webp'},
{"cardName":"Mantis Blades", "cardType":"Gear", "cardColour":"Y", "cardRAM":1, "cardCost":1,"pic":'assets/mb1.webp'},
{"cardName":"Meredith Stout - Stone Cold Corpo", "cardType":"Unit", "cardColour":"R", "cardRAM":1, "cardCost":4,"pic":'assets/ms.webp'},
{"cardName":"Minotaur", "cardType":"Unit", "cardColour":"R", "cardRAM":2, "cardCost":7,"pic":'assets/mino.webp'},
{"cardName":"Misty Olszewski - Mender of Broken Spirits", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":3,"pic":'assets/mo.webp'},
{"cardName":"Modded Kusanagi", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":6,"pic":'assets/mk.webp'},
{"cardName":"Mox Inciters", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":3,"pic":'assets/mi.webp'},
{"cardName":"MTOD12 Flathead", "cardType":"Unit", "cardColour":"B", "cardRAM":3, "cardCost":5,"pic":'assets/mtf.webp'},
{"cardName":"Nadia - Fighting Through Grief", "cardType":"Unit", "cardColour":"G", "cardRAM":2, "cardCost":6,"pic":'assets/nadia.webp'},
{"cardName":"Octant", "cardType":"Unit", "cardColour":"R", "cardRAM":4, "cardCost":7, "pic":'assets/o.webp'},
{"cardName":"Offduty Malfini", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":4,"pic":'assets/om.webp'},
{"cardName":"Over the Edge", "cardType":"Program", "cardColour":"R", "cardRAM":2, "cardCost":3,"pic":'assets/ote.webp'},
{"cardName":"Overwatch - Panam's Gift", "cardType":"Gear", "cardColour":"G", "cardRAM":4, "cardCost":4,"pic":'assets/overwatch.webp'},
{"cardName":"Panam Palmer - Nomad Cavalry", "cardType":"Legend", "cardColour":"G", "cardRAM":2, "cardCost":0,"pic":'assets/pp.webp'},
{"cardName":"Peace Offering", "cardType":"Program", "cardColour":"G", "cardRAM":1, "cardCost":1,"pic":'assets/po.webp'},
{"cardName":"Pepe najaro - Working Doubles", "cardType":"Unit", "cardColour":"G", "cardRAM":2, "cardCost":4, "pic":'assets/pepe.webp'},
{"cardName":"Placide - Voodoo Sentinel", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":8,"pic":'assets/plac.webp'},
{"cardName":"Psycho Squad", "cardType":"Unit", "cardColour":"B", "cardRAM":1, "cardCost":4,"pic":'assets/ps.webp'},
{"cardName":"Rebecca - Having a Moment", "cardType":"Legend", "cardColour":"R", "cardRAM":0, "cardCost":0, "pic":'assets/becca.webp'},
{"cardName":"Reboot Optics", "cardType":"Program", "cardColour":"B", "cardRAM":2, "cardCost":2,"pic":'assets/ro.webp'},
{"cardName":"Riding Nomad", "cardType":"Unit", "cardColour":"G", "cardRAM":4, "cardCost":5,"pic":'assets/rn.webp'},
{"cardName":"Rita Wheeler - No Stupid Questions", "cardType":"Unit", "cardColour":"B", "cardRAM":2, "cardCost":4, "pic":'assets/rita.webp'},
{"cardName":"River Ward - Detective on the Hunt", "cardType":"Legend", "cardColour":"Y", "cardRAM":2, "cardCost":0,"pic":'assets/rw.webp'},
{"cardName":"Royce - Don't Call Me Simon", "cardType":"Unit", "cardColour":"R", "cardRAM":2, "cardCost":5,"pic":'assets/royce.webp'},
{"cardName":"Royce - Psycho on the Edge", "cardType":"Legend", "cardColour":"R", "cardRAM":2, "cardCost":6,"pic":'assets/royce1.webp'},
{"cardName":"Saburo Arasaka - Stubborn Patriarch", "cardType":"Legend", "cardColour":"G", "cardRAM":2, "cardCost":0,"pic":'assets/sa.webp'},
{"cardName":"Sandayu Oda - Hanako's Guardian", "cardType":"Unit", "cardColour":"Green", "cardRAM":2, "cardCost":7,"pic":'assets/so.webp'},
{"cardName":"Sandevistan", "cardType":"Gear", "cardColour":"Green", "cardRAM":3, "cardCost":3, "pic":'assets/sandy.webp'},
{"cardName":"Sasha Yakovleva - Won't Let You Down", "cardType":"Legend", "cardColour":"B", "cardRAM":2, "cardCost":5, "pic":'assets/sy.webp'},
{"cardName":"Satori - Sword of Saburo", "cardType":"Gear", "cardColour":"G", "cardRAM":1, "cardCost":2, "pic":'assets/satori.webp'},
{"cardName":"Saul Bright - Stormrider", "cardType":"Unit", "cardColour":"G", "cardRAM":2, "cardCost":8, "pic":'assets/sb.webp'},
{"cardName":"Screw - Lovelorn Fool", "cardType":"unit", "cardColour":"R", "cardRAM":2, "cardCost":5, "pic":'assets/screw.webp'},
{"cardName":"Secondhand Bombus", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":2, "pic":'assets/sb1.webp'},
{"cardName":"Sketchy Ripper", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":2, "pic":'assets/sr.webp'},
{"cardName":"Swordwise Huscle", "cardType":"Unit", "cardColour":"R", "cardRAM":2, "cardCost":3, "pic":'assets/sh.webp'},
{"cardName":"Take Control", "cardType":"Program", "cardColour":"G", "cardRAM":2, "cardCost":2, "pic":'assets/tc.webp'},
{"cardName":"T-Bug - Amateur Philosopher", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":4, "pic":'assets/tb.webp'},
{"cardName":"The Heist", "cardType":"Program", "cardColour":"Y", "cardRAM":2, "cardCost":2, "pic":'assets/heist.webp'},
{"cardName":"Valentino Street Racer", "cardType":"Unit", "cardColour":"G", "cardRAM":2, "cardCost":3, "pic":'assets/vsr.webp'},
{"cardName":"V - Corporate Exile", "cardType":"Legend", "cardColour":"B", "cardRAM":2, "cardCost":5, "pic":'assets/vc.webp'},
{"cardName":"Viktor Vektor - Sit Down and Relax", "cardType":"Legend", "cardColour":"Y", "cardRAM":2, "cardCost":0, "pic":'assets/vv.webp'},
{"cardName":"Viktor Vektor - You Might Feel a Little Pinch", "cardType":"Unit", "cardColour":"Y", "cardRAM":2, "cardCost":3, "pic":'assets/vv1.webp'},
{"cardName":"V - StreetKid", "cardType":"Legend", "cardColour":"R", "cardRAM":2, "cardCost":5, "pic":'assets/vs.webp'},
{"cardName":"Wraith Marauders", "cardType":"Unit", "cardColour":"G", "cardRAM":2, "cardCost":5, "pic":'assets/wm.webp'},
{"cardName":"Yorinobu Arasaka - Embracing Destruction", "cardType":"Legend", "cardColour":"R", "cardRAM":2, "cardCost":0, "pic":'assets/ya.webp'},
{"cardName":"Yorinobu Arasaka - Steel Dragon", "cardType":"Unit", "cardColour":"R", "cardRAM":3, "cardCost":7, "pic":'assets/ya1.webp'},
{"cardName":"Zetatech Faceplate", "cardType":"Gear", "cardColour":"Y", "cardRAM":2, "cardCost":2, "pic":'assets/zf.webp'},
];

//{"cardName":"", "cardType":"", "cardColour":"", "cardRAM":, "cardCost":, "pic":'assets/.webp'},

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
        document.getElementById("cards").innerHTML = `<button onclick="showCards()">Add Cards</button>`;
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