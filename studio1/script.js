(function () {

    'use strict';

    console.log('reading js');


////////////// OVERLAYS ///////////////
    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('input').className = 'showing';
    });




////////// my form /////////////
    const myForm= document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');
    const submitBtn = document.querySelector('input[type=submit]');




    myForm.addEventListener('submit', function(){
        console.log('submitted')
    })

    myForm.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('registered clicked');
        const yName = document.querySelector('#yName').value;

        const number = document.querySelector('#number').value;
        const emotion = document.querySelector('#emotion').value;
        const adj = document.querySelector('#adj').value;
        const adj2 = document.querySelector('#adj2').value;

        let errorMsg = document.querySelector('#errorMsg');
        errorMsg.style.fontSize = '20px';
        errorMsg.style.fontWeight = 'bold';
        errorMsg.style.color = 'red';

        let myText;

        if(yName ===""){
            errorMsg.innerHTML =`please put your name`;
            document.querySelector('#yName'), focus();
        } else if(number ==""){
            errorMsg.innerHTML =`please put any number`;
            document.querySelector('#number'), focus();
        } else if(emotion ==""){
            errorMsg.innerHTML =`please enter any emotion`;
            document.querySelector('#emotion'), focus();
        }else if(adj ==""){
            errorMsg.innerHTML =`please enter any adjective`;
            document.querySelector('#adj'), focus();
        }else if(adj2 ==""){
            errorMsg.innerHTML =`please enter another adjective`;
            document.querySelector('#adj2'), focus();
        }
        else {

            // document.querySelector('#yName').style.color ='red';

            // myText = `Happy birthday ${yName}!, ${number}, ${emotion}, ${adj}, ${adj2}`;

            myText = `Happy birthday, ${yName}! Congrats on turning ${number} years old! I hope this card makes you  ${emotion}. You are always such a ${adj} and wonderful person. I hope all of your birthday wishes come true. Anyways, HBD! From your ${adj2} friend Z! °˖✧◝(⁰▿⁰)◜✧˖°`;

            // myText = `Happy Birthday ${yName}! Congrats on turning ${number} years old. I hope this card makes you ${emotion}, I mean of course it would, it's from me, your trusty computer. Although you may not be as technologicaly advanced and as ${adj} as I am, don't be discouraged, keep trying, you might come close one day.
            // Anyways HBD! From your most talented, amazing, and ${adj2} friend Z! °˖✧◝(⁰▿⁰)◜✧˖°`;




            

            // document.querySelector('#yName').style.color ='red';

            // document.querySelectorAll('${i}').style.color = 'blue';
            
            // yName.style.color= 'blue';


            madlib.innerHTML = myText;
            document.getElementById('output').className = 'showing';  


        }


    })

})();
