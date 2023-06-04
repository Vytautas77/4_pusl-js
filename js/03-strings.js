console.clear();
const vardas = 'Petras';
console.log(vardas);
//komentaras
const spec ='\\\\*';
console.log(spec);

const HTML ='<header>\n\
    <img src ="#">\n\
    <nav></nav>\n\
    </header>';
console.log(HTML);

const HTML1 =`<header>
    <img src ="#">
    <nav></nav>
    </header>`;
console.log(HTML1);
console.log('~~~~~~~~~~~~~~~~~');

const name ='Maryte';
const age = '88';
const sity = 'miestas';
//Sveiki, mano vardas [vardas], man yra [amzius] metai
// ir as esu is [vietovardis]
const sms = 'Sveiki, mano vardas ' +name +
', man yra ' + age + ' metai ir as esu is ' + sity + '.';
console.log (sms);

const sms1 = `Sveiki, mano vardas ${name}, man yra ${age} metai ir as esu is ${sity}.`;
console.log (sms1);
