
let items=[250,645,300,900,50];

let i=0;
for(let val of items){
    console.log(`value at items ${i}= ${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value at items after offer= ${items[i]}`);
    i++;
}