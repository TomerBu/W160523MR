//import the readline built in module:
const readline = require('node:readline');

//import the standard input/output streams: 
//stdin = keyboard
//stdout = console
const { stdin, stdout } = require('node:process');

//config readline to use stdin (keyboad), stdout (console)
const rl = readline.createInterface({ input: stdin, output: stdout });

//the question will be printed to the console (stdout)
// the answer will be captured from the keyboard(stdin)
rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});