// array collection
// object collection

// similarities:
// - contains multiple values
// - values are seperated by commas
// - values can be any datatype
// - you can make both into a list
// - you can change the values in the collection
// - they are "indexed"

// differences
//
// objects
//  - indexed by 'keys', name: 'Rein', the key is name
//  - access values by key
//  - {} -> curly braces
//  - each value has a "name" or a key
//  - you cannot rely on the order of properties
//  - data has context
//
// array
//  - indexed by position, first element, second element etc..
//  - access values by position
//  - [] square brackets
//  - order
//  - pick when the order matters

const patients = require("./patients");

// console.log(patients[patients.length - 1]);
// console.log(patients[0]);

// console.log(patients.firstName);
// predictions
// error
// nothing
// undefined
// reference error
// all the firstnames

const patient1 = patients[0];

// const keyToLog = process.argv[2];
// console.log("WHat do I want to see", keyToLog);
// console.log(patient1[keyToLog]);

const email = patient1.email;
const weight = patient1.weight;
const lastName = patient1.lastName;
// const exercise = patient1.exercise;

// console.log(email, weight, lastName);

// desctructuring "magic"
// declare variables age, dailyExercise and height
// assign them the values of patient1.age, patient1.dailyExercise and patient.height
const { age, dailyExercise, height } = patient1;

// console.log(age, dailyExercise, height);

// console.log(patient1);

// array desctucturing
const [x, y, z] = patients;

// console.log(y);

// for (let index = 0; index < patients.length; index++) {
//   console.log(index);
//   console.log(patients[index].firstName); // 0, 1, 2, 3, 4
// }

// for (let index = 0; index < patients.length; index++) {
//   const patient = patients[index];
//   console.log(patient.age);
// }

// predictions
// 1 to 10
// 0 to 9

// forEach -> This can anything, you want to perform a side effect
// find -> finding one piece of data
// filter -> selecting which pieces of data to keep
// map -> your are changing each piece of data

// - They require a "callback" function
// - The iterator will execute that function for every element of the array

// - we want to console log a greeting a patient
// - forEach: console is a side effect

patients.forEach(function (patient) {
  const { firstName, lastName } = patient;
  console.log(`Hello ${firstName} ${lastName}`);
});

// we want an array of all patients younger than 40

const youngPatients = patients.filter(function (patient) {
  //   console.log(patient.age, patient.age < 40);
  if (patient.age < 40) {
    return true;
  }

  return false;
  //   return patient.age < 40;
});

// console.log(youngPatients);

// we want all the phoneN umbers of the patients
// [{}, {}, {}, {}] -> ['06233563456345', '065485795689', '06345234524', '0623452345']
// Map

const phoneNumbers = patients.map(function (patient) {
  const { email, phoneNumber } = patient;
  return { email: email, phoneNumbers: phoneNumber };
});

console.log(phoneNumbers);
// console.log(patients);

const emails = patients.map(function (patient) {
  const { firstName, lastName, email } = patient;
  return `
    <html> 
        <head></head>
        <body>
            <p>To: ${email}</p>
            <h1>Hello ${firstName} ${lastName} </h1>

            Thank you for participating in our study
        </body>
    </html>
  `;
});

console.log(emails);

const patientSophey = patients.find(function (patient) {
  console.log(patient.email, patient.email === "snano3@uol.com.br");
  if (patient.email === "snano3@uol.com.br") {
    return true;
  }

  return false;
});

console.log(patientSophey);

let contactDetails = [];

for (let index = 0; index < patients.length; index++) {
  const patient = patients[index];
  const { email, phoneNumber } = patient;

  contactDetails.push({ email: email, phoneNumber: phoneNumber });
}

console.log(contactDetails);

let patientWeAreLookingFor;

for (let index = 0; index < patients.length; index++) {
  const patient = patients[index];

  if (patient.email === "snano3@uol.com.br") {
    patientWeAreLookingFor = patient;
    break;
  }
}

console.log(patientWeAreLookingFor);
