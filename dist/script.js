"use strict";
const madScientists = [
    {
        name: "Tessan",
        age: 60,
        henchemen: 12,
        desc: "Drunken crazy scientist",
    },
    {
        name: "Tony",
        age: 15,
        henchemen: 0,
        desc: "Always wants Ricks attention",
    },
    {
        name: "Felix",
        age: 120,
        henchemen: 100,
        desc: "Wish to live forever",
    },
];
const addBtn = document.querySelector('button');
let sec1 = document.getElementById('main-content');
let sec2 = document.getElementById('displaybox');
let par1 = document.getElementById('descText');
// --- Print out Scientists / Shows description on far right column ---
let printcard = function () {
    let length = madScientists.length;
    for (let i = 0; i < length; i++) {
        let div1 = document.createElement('div');
        div1.className = "card";
        div1.innerHTML = `${madScientists[i].name}`;
        let btn1 = document.createElement('button');
        btn1.className = "descBtn";
        btn1.innerHTML = "Description";
        sec1.append(div1);
        sec1.append(btn1);
    }
    let showBtn = document.getElementsByClassName("descBtn");
    for (let n = 0; n < showBtn.length; n++) {
        showBtn[n].addEventListener("click", function (show) {
            par1.innerHTML = `${madScientists[n].desc}`;
        });
    }
};
//    ---- Add Scientists ----
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let sciName = document.querySelector('#fname');
    let sciDesc = document.querySelector('#description');
    let sciAge = document.querySelector('#age');
    let sciMinion = document.querySelector('#henchemen');
    let arr = {
        name: sciName.value,
        age: parseFloat(sciAge.value),
        minions: parseFloat(sciMinion.value),
        desc: sciDesc.value,
    };
    madScientists.push(arr);
    sec1.innerHTML = "";
    printcard();
});
printcard();