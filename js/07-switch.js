console.clear();
/*
SWITCH (panasus i IF)
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const diena =10;
switch (diena) {
    case 1:
        console.log('pirmadienis');
    break;
    case 2:
        console.log('antradiens');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadiens');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadiens');
        break;
    case 7:
        console.log('sekmadienis');
    break;
    default:
        console.log("tokios dienos savaiteje nerra!")
    break;
}
// antras variantas
const day =8;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("darbo diena");
        break;
    case 6:
    case 7:
        console.log('savaitgals');
        break;
    default:
        console.log('tokios dienos nera !')
        break;
}
// tas pats su IF
         if (day=== 1 || day === 2 || day === 3 || day === 4 || day === 5) {
            console.log("darbo diena");
         } else if (day === 6 || day == 7) {
            console.log('savaitgals');      
         } else {
            console.log('tokios dienos nera !')
         }
// trecias variantas eiles tvarka
console.log('~~~~~~~~~~~~~~')
const gamybosEtapas = 5;
switch (gamybosEtapas) {
    case 1:
        console.log ('pasiimti puodeli');
    case 2:
        console.log ('isideti ardatos');
    case 3:
        console.log ('pasisaldinti arba ne');
    case 4:
        console.log ('uzsipilti vyrinto vandens');
    case 5:
        console.log ('atsiferti arbatos');
    case 6:
        console.log ('eiti dirbti');
        break;
    default:
        console.log('Tokio etapo nera');
        break;
}