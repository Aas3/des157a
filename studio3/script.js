(function() {
    "use strict";
    console.log('reading js');


 /* ///////////////// OVERLAY //////////////////// */

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('intro').className = 'hidden';
    });


    document.querySelector('.playGame').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('rules').className = 'hidden';
    });


/* ///////////////// NAME INPUT //////////////////// */

    const playerName= document.querySelector('#rules');
    const submitBtn = document.querySelector('rules[type=submit]');

    const formName = document.querySelector('#game');

    playerName.addEventListener('submit', function(){
        console.log('submitted')
    })

    playerName.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('registered clicked');
        const name = document.querySelector('#yName').value;

        // let playerText;
    })


    // playerText = `${yName}`;

    // madlib.innerHTML = playerText;
    document.getElementById('gamecontrol').className = 'showing';  


/* ///////////////// THE GAME //////////////////// */   

        const startGame = document.getElementById('startgame');
        const gameControl = document.getElementById('gamecontrol');
        const game = document.getElementById('game');
        const score1 = document.getElementById('score1');
        const score2 = document.getElementById('score2');
        const actionArea = document.getElementById('actions');
        const player1Boba = document.getElementById('player1Boba');
        const player2Boba = document.getElementById('player2Boba');

        var gameData = {
            dice: ['1die.png','2die.png','3die.png'],

            boba: ['0boba.png', '1boba.png', '2boba.png', '3boba.png', '4boba.png', '5boba.png', '6boba.png', '7boba.png', '8boba.png', '9boba.png', '10boba.png', '11boba.png', '12boba.png', '13boba.png', '14boba.png', '15boba.png'],

            players: ['player 1', 'player 2'],
            
            // players1: playerText,
            // players2: 'player 2',

            score: [0,0],
            roll1:0,
            roll2:0,
            rollSum:0,
            gameEnd: 15,
        };

            startGame.addEventListener("click", function(){
                //randomly set game index
                gameData.index = Math.round(Math.random());
                // console.log(gameData.index);


                gameControl.innerHTML = '<h2> The game has started</h2>';
                gameControl.innerHTML += '<button id="quit">wanna quit?</button>';

                document.getElementById('quit').addEventListener("click", function(){
                    location.reload();
                });
                // console.log("set up the turn!");
                setUpTurn();    
            })


            function setUpTurn(){
                game.innerHTML = `<p> roll the dice for ${gameData.players[gameData.index]}</p>`;
                actionArea.innerHTML = '<button id="roll"> roll the dice </button>';
                document.getElementById('roll').addEventListener('click', function(){

                // game.innerHTML = `<img src="${gameData.boba[gameData.roll1-1]}"> <img src="${gameData.boba[gameData.roll2-1]}">`;

                    // console.log("roll the dice");
                    throwDice();
                })
            }

            function throwDice(){
                actionArea.innerHTML = '';
                //get randome valuses from 1-6//
                gameData.roll1 = Math.floor(Math.random() * 3) + 1;
                gameData.roll2 = Math.floor(Math.random() * 3) + 1;

                game.innerHTML = `<p> roll the dice ${gameData.players[gameData.index]}</p>`;

                //put the dice images on the screen; the dice array index needs to be one less than roll1 & roll2//
                game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;

                // game.innerHTML += `<img src="${gameData.boba[gameData.roll1-1]}"> <img src="${gameData.boba[gameData.roll2-1]}">`;

                gameData.rollSum = gameData.roll1 + gameData.roll2;
                console.log(`gameData.rollSum: ${gameData.rollSum}`);

                //if 2 ones are rolled..//
                if(gameData.rollSum === 2){
                    console.log("snake eyes");
                    game.innerHTML += '<p> oh snap! snake eyes </p>';
                    gameData.score[gameData.index] = 0;
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    //shows the current score
                    setTimeout(setUpTurn, 2000);
                }
                //if either die is a 1
                else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                    // console.log("one of the two dice was a 1");
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    game.innerHTML += `<p> sorry, your roll had a 1, switching to ${gameData.players[gameData.index]}</p>`;

                    setTimeout(setUpTurn, 2000);
                }
                //if nither roll 1//
                else{
                    // console.log("the game proceeds");

                    gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                    actionArea.innerHTML = '<button id="rollagain"> roll again </button> or <button id="pass">Pass</button>';

                    document.getElementById('rollagain').addEventListener('click', function(){
                        // setUpTurn();
                        throwDice();
                    });

                    document.getElementById('pass').addEventListener('click', function(){
                        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        setUpTurn();
                    });
                }

                checkWinningCondition();
            }


// bottom section....

            function checkWinningCondition(){
                if(gameData.score[gameData.index] > gameData.gameEnd){
                    score1.innerHTML = `<h2> ${gameData.players[gameData.index]} 
                        wins with ${gameData.score[gameData.index]}points </h1>`;
                    
                    actionArea.innerHTML = '';
                    document.getElementById('quit').innerHTML = "start a new game";
                }
                else{
                    showCurrentScore();
                }
            }

            function showCurrentScore(){
                //show current score...
                score1.innerHTML = `${gameData.players[0]}: ${gameData.score[0]}`;
                score2.innerHTML = `${gameData.players[1]}: ${gameData.score[1]}`;
    
                // update boba images
                // use this format once images are in an images folder
                // player1Boba.src=`images/${gameData.boba[gameData.score[0]]}`;

                player1Boba.src=`images/${gameData.boba[gameData.score[0]]}`;
                player2Boba.src=`images/${gameData.boba[gameData.score[1]]}`;

            }

}())