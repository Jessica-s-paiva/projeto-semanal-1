// import express from 'express'; // importando o pacote

// const app = express();

// const readline = require('readline');
// let comandos = []; 
// const rl = readline.createInterface(process.stdin, process.stdout);
    
//      rl.question('Digite sua lista de comandos: ', (comand) => {
//             comandos.push(comand);
//             if(comand == 'SAIR'){
//                 console.log(comandos);
//             }
//         //rl.close();
//     });

var readline = require('readline');
  
var rl = readline.createInterface(
        process.stdin, process.stdout);
  
rl.setPrompt(`Quais comandos deseja listar? \n`);
rl.prompt();
let array = [];
rl.on('line', (comand) => {
    if (comand == 'SAIR'){//we need some base case, for recursion
        const arrayOrd = array.sort();
    console.log(arrayOrd.join(" "));
    return rl.close();
    }
    //console.log(comand);
    array.push(comand)
    //rl.close();
});