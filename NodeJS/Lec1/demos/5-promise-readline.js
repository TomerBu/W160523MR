const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');
const rl = readline.createInterface({ input: stdin, output: stdout });

const demoReadline = async () => {
    const ans = await rl.question("'What do you think of Node.js?'")
    console.log(`Thank you for your valuable feedback: ${ans}`);
    rl.close();
}

demoReadline();



