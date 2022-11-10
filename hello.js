 console.log("helloworld"); 
//  const x="siliguri";
const y="hello"; 
// console.log(y + ' ' + x);
// this code is for print anything

 const x = 69 ;
function square (x)  {
    return x * x;
    
}
// console.log("square of" + x +" is ",square(x));
    
const cowsay = require("cowsay");

console.log(
    cowsay.say({
    text : "siliguri is fun",
    e : "rahul",
    T : "chutiya "
})
 );
const oneLinerJoke = require("one-liner-joke");

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);