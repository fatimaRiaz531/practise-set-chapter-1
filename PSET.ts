console.log("practise set chapter 1");

// Q 1: create a variable of type string and  try to add a number to it.

let a = "Fatima"
let b = 9
console.log(a+b);

// Q 2:  use typeof operator to find the datatype of the string in  last question

console.log(typeof (a+b));

// Q 3: create a const object in javascript can you change to hold a number later?

const a1= {
    name: "Fatima",
    section: 1,
    isPrincipal: false
}
a1= 234                                     // error

// Q 4: try to add a new key to the create object in problem 3 were you able to do it?


a1['friend'] = 'Ahmed'
a1['name'] = 'mohsin'
console.log(a1);

// Q 5: write a JS program to create  a word meaning dictionary of 5 words


const dic = {
    martyr: 'Someone who suffers, or is even killed, for his or her political or religious beliefs is called a martyr',

    fantacy: "A fantasy is something you imagine, which might involve dragons, unicorns, or an imaginary best friend",

    abstract:"Use the adjective abstract for something that is not a material object or is general and not based on specific",

    explict: "Anything explicit is completely clear and includes details.",

    vaccum: "A vacuum is essentially a great lack of something — a place where virtually all matter, even air, has been removed."
}

console.log(dic.abstract);


