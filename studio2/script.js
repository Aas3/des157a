(function () {

    'use strict';

    console.log('reading js');


////////////// OVERLAYS ///////////////


    // fade in as you scroll down
    document.addEventListener('scroll', function(e){
        e.preventDefault();
        document.getElementById('sec1').className = 'showing';
    });

    document.addEventListener('scroll', function(e){
        e.preventDefault();
        document.getElementById('sec2').className = 'showing';
    });





 ////////////// SCROOL & MOUSE MOVEMENTS ///////////////


    //zooms in when mouse comes in from left  
    const container = document.getElementById('img1');
    
    // const container2 = document.getElementById('img2');
    const theImg = document.querySelector('div img');
    const percent = container.offsetWidth / 100;
    let prevLoc = 0;

    container.addEventListener('mousemove', reportPos);

    function reportPos(e){
        const mousePosX = Math.ceil((e.clientX - (container.getBoundingClientRect().left)) / percent);
        
            if (prevLoc !== mousePosX){
                const addedPx = mousePosX * 30;
                theImg.style.width = (800 + addedPx) + 'px';
                prevLoc = mousePosX;
                console.log(prevLoc);
            }
    }

    // function reportPos(e){
    //     const mousePosX = Math.ceil((e.clientX - (container.getBoundingClientRect().right)) / percent);
        
    //         if (prevLoc !== mousePosX){
    //             const addedPx = mousePosX * 30;
    //             theImg.style.width = (800 + addedPx) + 'px';
    //             prevLoc = mousePosX;
    //             console.log(prevLoc);
    //         }
    // }


})();