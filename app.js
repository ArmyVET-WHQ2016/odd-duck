'use strict';

const imageHolder = document.querySelector('.image-holder');
const sidebarUl = document.getElementById('sidebar-ul');

function Sounds(name, track, duration) {
    this.name = name;
    this.track = track;
    this.duration = duration;
}

function Pics(name, path, timesShown) {
    this.name = name;
    this.path = path;
    this.timesShown = timesShown;

    this.getTimesShow = function() {
        if (localStorage.getItem(this.name) === null) {
            localStorage.setItem(this.name, this.timesShown)
        }
        return localStorage.getItem(this.name)
    }

    this.setTimesShow = function () {
        this.timesShown += 1;
        localStorage.setItem(this.name, this.timesShown)
    }
}

const images = [
    {
        name: "bag",
        path: 'img/bag.jpg'
    },
    {
        name: "banana",
        path: 'img/banana.jpg'
    },
    {
        name: "unicorn",
        path: 'img/unicorn.jpg'
    },
    {
        name: "water-can",
        path: 'img/water-can.jpg'
    },
    {
        name: "wine-glass",
        path: 'img/wine-glass.jpg'
    },
    {
        name: "bathroom",
        path: 'img/bathroom.jpg'
    },
    {
        name: "bootss",
        path: 'img/boots.jpg'
    },
    {
        name: "bubblegum",
        path: 'img/bubblegum.jpg'
    },
    {
        name: "chair",
        path: 'img/chair.jpg'
    },
    {
        name: "cthulhu",
        path: 'img/cthulhu.jpg'
    },
    {
        name: "dog-duck",
        path: 'img/dog-duck.jpg'
    },
    {
        name: "dragon",
        path: 'im/dragon.jpg'
    },
    {
        name: "pen",
        path: 'im/pen.jpg'
    },
    {
        name: "pet-sweep",
        path: 'img/pet-sweep.jpg'
    },
    {
        name: "scissor",
        path: 'img/scissor.jpg'
    },
    {
        name: "shark",
        path: 'img/shark.jpg'
    },
    {
        name: "sweep",
        path: 'img/sweep.jpg'
    },
    {
        name: "tauntaun",
        path: 'img/tauntaun.jpg'
    },
];

const picsArray = []

function createPicObjs() {
    for (let i = 0; i < images.length; i++) {
        picsArray.push(new Pics(images[i].name, images[i].path, 0))
    }
}

function configSidebarImgs() {
    let liHolder = ``;
    picsArray.map((img) => {
        liHolder += `
        <li>${img.name}: ${img.getTimesShow()}
        `;
    });

    sidebarUl.innerHTML = liHolder;
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function addThreeImgs(arr) {
    const arrayOfThree = getRandom(arr, 3);
   
    let htmlData = ``;

    arrayOfThree.map((arr) => {
        htmlData += `
        <div class="image-holder-img>
            <h3>${arr.name}</h3>
            <img class="img-products" alt="${arr.name}" src="${arr.path}" />
        </div>
    `;
    });  
    console.log('html data', htmlData)
    imageHolder.innerHTML = htmlData;

}


// const goatImg = new Pixs( "babyRam", assets, "2.5 sec");
// document.getElementById("img"). 

let arr = [1, 2, 3, 4, 5]
console.log('arr: ', arr[4])
createPicObjs()
configSidebarImgs();
addThreeImgs(picsArray);