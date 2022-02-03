"use strict";
const brothers = ['Omur', 'Robiul', 'Rahat', 'Kamruzzaman'];
let biggestName = "";
for (let i = 0; i < brothers.length; i++) {
    const brother = brothers[i];
    if (brother.length > biggestName.length) {
        biggestName = brother;
    }
}
console.log(biggestName, biggestName.length);
