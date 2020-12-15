//event listeners to change color of border when mouse scrolls over picture
//splash screen functions to handle fading in and fading out img div.

const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add('display_none');
    },2000);
});



const app = new Vue ({
    el: '#app',
    data:{
        soccerBall:"https://media2.giphy.com/media/WvuTFk2IN7jxoLVDkP/200w.webp?cid=ecf05e47x7labvn0fwwzqgvuci71adnngb36rymuzl4qaoc7&rid=200w.webp",

    },

    methods:{

        switchHover: function (){
            this.soccerBall = 'http://images.wisegeek.com/player-kicking-soccer-ball.jpg';

        },

        switchBack: function (){
            this.soccerBall= 'https://media2.giphy.com/media/WvuTFk2IN7jxoLVDkP/200w.webp?cid=ecf05e47x7labvn0fwwzqgvuci71adnngb36rymuzl4qaoc7&rid=200w.webp';


        },

    }
});

const app2 = new Vue ({
    el: '#app2',
    data:{
        bajitsu:"https://tse2.mm.bing.net/th?id=OIP.ezbewlPJsIjApDZc5NiyvAHaHa&pid=Api&P=0&w=300&h=300",

    },

    methods:{

        switchHover: function (){
            this.bajitsu = 'https://media1.giphy.com/media/l2Je5K36gfVjK1MBi/200.webp?cid=ecf05e479rv5hqh0ebdksfylqx63h9rdrib2znhoeontv82o&rid=200.webp';

        },

        switchBack: function (){
            this.bajitsu="https://tse2.mm.bing.net/th?id=OIP.ezbewlPJsIjApDZc5NiyvAHaHa&pid=Api&P=0&w=300&h=300";


        },

    }
});


const app3 = new Vue ({
    el: '#app3',
    data:{
        weights:"https://www.hdwallpaper.nu/wp-content/uploads/2018/02/weightlifting-15-1024x675.jpg",

    },

    methods:{

        switchHover: function (){
            this.weights = 'https://media0.giphy.com/media/Ae9RmQOtH8vmXCMlc4/200.webp?cid=ecf05e478x6lzpqdcm1cbz129elouy4vjyh2uxym2xqvuchp&rid=200.webp';

        },

        switchBack: function (){
            this.weights="https://www.hdwallpaper.nu/wp-content/uploads/2018/02/weightlifting-15-1024x675.jpg";


        },

    }
});
















