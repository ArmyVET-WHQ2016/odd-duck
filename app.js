'use strict';

const imageHolder = document.querySelector('.image-holder');

function Sounds(name, track, duration) {
    this.name = name;
    this.track = track;
    this.duration = duration;
}

function Pics(name, path, timesShown) {
    this.name = name;
    this.path = path;
    this.timesShown = timesShown
}

const images = [
    {
        name: "bag",
        path: './img/bag.jpg'
    },
    {
        name: "banana",
        path: './img/banana.jpg'
    },
    {
        name: "unicorn",
        path: './img/unicorn.jpg'
    },
    {
        name: "water-can",
        path: './img/water-can.jpg'
    },
    {
        name: "wine-glass",
        path: './img/wine-glass.jpg'
    },

]

const picsArray = []

for (let i = 0; i < images.length; i++) {
   picsArray.push(new Pics(images[i].name, images[i].path, 0))   
}


for (let i = 0; i < 3; i++) {
   
    console.log('Pic name: ', picsArray[i].name)
    let htmlData = `
        <div>
            <img src="${picsArray[i].path}" />
        </div>
    `;

    let html = imageHolder.innerHTML;
    html = html + htmlData;
    imageHolder.innerHTML = html;
}

// const goatImg = new Pixs( "babyRam", assets, "2.5 sec");
// document.getElementById("img"). 

let arr = [1,2,3,4,5]
console.log('arr: ', arr[4])