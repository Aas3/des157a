(function () {

    'use strict';

    console.log('reading js');



    const hamburger= document.querySelector('.hamburger');

    hamburger.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('navOverlay').className = 'showing';
        
        // if(hamburger ==='click'){
            //     document.querySelector('.hamburger').className = 'hidden';
            // }
    });

            
    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('navOverlay').className = 'hidden';
    });


    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('navOverlay').className = 'hidden';
        }
    });
    



/*  ////////////////////// SCROLL /////////////////*/


window.addEventListener('load', function () {

	//define variables needed
	const pic = document.querySelectorAll('.pic');
    const text = document.querySelector('.text');

    
	let postTops = [];
	let pageTop;
	let counter = 1;
	let prevCounter = 1;
	let doneResizing;

	//see below for what this function does
	resetPagePosition();

	/* Everything in this event handler runs everytime the window 
	is scrolled just a little bit. Be careful about preformance */
	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset + 300;
		//console.log(pagetop);

		// if the user is scrolling down the page...
		if (pageTop > postTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}
		// if the user is down the page and scrolling up
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		}

		// when the section changes...
		if (counter != prevCounter) {
			// changes the class name on the image, which activates animation...
			document.querySelector('figure img').className = 'sect' + counter;
			prevCounter = counter;
		}

	}); // end window scroll function

	// this event handler fires while the window is being resized
	window.addEventListener('resize', function () {

		clearTimeout(doneResizing);
		// this runs after the window has stopped being resized...
		doneResizing = setTimeout(function () {

			resetPagePosition();

		}, 500);
	});

	// this function resets variables, which may have changed based on resizing
	function resetPagePosition() {
		postTops = [];
		posts.forEach(function (post) {
			postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
		});

		const pagePosition = window.pageYOffset + 300;
		counter = 0;

		postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });

	}

}); // end window load function






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