let wins = 0;
let losses = 0;
let mess = document.getElementById("results");

const play = () => {
    let mess = document.getElementById("results");

    let point;
    let gameOver = false;
    let results = [];
    let wlmess;
    let round = 1;
    while (gameOver === false){
        res = roll();
        if (round === 1){
            if (res === 7 || res === 11) {
                results.push(res);
                wins++;
                wlmess = "Win";
                gameOver = true;
            }
            else if (res === 2 || res === 3 || res === 12) {
                results.push(res);
                losses++;
                wlmess = "Loss";
                gameOver = true;
            }
            else {
                point = res;
                results.push(res);
            }
        }
        else {
            if (res === 7) {
                results.push(res);
                losses++;
                wlmess = "Loss";
                gameOver = true;
            }
            else if (res === point) {
                results.push(res);
                wins++;
                wlmess = "Win";
                gameOver = true;
            }
            else {
                results.push(res);
            }
        }
        round ++;
    }
    mess.innerText = `${results} ${wlmess} ${wins} Wins ${losses} Loses`;
}


const roll = () => {
        return Math.floor(Math.random() * 11 + 2);
}
