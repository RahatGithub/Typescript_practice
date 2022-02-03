const brothers: string[] = ['Omur', 'Robiul', 'Rahat', 'Kamruzzaman'];

let biggestName: string = "";

for (let i = 0; i <brothers.length; i++) {
    const brother: string = brothers[i];
    if (brother.length > biggestName.length){
        biggestName = brother;
    }
}

console.log(biggestName, biggestName.length);