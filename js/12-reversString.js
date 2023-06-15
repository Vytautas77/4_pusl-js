console.clear();

function reversSting(str){
    if (typeof str !== 'string'){
          return 'ERORR: reikalingas tekstas';
    }
    if ( str === ''){
        return 'ERROR: reikalingas ne tuscias tekstas';
    }
    let ats = '';
        // 1
    //for (let i= str.length -1; i >=0; i--){
      //  ats += str[i];
        //console.log (i, str[i], ats);
    //}
        //2 imti simbolius i6 galo ir jungti i6 eil4s
      //  for (let i=0; i<str.length; i++){
        //    console.log (i, str[i]);
        //}
        //3 Naudojant sukurtus ciklus
       // ats = str.split ('').reverse('').join('');

        //4 - imti raides is priekio ir d4ti prie6 tekst1,
       // for (let i = 0; i<str.length; i++){
         //   ats = str[i] + ats;
        //}
        // 5 - einame i6 priekio, bet raides imame i6 gao.
        for (let i = 0; i<str.length; i++){
            ats += str[str.length -i -1];
        }
    return ats;
}


console.log(reversSting ());
console.log(reversSting (5));
console.log(reversSting (true));
console.log(reversSting (['alkse']));
console.log(reversSting (''));

console.log('abc', '-->', reversSting ('abc'));
console.log('Labas', '-->', reversSting ('Labas'));
console.log('alus', '-->', reversSting ('alus'));
console.log(reversSting ('x'), '-->', 'x');