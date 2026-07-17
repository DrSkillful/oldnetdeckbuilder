class PlayerMTG {
    constructor(playerID, life, damage) {
        this.playerID = playerID;
        this.life = life;
        this.damage = damage;
    }
}

class PlayerYGO {
    constructor(playerID, life) {
        this.playerID = playerID;
        this.life = life;
    }
}

class PlayerCTCG {
    constructor(playerID, streetCred) {
        this.playerID = playerID;
        this.streetCred = streetCred;
    }
}

let games = document.getElementById("game");
let format;
const players = [];
const cmdmg = [];
const p1Dice = [];
const p2Dice = [];
const availableDice = [0,0,0,0,0,0,0,0,0,0,0,0];

function MTG() {
    game.innerHTML = "";
    game.innerHTML = `<p>Choose your gamemode:</p><button onclick="gameMode(1)">Standard/Modern/Pioneer/Pauper (1v1 20 HP formats)</button><br><button onclick="gameMode(2)">Commander</button><br><button onclick="gameMode(3)">Oathbreaker/Planechase</button><br><button onclick="gameMode(4)">Two-Headed Giant</button><br>`;
}

function gameMode(mode) {
    switch (mode) {
        case 1:
            totalPlayers(2, 20);
            break;
        case 2:
            game.innerHTML = `<p>How many players?</p>`;

            for(let i = 0; i < 8; i++) {
                game.innerHTML += `<button onclick="totalPlayersCMO(${i+1})">${i+1}</button>`;
            }
            format = 1;
            break;
        case 3:
            game.innerHTML = `<p>How many players?</p>`;

            for(let i = 0; i < 8; i++) {
                game.innerHTML += `<button onclick="totalPlayersCMO(${i+1})">${i+1}</button>`;
            }
            break;
        case 4:
           totalPlayers(2, 30);
            break;
    }
}

function totalPlayers(pl, hp) {
    game.innerHTML = "";

    for(let n = 0; n<pl; n++) {
        players.push(new PlayerMTG(n, hp));
    }

    displayPlayersMTG();
}

function totalPlayersCMO(num) {
    if (format == 1) {
        for(let i=0;i<num;i++) {
            players.push(new PlayerMTG(i, 40, 0));
            for (let n = 0; n<=i;n++) {
                cmdmg.push(players[i].damage);
            }
        }
    } else {
        for(let i=0;i<num;i++) {
            players.push(new PlayerMTG(i, 20));
        }
    }

    displayPlayersMTG();
}

function displayPlayersMTG() {
    game.innerHTML = "";

    if (format == 1) {
        game.innerHTML += "<h1>Commander Damage doesn't work properly right now, we are working on it </h2>";
    }

    for(let i = 0; i<players.length;i++) {
        game.innerHTML += `<h2>Player ${players[i].playerID+1}'s HP</h2><button onclick="changeLife(${i}, 1)">+</button>${players[i].life}<button onclick="changeLife(${i}, 0)">-</button>`;
        if (format == 1) {
            for(let n = 0;n<players.length; n++) {
                if (n != i) {
                    game.innerHTML += `<p>Commander Damage from Player ${n+1}:</p><button onclick="changeCommander(${n}, ${i}, 1)">+</button>${players[i].damage}<button onclick="changeCommander(${n}, ${i}, 0)">-</button>`;
                }
            }
        }
    }
}

function changeLife(id, change) {
    if (change == 0) {
        players[id].life -= 1;
    } else {
        players[id].life += 1;
    }

    setInterval(displayPlayersMTG(), 1000);
}

function changeCommander(pl, change) {
    if (change == 0) {
        players[pl].damage -= 1;
        players[pl].life += 1;
    } else {
        players[pl].damage += 1;
        players[pl].life -= 1;
    }

    setInterval(displayPlayersMTG(), 1000);
}

function YGO() {
    game.innerHTML = "";
    for(let i=0;i<2;i++) {
        players.push(new PlayerYGO(i, 8000));
    }

    displayYGO();
}

function YGOLife(change, id, damage) {
    if(change == 0) {
        players[id].life -= damage;
    } else {
        players[id].life += damage;
    }

    setInterval(displayYGO(), 1000);
}

