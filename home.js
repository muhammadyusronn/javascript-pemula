// Menampilkan data
//console.log('Muhammad Yusron Hartoyo');
// Memberikan Alert
// alert('Selamat Datang, Bro!');
// Variabel String
//var buah = 'Mangga';
//console.log(buah);
// Variale Integer
// var angka_pertama = 99;
// console.log(angka_pertama);

// Dialog box pertanyaan

// var name = prompt ('Hey, Siapa Nama mu?');
// Menampilkan di html
// document.getElementById('TampilData').innerHTML = 'Halo Selamat Datang Di website kami,'+name;

// Number 
var num1 = 10;
console.log(num1);

// Increment
num1++;
console.log('Increment of NUM1 '+num1);
// Decrement
num1--;
console.log('Decrement of NUM1 '+num1);

// Increment/Decrement by 10
num1 += 10;
console.log('Increment of NUM1 by 10 = '+num1);
num1 -= 5;
console.log('Decrement of NUM1 by 5 = '+num1);

/* FUNCIOON
Step making a funtion :
1. Create a funtion
2. Call the function
*/

// Create a function
function greeting(YourName){
	var result = 'Halo, Nama anda adalah '+YourName;
	document.getElementById('TampilData').innerHTML = result;
	console.log(result); 
}
// var name = prompt('Siapa nama anda?');
// Call the function
// greeting(name);

function penjumlahan(num1,num2){
	var result_num = num1+num2;
	console.log('Hasil dari penjumlahan Num1 dan Num2 adalah '+result_num);
}
// Call the function
penjumlahan(10,10);

/* Pengulangan */
let num=0;
while(num<100){
	num += 1;
	console.log(num);
}

for (let i = 100; i >= 1; i--) {
	console.log(i);
}

/* Data Types*/
 
let usiamu = 23; // Number
let namamu = 'Muhammad Yusron Hartoyo' // String
let nama_mu = { first: 'Muhammad Yusron', last: 'Hartoyo'}; // Objek
let truth = false; // boolean
let fruit = ['Anggur', 'Mangga', 'Semangka', 'Durian']; // Array
let random; // undefined
let nothing=null; // Values null

/* String at Javascript */
let fruits ='Banana';
let moreFruits='Apple\nBanana';
console.log(moreFruits); // enter or new line

// Mengambil jumlah character di variable fruits
console.log(fruits.length);
// Mencari index untuk charcter nan
console.log(fruits.indexOf('nan'));
// Memotong character
console.log(fruits.slice(2,6));
// Replacing ban with ***
console.log(fruits.replace('Ban','***'));
// Changing string to upper case
console.log(fruits.toUpperCase());
//Changing string to lower case
console.log(fruits.toLowerCase());
// finding character by index
console.log(fruits.charAt(2));
console.log(fruits[2]);
// split character by comma
let fruitss='Mangga,Apel,Jeruk';
console.log(fruitss.split(','));
// split by character
console.log(fruits.split(''));

/* Array */
fruit = new Array ('Anggur', 'Mangga', 'Semangka', 'Durian');
console.log(fruit[0]); // access value at index 0;
// replacing value of array fruit index 0
fruit[0]='Sirsak';
// printing fruit's array
for (var i = 0; i < fruit.length; i++) {
	console.log(fruit[i]);
}
// Array common methods
// changing array to string
console.log('To String ', fruit.toString());
// Join array
console.log(fruit.join(' * '));
// remove last item of array
console.log(fruit.pop(),fruit);
// appends
console.log(fruit.push('Blackberry'), fruit);
// Push
fruit[fruit.length]='New Fruit';
console.log(fruit);
// Remove first element of array
fruit.shift();
console.log(fruit);
// add first element of array
fruit.unshift('Kiwi');
console.log(fruit);

let vegetables = new Array('asparagus','tomato','broccoli');
// combine array fruit and vegetables
let allGroceries = fruit.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,6));
// reverse array
console.log(allGroceries.reverse());
// Mengurutkan array by character
console.log(allGroceries.sort());

let someNumber = new Array(3,2,1,3,4,2,4,5,66,67,65,4,5444,6565,655,45,354,6343,53453,2,90);
console.log(someNumber);
console.log(someNumber.sort(function(a, b){return a-b})); // Sorting array ascending
console.log(someNumber.sort(function(a, b){ return b-a})); // Sorting array descending

let emptyArray = new Array();
for(let i=0; i<=10;i++){
	emptyArray.push(i);
}
console.log(emptyArray);

/* Object */
let student = {
	firstName : 'Muhammad Yusron',
	lastName : 'Hartoyo',
	age : 23,
	height : 178,
	studenInfo : function(){
		return this.firstName + '\n' + this.lastName + '\n' + this.age;
	}
};
// menampilkan firstName
//console.log(student.firstName);
//console.log(student.lastName);
// change value
//student.firstName='NotMuhammad Yusron';
//console.log(student.firstName);
student.age++;
console.log(student.age);
// Menampilkan data function dari object
console.log(student.studenInfo());

let days = new Array ('Minggu','Senin', 'Selasa',  'Rabu', 'Kamis', 'Jumat', 'Sabtu');
console.log(days.length);
for(let d=0; d<days.length;d++){
	if (d==0 || d>=5){
		console.log('Hari '+days[d]+' adalah weekend');
	}else{
		console.log('Hari '+days[d]+' adalah weekday');
	}
}
console.log('Ini menggunakan switch');
for(let d=0; d<days.length;d++){
	switch(d){
		case 0:
			console.log('Hari '+days[d]+' adalah weekday');
			break
		case 5:
			console.log('Hari '+days[d]+' adalah weekday');
			break;
		case 6:
			console.log('Hari '+days[d]+' adalah weekday');
			break;
		default:
			console.log('Hari '+days[d]+' adalah weekend');
	}
}

















