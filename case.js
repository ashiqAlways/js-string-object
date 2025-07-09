const school = 'RAJ UK Model School';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


// uppercase: ABCD EFG
// lowercase: abcd efg



const subject = 'Chemistry';
const book = 'chemistry'

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book aibar porikkhai fatai felmu');
}
else {
    console.log('hudai dhudai prista ulstai');
}



const drink = ' Water';
const liquid = ' Water  ';

if(drink.trim() === liquid.trim()){
    console.log('panier opor nam jibon');
}
else(
    console.log('somudre pani ache but khaite pari na')
)