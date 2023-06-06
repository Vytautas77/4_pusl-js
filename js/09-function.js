console.clear();
/*
function sudetis(a, b) {
    return a+b;
}
const s1 = sudetis(7, 5);
console.log(`7+5=${s1}`);

const s2 = sudetis(21, -7);
console.log(`21-7=${s2}`);

function arLyginis(skaicius){
    if (skaicius %2 ===0) {
        return 'lyginis'
    }
    return 'ne lyginis'
}
const l1=arLyginis(7);
console.log(`7 yra ${l1}`)

const l2=arLyginis(88);
console.log(`88 yra ${l2}`)

console.log ('~~~~~~~~~~~~~');
const petras = [10, 2, 8, 4, 6];
const maryte = [10, 9, 8, 7];
const jonas = [2, 3, 4, 5];
const ona = [5, 5, 5, 5, 5, 5, 5, 5, 5];

function average(marks) {
   let sum = 0;
   for (let i=0; i<marks.length; i++){
    sum +=marks[i]
   }
    return sum / marks.length;
}
console.log('Petras vidurkis', average(petras), petras);
console.log('Maryte vidurkis', average(maryte), maryte);
console.log('Jonas vidurkis', average(jonas), jonas);
console.log('Ona vidurkis', average(ona), ona); 

console.log ('~~~~~~~~~~~~~~~~~~~~');

function vidurkis(skaicius) {
    if (skaicius%2 === 0){
        return 'lyginis'
    }
    return 'nelyginis'   
}
const l1 = vidurkis (88);
    console.log (`Skaicius 88 yra ${l1}`);
const l2 = vidurkis (77);
    console.log (`Skaicius 77 yra ${l2}`);
    */
    console.log ('~~~~~~~~~~~~~~~~~~~~');
    function skaic (a, b) {
        //jei a yra ne skaicius
        if (typeof a!== 'number'){
            return 'Klaida: pirmas parametras yra ne skaicius';
        }
        //jei b yra ne skaicius
            if (typeof b!== 'number'){
                return 'Klaida: antras parametras yra ne skaicius'
            }
        return a-b;        
    }
    console.log (`Kaiciu suma lygi ${skaic(5,7)}`);
    console.log (`Kaiciu suma lygi ${skaic(true,7)}`);
    console.log (`Kaiciu suma lygi ${skaic(5,true)}`);
    console.log (`Kaiciu suma lygi ${skaic(false,7)}`);
    console.log (`Kaiciu suma lygi ${skaic(5,false)}`);