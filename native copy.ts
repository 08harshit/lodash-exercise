/*
const members = [
  {name: 'Rakesh Gupta', age: 20},
  {name: 'Yash Jangid', age: 40},
  {name: 'Firoz Khan', age: 41},
  {name: 'Amrit Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];


1. Get array of first names of everyone 


2. Make everyone's last names in UPPERCASE in given array of objects
3. Get entries where age is between 41-60
4. Get average age
5. Get Person with maximum age
6. Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
7. add a new member to same members array instance at index 2
8. extract first and second element using destructing
9. Create a new array instance adding a new member at index 0,
   and keeping existing afterwards
10. Extract properties of object using destructuring
11. Rename extracted property of object while destructing
12. Destructure any property of an object and use spread operator to get remaining properties in an object
13. Create a new object by copying using spread operator, override
    one of the properties to assign a new value in the same step
14. Use reduce function on array and object
*/

const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

//1. Get array of first names of everyone
const firstNames = members.map((member) => {
  const firstName = member.name.split(" ")[0];
  return firstName;
});

console.log(firstNames);

//2. Make everyone's last names in UPPERCASE in given array of objects
members.map((member) => {
  let names = member.name.split(" ");

  names[1] = names[1].toUpperCase();
  member.name = names.join(" ");

  console.log(member)
});
//console.log(members);

//3. Get entries where age is between 41-60
const ageIn:Member[] = [];
members.map((member) => {
  if (member.age!=undefined &&member.age >= 41 && member.age <= 60) {
    ageIn.push(member);
  }
});

console.log(ageIn);

// 4. Get average age
let totalAge = 0;
let numberOfMembersWithAge = 0;

members.map((member) => {
  if (member.age !== undefined) {
    totalAge += member.age;
    numberOfMembersWithAge++;
  }
});

const avgAge =
  numberOfMembersWithAge > 0 ? totalAge / numberOfMembersWithAge : 0;
console.log(avgAge);

//5. Get Person with maximum age

let maxAge = 0;
let memberWithMaxAge:Member|null =null

for (const member of members) {
  if (member.age && member.age > maxAge) {
    maxAge = member.age;
    memberWithMaxAge = member;
  }
}
console.log(memberWithMaxAge)

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

type Member = {name: string, age?: number};
interface AgeGroups {
  young: Member[],
  old: Member[],
  noage:Member[]
}

const ageGroup:AgeGroups = {
  young: [],
  old: [],
  noage: [],
};

members.map((member) => {
  if (!member.age) {
    ageGroup.noage.push(member);
  } else if (member.age < 35) {
    ageGroup.young.push(member);
  } else {
    ageGroup.old.push(member);
  }
});

console.log(ageGroup);

// 7. add a new member to same members array instance at index 2

members.splice(2, 0, { name: "Harshit", age: 23 });

console.log(members);

//8. extract first and second element using destructing

const [first, second] = members;

console.log(first, second);

// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards

const newMembers = [{ name: "Adrenaline", age: 20 }, ...members];
console.log(newMembers);

//10. Extract properties of object using destructuring.

const { age } = members[0];

console.log(age);

//11. Rename extracted property of object while destructing.

const { name: fullName, age: umar } = members[1];
console.log(fullName, umar);

//12. Destructure any property of an object and use spread operator to get remaining properties in an object.

const person = {
  name: "Adrenaline",
  age: 22,
  city: "Jaipur",
  country: "India",
};

const { country, ...details } = person;

console.log(country, details);

//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step.
const newPerson= {...person,name:'Pheonix'};
console.log(newPerson);

//14. Use reduce function on array and object.

// Reduce function on array
const numbers = [2, 3, 4, 5];

const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1); 

console.log("Product:", product); 

// Reduce function on object



const concatenatedValues = Object.values(person).reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
}, "");

console.log("Concatenated Values:", concatenatedValues);


