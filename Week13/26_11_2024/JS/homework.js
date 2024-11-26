function five_football_players() {
    let oneTeamPlayers = [" Роналду", "Зидан", "Неймар", "Бензема"];
    alert("This football club has " + oneTeamPlayers.length + " players: " + oneTeamPlayers.join(", "));
    alert("Beacause the " + oneTeamPlayers[1] + " is leave the team, we need to replace him with Месси.");
    oneTeamPlayers[1] = "Месси";
    alert("Now the football club has " + oneTeamPlayers.length + " players: " + oneTeamPlayers.join(", "));
    while (true) {
        let playerName = prompt("Please enter the name of the player you want to add to the team:(enter 'quit' or 'q' to exit)");
        if (playerName === "quit" || playerName === "q") {
            break;
        }
        if (playerName !== '' && playerName !== null && playerName !== undefined) {
            oneTeamPlayers.push(playerName);
        }
    }
    alert("The new team has " + oneTeamPlayers.length + " players: " + oneTeamPlayers.join(", "));
    alert(oneTeamPlayers.length>5? "The team players are many!" : "The team players are few!");
}

five_football_players();