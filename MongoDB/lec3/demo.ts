// our phone regex:
const regex = /^(\+972|05\d{1}-?\d{7})|(\+972|0[23489]-?\d{7})$/;

//test array:
const phoneNumbers = ["08-5632213"];

//loop over all phoneNumbers:
phoneNumbers.forEach((p) => {
  const match = regex.exec(p);

  if (match) {
    //valid phone
    if (match[1]) {
      console.log(`The phone you provided ${p} is a mobile phone`);
    } else if (match[2]) {
      console.log(`The phone you provided ${p} is a landline phone`);
    }
  } else {
    console.log(`The phone you provided ${p} does not match`);
  }
});

//התקנה חד פעמית:
// windows:
//npm i -g ts-node

// mac:
//sudo npm i -g ts-node

// run a file:
//ts-node demo.ts
