

// const xorshift = require('xorshift');
// console.log(xorshift.random())

// const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4())
// console.log(uuidv4())
// console.log(uuidv4())
// console.log(uuidv4())

const faker = require('faker');
const randomName = faker.name.findName();
console.log(faker.name.findName())

console.log(randomName)
console.log(faker.address.streetAddress())
console.log(faker.animal.dog())
console.log(faker.address.streetAddress())
console.log(faker.address.timeZone())
console.log(faker.company.companyName())
console.log(faker.datatype.datetime())
console.log(faker.lorem.text())
console.log(faker.lorem.word())

console.log(faker.internet.ip())

console.log(faker.lorem.paragraph())























