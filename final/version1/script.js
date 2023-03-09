(function () {

    'use strict';

    console.log('reading js');



    const hamburger= document.querySelector('.hamburger');

    hamburger.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('navOverlay').className = 'showing';
    });

            // if(hamburger ==='click'){
            //     document.querySelector('.hamburger').className = 'hidden';
            // }
    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('navOverlay').className = 'hidden';
    });


    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('navOverlay').className = 'hidden';
        }
    });
    









/*  ////////////////////// NAV /////////////////*/

    // const hamburger= document.querySelector('.hamburger');
    // const navMenu= document.querySelector('.nav-menu');

    // hamburger.addEventListener("click", () =>{
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // })

/*  ////////////////////// OVERLAY /////////////////*/
    // document.querySelector('.open').addEventListener('click', function(e){
    //     e.preventDefault();
    //     document.getElementById('navOverlay').className = 'showing';
    // });

    // document.querySelector('.close').addEventListener('click', function(e){
    //     e.preventDefault();
    //     document.getElementById('navOverlay').className = 'hidden';
    // });

    // document.addEventListener('keydown', function(e){
    //     if(e.key === 'Escape'){
    //         document.getElementById('navOverlay').className = 'hidden';
    //     }
    // });

})();