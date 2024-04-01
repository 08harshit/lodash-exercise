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
const _ = require("lodash");

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

const extractName = (member) => {
  const firstName = member.name.split(" ")[0];
  return firstName;
};

const firstNames = _.map(members, extractName);

console.log(firstNames);

//2. Make everyone's last names in UPPERCASE in given array of objects.

const secondName = (member) => {
  let names = member.name.split(" ");

  names[1] = names[1].toUpperCase();
  member.name = names.join(" ");
};

_.map(members, secondName);
console.log(members);

//3. Get entries where age is between 41-60

const ageIn = [];
_.map(members, (member) => {
  if (member.age >= 41 && member.age <= 60) {
    ageIn.push(member);
  }
});
console.log(ageIn);

// 4. Get average age
let totalAge = 0;
let numberOfMembersWithAge = 0;

_.map(members, (member) => {
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
let memberWithMaxAge = null;
_.map(members, (member) => {
  if (member.age && member.age > maxAge) {
    maxAge = member.age;
    memberWithMaxAge = member;
  }
});
console.log(memberWithMaxAge);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

const ageGroup = {
  young: [],
  old: [],
  noage: [],
};

_.map(members, (member) => {
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

//_.splice(members,2, 0, { name: "Harshit", age: 23 });
// Functionality not available

//8. extract first and second element using destructing
const [first, second] = _.at(members, 0, 1);
console.log(first, second);


// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newArray = _.concat({ name: "Adrenaline", age: 20 }, members);
//const newMembers = [{ name: "Adrenaline", age: 20 }, ...members];
console.log(newArray);



//10. Extract properties of object using destructuring.

const originalObject = {
    name: 'Adrenaline',
    age: 20,
    email: 'adrenaline@gmail.com',
    address: '107,shivam nagar',
    city: 'Jaipur'
  };
  
  // Extracting specific properties
  const extractedProperties = _.pick(members[0], ['name',]);
  
  console.log(extractedProperties);

//11. Rename extracted property of object while destructing.

const { name: fullName, age: umar } = members[1];



//14 reduce function on array and object


console.log(_.reduce([1,2,3,4,5],(sum,n)=>{
    return sum+n;
},0));

// on object

const result=_.reduce({ 'apple': 'fruit', 'carrot': 'vegetable', 'banana': 'fruit', 'broccoli': 'vegetable' },(result, value, key)=> {
    (result[value] || (result[value] = [])).push(key);
    return result;
  }, {});
console.log(result);
