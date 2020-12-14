const app = new Vue({
    el: '#app',
    data:{
        soccerBall:"http://il9.picdn.net/shutterstock/videos/12304745/thumb/10.jpg",

    },

    methods:{

        switchHover: function (){
            this.soccerBall = 'http://images.wisegeek.com/player-kicking-soccer-ball.jpg';

        },

        switchBack: function (){
            this.soccerBall= 'http://il9.picdn.net/shutterstock/videos/12304745/thumb/10.jpg';


        },

    }
});





//event listeners to change color of border when mouse scrolls over picture
//splash screen functions to handle fading in and fading out img div.
/*
const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add('display_none');
    },2000);
})*/
/*
const soccer = document.getElementById('soccer');
const weights = document.getElementById('weights');
const basjitsu = document.getElementById('basjitsu');

function initialChange1(){
    soccer.style.borderColor = 'black';

}
function revertBack1(){
    soccer.style.borderColor = 'red';

}

function initialChange2(){

    weights.style.borderColor = 'black';
}
function revertBack2(){

    weights.style.borderColor = 'red';
}

function initialChange3(){

    basjitsu.style.borderColor = 'black';
}
function revertBack3(){

    basjitsu.style.borderColor = 'red';
}


soccer.addEventListener('mouseenter',initialChange1);
soccer.addEventListener('mouseleave',revertBack1);
weights.addEventListener('mouseenter',initialChange2);
weights.addEventListener('mouseleave',revertBack2);
basjitsu.addEventListener('mouseenter',initialChange3);
basjitsu.addEventListener('mouseleave',revertBack3);
*/










