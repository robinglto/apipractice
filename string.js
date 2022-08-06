let string = `Hola, esto es una breve muestra
                lo que no se debe de hacer en
                ciertas circunstancias de la vida`

let palabra = 'charmander'

console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(palabra.charAt(3));


let objeto = new String(string);
console.log(objeto)



//Object returns

let stringone = '2+2';
let stringtwo = new String('2+2');
console.log(eval(stringone));
console.log(eval(stringtwo));
console.log(eval(stringtwo.valueOf())) //aqui si se ejecuta la ultima sentencia del objeto string
console.log(stringone);
console.log(stringtwo)



let text = "How are you doing today?";
const myArray = text.split(" ");


//instancesof


const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world");     // b === "Hello world" is true
console.log(a instanceof String);         // is true
console.log(b instanceof String);         // is false


let stringlol = 'Life, the universe and everything. Answer:';
console.log(`${stringlol} ${stringlol.length}`);


let palabreando = 'laptop';
console.log(palabreando.at(2))


let valores = [1,2,[3,4,[5,6]]];
valores = valores.join(',');
console.log(valores)