function displayYGO() {
    game.innerHTML = "";

    for(let i=0;i<2;i++) {
        game.innerHTML += `<h2>Player ${i+1}'s LP</h2><p>${players[i].life}</p><button onclick="YGOLife(0, ${i}, 10)">-10</button><button onclick="YGOLife(0, ${i}, 100)">-100</button><button onclick="YGOLife(0, ${i}, 1000)">-1000</button><button onclick="YGOLife(1, ${i}, 10)">+10</button><button onclick="YGOLife(1, ${i}, 100)">+100</button><button onclick="YGOLife(1, ${i}, 1000)">+1000</button>`;
    }
}

function CTCG() {
    for(let i=0;i<2;i++) {
        players.push(new PlayerCTCG(i, 0));
    }

    displayCTCG();
}

function displayCTCG() {
    game.innerHTML = "You cannot steal the same dice twice, it will cause a NaN error. Trying to fix it";

    for(let i=0; i<2;i++) {
        if(i == 0) {
            game.innerHTML += `<h2>Player 1's Gig Dice</h2><p>${p1Dice}</p><p>Street Cred: ${players[0].streetCred}</p><div id="player1buttons"></div>`;

            if (availableDice[0] == 0) {
                document.getElementById("player1buttons").innerHTML += `<button onclick="rollDice(1, 4)" id="p1d4">d4</button>`;
            }
            
            if (availableDice[1] == 0) {
                document.getElementById("player1buttons").innerHTML += `<button onclick="rollDice(1, 6)" id="p1d6">d6</button>`;
            }
            
            if (availableDice[2] == 0) {
                document.getElementById("player1buttons").innerHTML += `<button onclick="rollDice(1, 8)" id="p1d8">d8</button>`;
            }
            
            if (availableDice[3] == 0) {
                document.getElementById("player1buttons").innerHTML += `<button onclick="rollDice(1, 10)" id="p1d10">d10</button>`;
            }
            
            if (availableDice[4] == 0) {
                document.getElementById("player1buttons").innerHTML += `<button onclick="rollDice(1, 12)" id="p1d12">d12</button>`;
            }
            
            if (availableDice[5] == 0) {
                document.getElementById("player1buttons").innerHTML += `<button onclick="rollDice(1, 20)"id="p1d20">d20</button>`;
            }
        } else {
            game.innerHTML += `<h2>Player 2's Gig Dice</h2><p>${p2Dice}</p><p>Street Cred: ${players[1].streetCred}</p><div id="player2buttons"></div>`;

            if (availableDice[6] == 0) {
                document.getElementById("player2buttons").innerHTML += `<button onclick="rollDice(2, 4)" id="p1d4">d4</button>`;
            } 
            
            if (availableDice[7] == 0) {
                document.getElementById("player2buttons").innerHTML += `<button onclick="rollDice(2, 6)" id="p1d6">d6</button>`;
            } 
            
            if (availableDice[8] == 0) {
                document.getElementById("player2buttons").innerHTML += `<button onclick="rollDice(2, 8)" id="p1d8">d8</button>`;
            }
            
            if (availableDice[9] == 0) {
                document.getElementById("player2buttons").innerHTML += `<button onclick="rollDice(2, 10)" id="p1d10">d10</button>`;
            }
            
            if (availableDice[10] == 0) {
                document.getElementById("player2buttons").innerHTML += `<button onclick="rollDice(2, 12)" id="p1d12">d12</button>`;
            }
            
            if (availableDice[11] == 0) {
                document.getElementById("player2buttons").innerHTML += `<button onclick="rollDice(2, 20)"id="p1d20">d20</button>`;
            }
        }
    }
}

