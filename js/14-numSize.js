console.clear ();

function numSize (num){
   // if (!Number.isInteger(num)){
    if (typeof num !== 'number' || !isFinite(num)){
        return 'ERROR';
    }
    const numAsText = '' + num;
    let size = 0;
    size = numAsText.length;
    if (num < 0){
        --size;
    }
    if (num%1 !==0){
        size--;
    }

    return size;
}

console.log (numSize());
console.log (numSize(true));
console.log (numSize('true'));
console.log (numSize([]));
console.log (numSize(null));
console.log (numSize(Infinity));
console.log (numSize(NaN));

console.log (numSize(5), '-->', 1);
console.log (numSize(567), '-->', 3);
console.log (37060133456, '-->', numSize(37060133456), 'Skaitmenu');

console.log (numSize(-5), '-->', 1);
console.log (numSize(-567), '-->', 3);
console.log (numSize(-37060133456), '-->', 11);
console.log (numSize(3.14), '-->', 3);
console.log (numSize(-3.14), '-->', 3);