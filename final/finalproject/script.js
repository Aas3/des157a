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


/*  ////////////////////// SLIDESHOW /////////////////*/
    const artImages = [
        'fly-drawing.jpg',
        'biker.png',
        'mannequin.png'];

    let currentImage = 0;
    const slide = document.getElementById('artimage');

    document.getElementById('next').addEventListener('click', nextPhoto);

    function nextPhoto() {
        currentImage++; //increment the counter
        //set the source for the slide to the next image
        if (currentImage > artImages.length - 1) {
            //If the user is at the end of the array...
            currentImage = 0;
        }
        slide.src = `images/${artImages[currentImage]}`;
    }

    document.getElementById('previous').addEventListener('click', previousPhoto);

    function previousPhoto() {
        currentImage--; //decrement the counter
        //set the source for the slide to the next image

        if (currentImage < 0) {
            //If the user is at the beginning of the array...
            currentImage = artImages.length - 1;
        }
        slide.src = `images/${artImages[currentImage]}`;
    }



    //////////// hobby slideshow/////
    const hobbyImages = [
        'sunset.png',
        'AOT.JPG',
        'laptop2.jpg '];

    let firstImage = 0;
    const hobbyslide = document.getElementById('himage');

    document.getElementById('next2').addEventListener('click', nextHobbyPhoto);

    function nextHobbyPhoto() {
        firstImage++; //increment the counter
        //set the source for the slide to the next image
        if (firstImage > hobbyImages.length - 1) {
            //If the user is at the end of the array...
            firstImage = 0;
        }
        hobbyslide.src = `images/${hobbyImages[firstImage]}`;
    }

    document.getElementById('previous2').addEventListener('click', previousHobbyPhoto);

    function previousHobbyPhoto() {
        firstImage--; //decrement the counter
        //set the source for the slide to the next image

        if (firstImage < 0) {
            //If the user is at the beginning of the array...
            firstImage = hobbyImages.length - 1;
        }
        hobbyslide.src = `images/${hobbyImages[firstImage]}`;
    }

    //////////// hobby slideshow/////
    const cultureImages = [
        'smoke2.jpg',
        'beans.png',
        'boon-setup.png',
        'dress.png '];

    let fImage = 0;
    const Cslide = document.getElementById('cimage');

    document.getElementById('next3').addEventListener('click', nextCPhoto);

    function nextCPhoto() {
        fImage++; //increment the counter
        //set the source for the slide to the next image
        if (fImage > cultureImages.length - 1) {
            //If the user is at the end of the array...
            fImage = 0;
        }
        Cslide.src = `images/${cultureImages[fImage]}`;
    }

    document.getElementById('previous3').addEventListener('click', previousCPhoto);

    function previousCPhoto() {
        fImage--; //decrement the counter
        //set the source for the slide to the next image

        if (fImage < 0) {
            //If the user is at the beginning of the array...
            fImage = cultureImages.length - 1;
        }
        Cslide.src = `images/${cultureImages[fImage]}`;
    }



    


/*  ////////////////////// SCROLL /////////////////*/

	//define variables needed
	const picScroll = document.querySelectorAll('.pic');
    const text = document.querySelector('.text');
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    const sections = document.querySelectorAll('section');
    const sectionTops=[];
    const picSect2 = document.querySelector('#picSect2');
    const textSect2 = document.querySelector('#textSect2');

    const picSect3 = document.querySelector('#picSect3');
    const textSect3 = document.querySelector('#textSect3');


    // const picSect3 = document.querySelector('.picSect3');
    // const textSect3 = document.querySelector('.textSect3');


    window.addEventListener('load',function(){
        sections.forEach(function(section){
            sectionTops.push(Math.floor(section.getBoundingClientRect().top) + window.pageYOffset);
      });
      console.log(sectionTops);
    })

	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset;

		// if the user is scrolling down the page...
		if (pageTop > sectionTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}
		// if the user is down the page and scrolling up
		else if (counter > 1 && pageTop < sectionTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		}
		// when the section changes...
		if (counter != prevCounter) {
			prevCounter = counter;
		}

        // glenda added
        if (counter==2){
            textSect2.classList.remove('moveOutLeft');
            textSect2.classList.add('moveInLeft');
            picSect2.classList.remove('moveOutRight');
            picSect2.classList.add('moveInRight');

        } else{
            textSect2.classList.remove('moveInLeft');
            textSect2.classList.add('moveOutLeft');
            picSect2.classList.remove('moveInRight');
            picSect2.classList.add('moveOutRight');
        }


        if (counter==3){
            textSect3.classList.remove('moveOutLeft');
            textSect3.classList.add('moveInLeft');
            picSect3.classList.remove('moveOutRight');
            picSect3.classList.add('moveInRight');
        } else{
            textSect3.classList.remove('moveInLeft');
            textSect3.classList.add('moveOutLeft');
            picSect3.classList.remove('moveInRight');
            picSect3.classList.add('moveOutRight');
        }

        if (counter==4){
            textSect4.classList.remove('moveOutLeft');
            textSect4.classList.add('moveInLeft');
            picSect4.classList.remove('moveOutRight');
            picSect4.classList.add('moveInRight');
        } else{
            textSect4.classList.remove('moveInLeft');
            textSect4.classList.add('moveOutLeft');
            picSect4.classList.remove('moveInRight');
            picSect4.classList.add('moveOutRight');
        }

        // end glenda added

	}); // end window scroll function





})();