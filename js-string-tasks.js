//---------- Task 01 --------------

let myString = "Amar sonar Bangla ami tomay bhalobashi";

let count = 0;
for(let i = 0; i < myString.length; i++){
    if(myString[i].toLowerCase() === 'a'){
        count++;
    }
}
// console.log("Total'a' :", count);


//---------- Task 02 --------------

let sentence = "Anamul and Arefa are going to attend a big Art exhibition at Agargaon.";

let countLetter = 0;
for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === 'a' || sentence[i] === 'A'){
         countLetter++;
    }
}
// console.log("Total 'a' or 'A':", countLetter);



//---------- Task 03 --------------

let text = "Education is a powerful tool for innovation and unity.";
let vowels = ['a', 'e', 'i', 'o', 'u'];

let hasAllVowels = true;

let lowerText = text.toLowerCase(); 

for (let i = 0; i < vowels.length; i++) { 
    if (!lowerText.includes(vowels[i])) { 
        hasAllVowels = false;  
        break;
    }
}

if (hasAllVowels) {
    // console.log("All vowels are present.");
} else {
    // console.log("Not all vowels are present.");
}


//---------- Task 04 --------------

let myText = "Xylophone and extra exercise mix X and x.";

let replacedText = myText.replace(/x/g , 'y').replace(/X/g, 'Y');

console.log(replacedText);