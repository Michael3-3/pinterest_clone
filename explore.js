var dateholder = document.getElementById('date');
const images = document.querySelector("#images")
const dataholder = [
    {image:"https://i.pinimg.com/736x/fc/b1/32/fcb13298199e1307b5864d4938ac62e9.jpg",
        p:"Do it for the plot",
        h2:"Summer reading aesthetic"
    },
    {image:"https://i.pinimg.com/736x/a3/2c/0e/a32c0e863ed78e257910b7b2e378193b.jpg",
        p:"Ready, set, travel!",
        h2:"Wanderlust wallpapers"
    },
    {image:"https://i.pinimg.com/736x/31/81/2c/31812c204d718871957ddb2480e48134.jpg",
        p:"Fun with cooking!",
        h2:"Mushroom recipes you will love"
    },
    {image:"https://i.pinimg.com/736x/bd/4d/12/bd4d1241d9ced752314efad68f6fa796.jpg",
        p:"Hidden gems",
        h2:"Europe travel inspo"
    },
    {image:"https://i.pinimg.com/736x/ba/d4/5f/bad45f678be3cef3b075d7840a871692.jpg",
        p:"From your lens",
        h2:"How to say it without really saying it"
    }, 
    {image:"https://i.pinimg.com/736x/22/44/d8/2244d83aff3d9db8ab2392ff59f3aefd.jpg",
        p:"Hot weather fix",
        h2:"A summer pool day vibe"
    }, 
    {image:"https://i.pinimg.com/736x/54/1b/e9/541be9d9b969a5d1671e20448931f550.jpg",
        p:"Casual and cool",
        h2:"Serving the best airport looks"
    }
];
// Create a new Date object
let months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
var currentDate = new Date();



var formattedDate = months[currentDate.getMonth()]+' '+currentDate.getDate() + ',' + currentDate.getFullYear();

dateholder.innerHTML = formattedDate;



// Loop through the data array and create a new HTML element for each object

dataholder.forEach(el => {
        images.innerHTML += `<div
                class="imageholders bg-[] flex h-72 rounded-2xl w-[32%] relative flex flex-col items-center justify-end bg-zinc-900 ">
                <img class="h-full w-full rounded-2xl  object-cover opacity-40	"
                    src="${el.image}" alt="">
                <div id="text" class="absolute bottom-5 text-white flex flex-col items-center justify-center">
                    <p>${el.p}</p>
                    <h2 class="text-3xl font-semibold text-center p-3">${el.h2}</h2>
                </div>
            </div>`
})

