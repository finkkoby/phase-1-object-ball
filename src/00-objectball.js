function gameObject() {
    const newObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans" : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez" : {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee" : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry" : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 11,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return newObj;
}

const dataTable = gameObject();
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function numPointsScored(player) {
    for (let name in dataTable) {
        let team = dataTable[name];
        for (let teamName in team) {
          let playerKey = team["players"];
            for (let playerName in playerKey) {
                if (playerName === player) {
                    let pointsScored = playerKey[playerName].points;
                    return pointsScored;
                } else {
                    return "Could not find player"
                }
            }
        }
    }
}
function shoeSize(player) {
    for (let key in dataTable) {
        let playerKey = dataTable[key]["players"]; 
        for (let playerName in playerKey) { 
            if (playerName === player) {
                let shoeSize = playerKey[playerName].shoe;
                return shoeSize;
            }
        }

        }
    }

console.log(shoeSize("Ben Gordon"));

function teamColors(team) {
    for (let teamType in dataTable) {
        let teamNameKey = dataTable[teamType];
        if (teamNameKey.teamName === team) {
            return teamNameKey.colors;
        }
    }
}
console.log(teamColors("Charlotte Hornets"))

function teamNames(game) {
    let teamsArray = [];
    for(let key in game) {
        let newName = game[key].teamName;
        teamsArray.push(newName);
    }
    return teamsArray;
}
console.log(teamNames(dataTable));

function playerNumbers(team) {
    let newArray = [];
    for(let key in dataTable) {
        let teamType = dataTable[key];
        let matchName = teamType.teamName;
        if(matchName === team) {
            let playerKey = teamType.players;
            for(let stat in playerKey) {
                let jersey = playerKey[stat].number;
                newArray.push(jersey);
            }
        }
    }
    return newArray;
}
console.log(playerNumbers("Brooklyn Nets"));

function playerStats(player) {
    for (let key in dataTable) {
        let teamType = dataTable[key];
        let playerKey = teamType.players;
        for (let playerName in playerKey) {
            if (playerName === player) {
                let playerStats = playerKey[playerName];
                return playerStats;
            }
        }
        
    }
}

console.log(playerStats("Bismak Biyombo"));

function bigShoeRebounds() {
    let bigShoe = {
        name: "",
        shoe: "0",
        rebounds: "",
    };
    for (let key in dataTable) {
        let teamType = dataTable[key];
        let playerKey = teamType.players;
        for (let player in playerKey) {
            let statsObj = playerKey[player];
            let shoeSize = statsObj.shoe;
            if (shoeSize > bigShoe.shoe) {
                bigShoe.name = player;
                bigShoe.shoe = shoeSize;
                bigShoe.rebounds = statsObj.rebounds;
            }
        }
    }
    return bigShoe.rebounds;
}

console.log(bigShoeRebounds());

function mostPointsScored() {
    let bigPoints = {
        name: "",
        points: "0",
    };
    for (let key in dataTable) {
        let teamType = dataTable[key];
        let playerKey = teamType.players;
        for (let player in playerKey) {
            let statsObj = playerKey[player];
            let playerPoints = statsObj.points;
            if (playerPoints > bigPoints.points) {
                bigPoints.name = player;
                bigPoints.points = playerPoints;
            }
        }
    }
    return bigPoints.name;
}
console.log(mostPointsScored());

function doesLongNameStealATon() {
    let longName = "";
    let mostSteals = {
        name: "",
        steals: "0",
    }
    for (let key in dataTable) {
        let teamType = dataTable[key];
        let playerKey = teamType.players;
        for (let playerName in playerKey) {
            let playerSteals = playerKey[playerName].steals;
            if (playerName.length > longName.length) {
                longName = playerName;
            }
            if (playerSteals > mostSteals.steals) {
                mostSteals.name = playerName;
                mostSteals.steals = playerSteals;
            }
        }
    }  
    let answer = longName === mostSteals.name;
    debugger;
    return answer; 
}
console.log(doesLongNameStealATon());