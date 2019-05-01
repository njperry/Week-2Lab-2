"use strict";

let playerName = undefined;

let playerHealth = 40;

let grantHealth = 10;

let playerWins = 0;

let grantWins = 0;

let playerDamage = 0;

let grantDamage = 0;


function startGame() {

    let play = prompt("Do you want to play a game?");

    if (play === "yes") {
        playerName = prompt("Choose your Name");
        startCombat();
    }
}

function startCombat() {

    while (grantWins < 1 && playerWins < 3) {

        if (playerHealth > 0 && grantHealth > 0) {

            let attack = prompt("Would you like to attack or quit?", "attack");

            if (attack === "attack") {

                playerDamage = getDamage();
                playerHealth = playerHealth - playerDamage;

                grantDamage = getDamage();
                grantHealth = grantHealth - grantDamage;

            } else if (attack === "quit") {
                console.log("Goodbye");
                break;
            }

            console.log(`${playerName} has ${playerHealth} remaining`);
            console.log(`Grant has ${grantHealth} remaining`);

        }

        else if (grantHealth <= 0) {
            playerWins++;
            grantHealth = 10;
            console.log(`${playerName} has ${playerWins} wins`);
        }

        else if (playerHealth <= 0) {
            console.log("Grant Wins!");
            break;
        }

        if (playerWins === 3) {
            console.log(`${playerName} wins!`);
            break;
        }

    }

    function getDamage() {
        return Math.floor(Math.random() * 5) + 1;

    }

}

startGame();