console.clear ();
function biggestNum (list){
    if (!Array.isArray(list)){
        return 'ERROR: duog skakiciu sarasa';
    }
    let biggest = -Infinity;
    // let biggest = list[0]; let i=1
    for(let i=0; i<list.length; i++){
        const num = list [i];   
        if (typeof num !== 'number' || !isFinite(num)){ // ar cikle yra nenormaliu skaiciu, begalybe
            continue;  // tesk cikl1
        }
        if (num > biggest) {
                biggest = num;
            }
        }
        if (biggest === -Infinity){
            return 'ERROR: sarase nerastas nei vienas normalus skaicius';
        }

  return biggest;  
}
console.log (biggestNum());
console.log (biggestNum(true));
console.log (biggestNum(undefined));
console.log (biggestNum('pomidoras'));
console.log (biggestNum(null));
console.log  ('~~~~~~~~~~~~~~~');
console.log(biggestNum([0]));
console.log(biggestNum([1, 2, 3]));
console.log(biggestNum([1, 2, 3,89, 105]));
console.log('[1, 45, 78, 2, 3]', 'Didziausias skaitmuo -->',  biggestNum([1, 45, 78, 2, 3]));
console.log('[1, 45, -78, 2, 3]', 'Didziausias skaitmuo -->',  biggestNum([1, 45, -78, 2, 3]));
console.log('[-1, -45, -78, -2, -3]', 'Didziausias skaitmuo -->',  biggestNum([-1, -45, -78, -2, -3]));
console.log('[-1, -5, 78, Infinity, -3]', 'Didziausias skaitmuo -->',  biggestNum([-1, -5, 78, Infinity, -3]));
console.log('[1, 1, 1, true, 1]', 'Didziausias skaitmuo -->',  biggestNum([1, 1, 1, true, 1]));
console.log('[false, null, true, Infinity, " "]', 'Didziausias skaitmuo -->',  biggestNum([false, null, true, Infinity, '']));