function rollDice(id, dice) {
    switch (dice) {
        case 4:
            result = Math.floor(Math.random() * (4-1) + 1);
            keepResult = result;

            if (id == 1) {
                p1Dice.push(keepResult);
                players[0].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${keepResult}, 4)" id="1d4">Steal the D4 gig from Player 1</button><br>`;
                availableDice[0] = 1;
            } else {
                p2Dice.push(keepResult);
                players[1].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${keepResult}, 4)" id="2d4">Steal the D4 gig from Player 2</button><br>`;
                availableDice[6] = 1;
            }
            break;
        case 6:
            result = Math.floor(Math.random() * (6-1) + 1);
            keepResult = result;
            if (id == 1) {
                p1Dice.push(keepResult);
                players[0].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${keepResult}, 6)" id="1d6">Steal the D6 gig from Player 1</button><br>`;
                availableDice[1] = 1;
            } else {
                p2Dice.push(keepResult);
                players[1].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${keepResult}, 6)" id="2d6">Steal the D6 gig from Player 2</button><br>`;
                availableDice[7] = 1;
            }
            break;
        case 8:
            result = Math.floor(Math.random() * (8-1) + 1);
            if (id == 1) {
                p1Dice.push(result);
                players[0].streetCred += result;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${result}, 8)" id="1d8">Steal the D8 gig from Player 1</button><br>`;
                availableDice[2] = 1;
            } else {
                p2Dice.push(result);
                players[1].streetCred += result;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${result}, 8)" id="2d8">Steal the D8 gig from Player 2</button><br>`;
                availableDice[8] = 1;
            }
            break;
        case 10:
            result = Math.floor(Math.random() * (10-1) + 1);
            keepResult = result;
            if (id == 1) {
                p1Dice.push(keepResult);
                players[0].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${keepResult}, 10)" id="1d10">Steal the D10 gig from Player 1</button><br>`;
                availableDice[3] = 1;
            } else {
                p2Dice.push(keepResult);
                players[1].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${keepResult}, 10)" id="2d10">Steal the D10 gig from Player 2</button><br>`;
                availableDice[9] = 1;
            }
            break;
        case 12:
            result = Math.floor(Math.random() * (12-1) + 1);
            keepResult = result;
            if (id == 1) {
                p1Dice.push(keepResult);
                players[0].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${keepResult}, 12)" id="1d12">Steal the D12 gig from Player 1</button><br>`;
                availableDice[4] = 1;
            } else {
                p2Dice.push(keepResult);
                players[1].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${keepResult}, 12)" id="2d12">Steal the D12 gig from Player 2</button><br>`;
                availableDice[10] = 1;
            }
            break;
        case 20:
            result = Math.floor(Math.random() * (20-1) + 1);
            keepResult = result;
            if (id == 1) {
                p1Dice.push(keepResult);
                players[0].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${keepResult}, 20)" id="1d20">Steal the D20 gig from Player 1</button><br>`;
                availableDice[5] = 1;
            } else {
                p2Dice.push(keepResult);
                players[1].streetCred += keepResult;
                document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${keepResult}, 20)" id="2d20">Steal the D20 gig from Player 2</button><br>`;
                availableDice[11] = 1;
            }
            break;
    }

    setInterval(displayCTCG(), 1000);
}

function stealGig(pl, num, id) {
    if(pl === 1) {
        let steal = p2Dice.indexOf(num);
        p1Dice.push(p2Dice[steal]);
        players[1].streetCred -= p2Dice[steal];
        players[0].streetCred += p2Dice[steal];
        let store = p2Dice[steal];
        document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(2, ${store}, ${id})" id="2d${id}">Steal the D${id} gig back from Player 1</button><br>`
        p2Dice.splice(steal, 1);
    } else {
        let steal = p1Dice.indexOf(num);
        p2Dice.push(p1Dice[steal]);
        players[0].streetCred -= p1Dice[steal];
        players[1].streetCred += p1Dice[steal];
        let store = p1Dice[steal];
        document.getElementById("ctcgbuttons").innerHTML += `<button onclick="stealGig(1, ${store}, ${id})" id="1d${id}">Steal the D${id} gig back from Player 2</button><br>`
        p1Dice.splice(steal, 1);
    }

    if (document.getElementById(`1d${id}`) != null) {
        document.getElementById(`1d${id}`).remove();
    } else if (document.getElementById(`2d${id}`) != null) {
        document.getElementById(`2d${id}`).remove();
    }

    setInterval(displayCTCG(), 1000);
}