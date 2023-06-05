console.clear();
/*
IF (loginis palyginimas)
Palyginimo operatoriai:
    -visi : <,>, == (ar yra lygu), != (ne lygu), >=(daugiau arba lygu),
    <=, === (grieztai lygu), !==
    -naudotiniai: <,>, >=, <=, ===, !==,
    -nenaudotini: ==, != (su skrintigais tipais)
Loginiai operatoriai:
    - && (AND, ir)
    - || (OR, ar)
Sablonai
    if (){}
    () - salyga
    {} - loginis sakinys
    if(){} else {},
    if () {} else  if {} else {},
    if () {} else  if {} else if{}...... if (){} else {},
    if(4>2) {
        console.log('4 yra daugiau yz 2');
    }else{
        console.log ('nera daugiau')
    }
*/
if(4>22) {
    console.log('4 yra daugiau yz 2');
}else{
    console.log ('nera daugiau')
}

//  CODE NESTING - nestinimas
const day = 4;
if (day === 1){
    console.log ('pirmadienis');
}else{
        if (day === 2){
            console.log('antradienis');
        }else{
                if (day===3){
                    console.log ('traciadienis');
                }else{
                    if (day === 4){
                        console.log ('ketvirdadienis');
                    }else{
                    console.log ('penktadienis')
                }
            }
        }
    }
console.log('~~~~~~~~~~~~~~~~~~~~~~~');
const kokiaTemperatura = 15;
const temperatura = 5;
const arLyja = true;
if (temperatura<kokiaTemperatura){
    if (arLyja === true){
        console.log ('nera silta, reikia striukes ir skecio');
    }else{
    console.log ('nera silta, reikia striukes');
} }else {
    if (arLyja===true){
        console.log('Silta striukes nereikia, bet pasiimk sketi');
    }else{
        console.log ('Silta strukes nereikia');
    }
}
console.log('~~2 pvz~~~~~~~~~~~');
if (temperatura >= kokiaTemperatura && arLyja=== false){
    console.log ('Silta strukes nereikia');
    }else{ if(temperatura >=kokiaTemperatura && arLyja=== true)
       { console.log('Silta striukes nereikia, bet pasiimk sketi')}
     else { if (temperatura<kokiaTemperatura && arLyja===true)
        { console.log ('nera silta, reikia striukes ir skecio')
    }else{console.log ('nera silta, reikia striukes'); }
}}