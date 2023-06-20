console.clear();
function nthLeter (str, step){
    if (typeof str !== 'string' || str === ''){
            return 'EROOR: pirmasis parametras turi buti tekstas';
    }
    //if (typeof step !== 'number' || !isFinite(step))
    if(!Number.isInteger(step)){ // jei n4ra sveikasis skaicius
        return 'ERROR: antrasis parametras turi buti skaicius';
    }
    if (str.length< step){
        return 'ERROR: tekstas per trumpas';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti lygus nuoiui';
    }
    let text ='';

    if (step >0){
    for (let i=step-1; i<str.length; i+=step) {
        const letter =str[i];
       text += letter;
    }
} else{
    for (let i=str.length +step; i >=0; i+=step) {
        const letter =str[i];
       text += letter;
        }
    }
    return text;
}
//console.log (nthLeter(true, 2));
//console.log (nthLeter(null, 2));
//console.log (nthLeter("abc", true));
//console.log (nthLeter("abc", []));
//console.log (nthLeter("abc", undefined));
//console.log (nthLeter("abc", NaN));
//console.log (nthLeter("abc", Infinity));
//console.log (nthLeter("abc", 3.145));
//console.log (nthLeter("abc", -0.54));
//console.log (nthLeter("", 2));
console.log ('~~~~~~~~~');
console.log (nthLeter('abcdefg', 2), '-->', 'bdf');
console.log (nthLeter('abcdefghijkl', 3), '-->', 'cfil');
console.log (nthLeter('abc', 0));
console.log (nthLeter('abc', 4));
console.log (nthLeter(1456, 2));
console.log ('~~~~~~~~~');
console.log (nthLeter('abcdefghijkl', -4), '-->', 'iea');