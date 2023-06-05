console.clear();
/*
SWITCH (panasus i IF)
switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/
const diena = 2;

switch (diena) {
    case 1:
        console.log('pirmadienis');        
        break;
        case 2:
        console.log('antradienis');        
        break;

    default:
        console.log('tokios dienos savaiteje nera')
        break;
}
console.log('~~~~~~~~~~~');
const day = 6;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');        
        break;
    case 6:
    case 7:
        console.log('savaitgalis');        
        break;
    default:
        console.log('tokios dienos savaiteje nera')
        break;
}
console.log ('~~~~~~~ pvz su IF~~~~~');
if (day ===1 || day ===2 || day ===3 || day ===4 || day ===5){
    console.log('darbo diena');  
}else if (day ===6 || day ===7){
    console.log('savaitgalis'); 
} else {
    console.log('tokios dienos savaiteje nera');
}
console.log('~~panaikinus BREAK renkam4s is ko liko~~~~~~~~~~');
const gamybosEtapas = 3;
switch (gamybosEtapas) {
    case 1:
        console.log('Pasiimti puodeli');        
    case 2:
        console.log('isideti arbatos');        
    case 3:
        console.log('pasisaldinti jei norisi');        
    case 4:
        console.log('Isipilti vyrinto vandens');        
    case 5:
    console.log('Gerti');        
    break;
    default:
        console.log ('Tokio etapo nera');
        break;
}