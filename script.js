// * Sorry for the screeching comments, makes me notice better.

"use strict"

function game(){

    // * =========================
    // ! MONEY RELATED VARIABLES V
    // * =========================
    let money = 0;
    let cookies = 0;
    let cookieIncome = 1;
    let income = 1;
    let statusIncome = 0;
    let statusIncome2
    let upgradeCost = 100;
    // * =========================
    // ! STATUS BOOLEAN VALUES V
    // * =========================
    let hasGottenStatus1 = false;
    let hasGottenStatus2 = false;
    let hasGottenStatus3 = false;
    let hasGottenStatus4 = false;
    let hasGottenStatus5 = false;
    let hasGottenStatus6 = false;
    let watermarked = true;

    function fullGame(){

        // * Watermark remover/adder.

        document.getElementById("remove").onclick = function() {
            console.log("gi")
            if (watermarked == true) {

                document.getElementById("watermark").innerHTML = ' ';
                document.getElementById("remove").innerHTML = "Add Watermark";
                watermarked = false;

            }
            
            else if (watermarked == false) {
                document.getElementById("remove").innerHTML = "Remove Watermark"
                document.getElementById("watermark").innerHTML = 'Created by <em>Peridot#6964</em> on Discord!<br>USE WEBSITE ON 80% ZOOM (CTRL + SCROLL)';
                watermarked = true;
            }
        
        }

        // * Upgrade button
        document.getElementById("upgrade").onclick = () => {
            if(money >= upgradeCost){
                console.log("GAINED 1.5x MULTIPLIER");
                income = income * 1.5;
                document.getElementById("multiplier").innerHTML = "Multiplier: " + Math.floor(income) + "x";
                money -= upgradeCost
                document.getElementById("coins").innerHTML = "Money: " + parseInt(money);
                upgradeCost *= 2
                document.getElementById("upgrade").innerHTML = "Upgrade your button!<br>COST: " + upgradeCost;
            }
            else{
                document.getElementById("upgrade").innerHTML = "NOT ENOUGH MONEY!";
                document.getElementById("upgrade").style.color = "red";
                document.getElementById("upgrade").style.background = "transparent";

                setTimeout(() => {
                    document.getElementById("upgrade").style.color = "white";
                    document.getElementById("upgrade").innerHTML = "Upgrade your button!<br>COST: " + upgradeCost;
                }, 1000);
            }
        }

        document.getElementById('upgrade').onmouseover = () => {
            if(money < upgradeCost){
                document.getElementById("upgrade").innerHTML = "NOT ENOUGH MONEY!";
                document.getElementById("upgrade").style.color = "red";
                document.getElementById("upgrade").style.background = "transparent";
            };
            setTimeout(() => {
                document.getElementById("upgrade").style.color = "white";
                document.getElementById("upgrade").innerHTML = "Upgrade your button!<br>COST: " + upgradeCost;
                document.getElementById("upgrade").style.background = transparent;
            }, 1000);
        }

        // * Money clicking here
        document.getElementById("money").onclick = () => {
            cookies+=cookieIncome
            money = money + income + statusIncome
            document.getElementById("cookies").innerHTML = "Cookies: " + parseInt(cookies);
            document.getElementById("coins").innerHTML = "Money: " + parseInt(money);
            
            // * Functions for status code.
            function levelUp(){
                setTimeout(function() {
                    document.getElementById("money").innerHTML = "Click me for Cookies!"
                }, 1000);
                document.getElementById("money").innerHTML = "LEVEL UP";
                statusIncome += 0.5
                cookieIncome += 1
                statusIncome2 = statusIncome + 1
                document.getElementById("cookieMultiplier").innerHTML = "Cookie Multiplier: " + cookieIncome + "x"
                document.getElementById("statusMultiplier").innerHTML = "Status Multiplier: " + statusIncome2 + "x"
            }

            // ! ELSE IFS FOR STATUSES
            
            // TODO: Organize this shit code lmao it's hard to read.
            // * UPDATE: The shit code is fixed but I'll keep that TODO lmao.

            if (cookies >= 10 && hasGottenStatus1 == false) {
                console.log("TEST TEXT: You are now an Absolute Beginner!");
                document.getElementById("status").innerHTML = "Absolute Beginner";
                levelUp()
                hasGottenStatus1 = true;
            }

            else if (cookies >= 100 && hasGottenStatus2 == false){
                console.log("TEST TEXT: You are now a Beginner!");
                document.getElementById("status").innerHTML = "Beginner";
                levelUp()
                hasGottenStatus2 = true;
            }

            else if (cookies >= 250 && hasGottenStatus3 == false){
                console.log("TEST TEXT: You are now a Experimental!");
                document.getElementById("status").innerHTML = "Experimental";
                levelUp()
                hasGottenStatus3 = true;
            }

            else if (cookies >= 500 && hasGottenStatus4 == false){
                console.log("TEST TEXT: You are now a Starter!");
                document.getElementById("status").innerHTML = "Starter";
                levelUp()
                hasGottenStatus4 = true;
            }

            else if (cookies >= 1000 && hasGottenStatus5 == false){
                console.log("TEST TEXT: You are now a Job Ready!");
                document.getElementById("status").innerHTML = "Job Ready";
                levelUp()
                hasGottenStatus5 = true;
            }

            else if (cookies >= 1500 && hasGottenStatus6 == false){
                console.log("TEST TEXT: You are now a Cookie Baker!");
                document.getElementById("status").innerHTML = "Cookie Baker";
                levelUp()
                hasGottenStatus6 = true;
            }
        };

    };
    fullGame();
};

game();