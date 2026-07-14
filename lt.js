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

let games = document.getElementById("game");
let format;
const players = [];

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

            console.log(players);
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

function changeCommander(id,pl, change) {
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
        console.log(players);
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
    alert("Under construction! Try again soon!");
}