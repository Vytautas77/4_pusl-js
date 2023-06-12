console.clear();
function rangeSum(from, to) {
    if (typeof from !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius.';
    }
    if (typeof to !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius.';
    }    
    return 0;
}
console.log (rangeSum(true,  0));
console.log (rangeSum(0, false));
console.log (rangeSum('sdre', 50));
console.log (rangeSum(0, 'dfdfr'));
console.log (rangeSum([], 815));
console.log (rangeSum(-70, null));

console.log (rangeSum(0,  0), '-->', 0);
console.log (rangeSum(0, 100), '-->', 5050);
console.log (rangeSum(-50, 50), '-->', 0);
console.log (rangeSum(0, 4), '-->', 10);
console.log (rangeSum(574, 815), '-->', 0);
console.log (rangeSum(-70,30), '-->', -2020);