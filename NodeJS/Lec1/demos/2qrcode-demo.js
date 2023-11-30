const Qrcode = require('qrcode');

// print the dataurl to the console
Qrcode.toDataURL(text = "Welcome to Node", (err, url) => {
    if (err) {
        console.error(err)
    } else {
        console.log(url);
    }
})

// print the qrcode to the terminal:
Qrcode.toString('I am a pony!', { type: 'terminal' }, function (err, url) {
    console.log(url)
})

// print the qrcode to a file:
Qrcode.toFile("pony.png", "Im a Pony!", (err) => {
    if (err) {
        console.error(err);
    }
})