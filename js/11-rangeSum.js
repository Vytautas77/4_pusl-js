console.clear();
/*function rangeSum(from, to) {
    if (typeof from !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius.';
    }
    if (typeof to !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius.';
    }    
    return 0;
}*/
function rangeSum(from, to){
    if (typeof from !== 'number'){
        return 'ERROR. Pirmasis parametras turi buti skaicius!';
    }
    if (!Number.isInteger(from)){
        return 'ERROR. Pirmasis parametras turi buti sveikasis skacius!';
    }

   if (typeof to !== 'number'){
        return 'ERROR. Antrasis parametras turi buti skacius!';
   }
   if (!Number.isInteger(to) ){
        return 'ERROR. Antrasis parametras turi buti sveikasis skacius!';
   }   
   let sum = 0;
   
  //  for (let i = from; i <= to; i++) {
    //    sum += i;
   // }

if (from < to) {
   for (let i = from; i <= to; i++) {
        sum += i;
    }}
    else { 
        for (let i = to; i <= from; i++) {
            sum += i;
    }
    }
        return sum;
}
console.log (rangeSum(true,  0));
console.log (rangeSum(0, false));
console.log (rangeSum('sdre', 50));
console.log (rangeSum(0, 'dfdfr'));
console.assert (rangeSum([], 815));
console.assert (rangeSum(-70, null));
console.assert (rangeSum(52, NaN));
console.assert (rangeSum(NaN, 10));
console.assert (rangeSum(0, Infinity));
console.assert(rangeSum(45, true));

console.log (rangeSum(0, 0), '-->', 0);
console.log (rangeSum(0, 100), '-->', 5050);
console.log (rangeSum(-50, 50), '-->', 0);
console.log (rangeSum(0, 5), '-->', 10);
console.log (rangeSum(-70, 30), '-->', -2020);
console.log (rangeSum (574, 815));
console.log (rangeSum (55, 25))