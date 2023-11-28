const person = {
    $firstName: "dave"
}

console.log(person["$firstName"])

// db.createCollection("students", {
//     validator: {
//         $jsonSchema: {
//             required: ["firstName", "lastName", "year", "country", "_id"],
//             properties: {
//                 _id: {
//                     bsonType: "objectId"
//                 },
//                 firstName: {
//                     bsonType: "string",
//                     description: "'firstName' must be a string and is required",
//                     minLength: 2
//                 },
//                 middleName: {
//                     bsonType: ["string", "null"],
//                     description: "middleName Must be a string or null"
//                 },
//                 lastName: {
//                     bsonType: "string",
//                     description: "'lastName' must be a string and is required"
//                 },
//                 year: {
//                     bsonType: "int",
//                     description: "Birth Year",
//                     minimum: 1900,
//                     maximum: 2100
//                 },
//                 email: {
//                     bsonType: "string",
//                     description: "email must end with @mongodb.com",
//                     pattern: "@mongodb\.com$"
//                 },
//                 country: {
//                     enum: ["UK", "USA"],
//                     description: "Must be UK or USA"
//                 }
//             },
//             additionalProperties: false
//         }
//     }
// })