//---------- Task 01 ----------------

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
}

// console.log(colors['golden rod'])

const golden = colors['golden rod'];
// console.log(golden)


//---------- Task 02 ----------------

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020, 
};

car['passenger capacity'] = 5;



//---------- Task 03 ----------------

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// console.log(student.physics.marks);


//---------- Task 04 ----------------

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = Object.keys(students).length;
// console.log(count)

//---------- Task 05 ----------------

 let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
 }


 for(let key in myObject){
    console.log(`key: ${key} | type: ${typeof myObject[key]}`)
    
 }