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
  
rl.setPrompt(`What is your age? `);
rl.prompt();
let array = [];
rl.on('line', (age) => {
    if (age == 'SAIR'){//we need some base case, for recursion
    console.log(array.sort());
    return rl.close();
    }
    console.log(`Age received by the user: ${age}`);
    array.push(age)
    //rl.close();
});