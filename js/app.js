/*Hey Prepstars!  By now, you should have a good understanding of the basics of Javascript.
The following exericese will be a good review of the materials we covered in class:

Don't forget to commit and push your work after each completed exercise.

Go get em!*/

/*1.  Variables with a String as their value.
Declare variables named yourName, neighborName, teacherName.  Console log each variable.*/
var yourName = "Lisa";
console.log(yourName);
var neighborName = "John";
console.log(neighborName);
var teacherName = "Ray";
console.log(teacherName);

/*2. Variable with a Number as their value.
Declare variables named numberOfFloorsBurjKhalifa, TokyoOlympicsYear.  Console log each variable.*/
var numberOfFloorsBurjKhalifa = 163;
console.log(numberOfFloorsBurjKhalifa);
var TokyoOlympicsYear = 1940;
console.log(TokyoOlympicsYear);

/*3. Variables with Boolean values
Declare variables named lovesPrepClass, eatsDonuts, drinksGin.  Console log each variable.*/
var lovesPrepClass = true;
console.log(lovesPrepClass);
var eatsDonuts = true;
console.log(eatsDonuts);
var drinksGin = false;
console.log(drinksGin);

/*4. Variable with Null values
Declare variables named completedCodingChallenge, traveledToSpace.  Console log each variable*/
var completedCodingChallenge = null;
console.log(completedCodingChallenge);
var traveledToSpace = null;
console.log(traveledToSpace);

/*5.  Variables with Array for its value.
Declare a variable named japanPrefectures and assign the value of the names of 5 prefectures in Japan.
Console log the variable 
Console log the value at index 1.
Console log the value at index 3.*/
var japanPrefectures = ["Hokkaido", "Tokyo", "Chiba", "Kanagawa", "Miyagi"];
console.log(japanPrefectures);
console.log(japanPrefectures[1]);
console.log(japanPrefectures[3]);

/*6.  Variable with Array for its value.
Declare a variable named planets and assign the value of each planet in our solar system, in the order of distance from the sun.  
Console log the variable
Console log "Earth" using the index position
Console log "Uranus" using the index position*/
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log(planets);
console.log(planets[2]);
console.log(planets[6]);

/*7. Variables with Array for its value.
Declare a variable named india and assign the value of 3 popular tourist attractions.  
Console log the variable.*/
var india = ["Taj Mahal", "Qutb Minar", "Humanyun's Tomb"];
console.log(india);

/*8.  Declare a literal object named "hotel" with properties and values set to:

    name    => "Hilton"
    rooms   => 200
    pool    => true
    checkIn => null

 console log the object*/
var hotel = {
	name: "Hilton",
	rooms: 200,
	pool: true,
	checkIn: null
};
console.log(hotel);

/*9.  Declare a literal object named "car" with properties and values set to:

    make  => "BMW"
    model => "X5"
    year  => 2015
    doors => 4

 console log the object*/
var car = {
	make: "BMW",
	model: "X5",
	year: 2015,
	doors: 4
};
console.log(car);

/*10.  Declare a literal object named bigBox and set its value to be an empty object.

Add a property named size and set it to a random number value between 0 and 50 (hint, use Math.something...)
Add a prperty named color and set it to any color.
Add a property named contents and set it to be an empty array

console log the object*/
var bigBox = {};
bigBox.name = Math.floor(Math.random() * 50);
bigBox.color = "pink";
bigBox.contents = [];
console.log(bigBox);

/*11.  Declare a literal object named "colorMeBadd" with properties and values set to:

   iro        => [literal object]

                  akai      => 'red'
                  aoi       => 'blue'
                  midori    => 'green'
                  shiroi    => 'white'
                  pinku     => 'pinku'
                  murasaki  => 'purple'

   isJapanese => true              

console log the object */ 
var colorMeBadd = {
	iro: {
		akai: "red",
		aoi: "blue",
		midori: "green",
		shiroi: "white",
		pinku: "pink",
		murasaki: "purple"},
	isJapanese: true,
};
console.log(colorMeBadd);

/*For exercises #12 - 14, declare two variables, one named "dog" and the other named "cat".  Assign a number value for each variable.*/
var dog = 1;
var cat = 9;

/*12.  Declare a function named add.
This function will take two parameters and returns the result of adding two numbers together.
Store this value in a variable named sum and console log this variable.*/
function add (x,y) {
	return x + y;
}
var sum = add(dog,cat);
console.log(sum);

/*13.  Declare a function named subtract. 
This function will take two parameters and returns the result of subtracting two numbers together. 
Store this value in a variable named difference and console log this variable.*/
function subtract (x,y) {
	return x - y;
}
var difference = subtract(dog,cat);
console.log(difference);

/*14. Declare a function named multiply.
This function will take two parameter and return the result of multipling two numbers together.
Store this value in a variable named product and console log this variable.*/
function multiply (x,y) {
	return x * y;
}
var product = multiply(dog,cat);
console.log(product);

/*15.  Declare a function named dunkinDonuts.
This function will access the value stored in the sum variable and uses this number to return the string "I eats X old fashioned donuts every morning to stay classy." X is the value stored in the sum variable.  Console log the result.  */ 
function dunkinDonuts (x) {
	return "I eats " + x + " old fashioned donuts every morning to stay classy.";
}
console.log(dunkinDonuts(sum));

/*16.  Declare a function named stayinClassy.
This function will access the values store in the difference and product variables and uses these numbers to return the string "Yea, I drank X gallons of box wine and ate Y bags of Cheetos and still feel vibrant yo!"  X is the value stored at difference variable and Y is the value stored at product variable. Console.log the result.*/
function stayinClassy (x,y) {
	return "Yea, I drank " + x + " gallons of box wine and ate " + y + " bags of Cheetos and still feel vibrant yo!";
}
console.log(stayinClassy(difference,product));

/*17.  Declare a function named watMyName, which takes two parameters firstName and lastName.
This function will return a string "My name is...firstName lastName."
Invoke this function by passing in the string values of "Slim", "Shady". and console log the result.
*/
function watMyName (firstName,lastName) {
	return "My name is..." + firstName + " " + lastName;
}
console.log(watMyName("Slim","Shady"));

/*18. Using the japanPrefectures array you created in exercise 5, create a for loop that iterates through this array and console logs the following message:

"The location at i is:  ."  and append the value of i and the value stored within the Array at that index to this string.

i.e. "The locaton at 0 is Tokyo."*/
for (var i = 0; i < japanPrefectures.length; i++) {
	console.log("The locaton at " + i + " is: " + japanPrefectures[i] + ".");
}

/*19. Declare a variable named "oddNumbers".
Use a for loop to add only odd numbers to an Array.  Add 30 odd numbers to the oddNumbers variable starting with the value of 1.*/
var oddNumbers = [];
for (var i = 1; i < 60; i++) {
	if (i%2 === 1){
		oddNumbers.push(i);
	}
}
console.log(oddNumbers);

/*20.  Declare a function named "oldEnough".
This function takes in a number parameter age and returns a Boolean value true or false if the age is lower than the minimum legal drinking age in Antigua.

Invoke this function by passing in a number value.  Google search Antigua's minimum drinking age to confirm the number value.  Store the return value to a variable named drinkinAlready and console log this variable*/
function oldEnough (age) {
	return age >= 18;
}
var drinkinAlready = oldEnough(27);
console.log(drinkinAlready);

/*21. Declare a function named fightDaPower.
This function checks the value stored at the drinkinAlready variable in the previous exercise and if the value is true, return the string "I'm jumping on the next flight to Antigua." Otherwise return the string "I can't wait to be in the 5th grade!"  Console log the result.*/ 
function fightDaPower (drinkinAlready) {
	if (drinkinAlready){
		return "I'm jumping on the next flight to Antigua.";
	}
	else{
		return "I can't wait to be in the 5th grade!";
	}
}
console.log(fightDaPower(drinkinAlready));

/*22. Declare a function named contentFiller which takes in a single parameter which will be an object.  Write a for loop that will put 5 random numbers between the values of 0 to 20 in the contents array in the bigBox object you created in exercise 10.  Console log the result.*/
function contentFiller (obj) {
	for (var i = 0; i < 5; i++) {
		var random = Math.floor(Math.random() * 20);
		obj.contents.push(random);
	}
}
contentFiller(bigBox);
console.log(bigBox);

/*23.  Declare a function named firstReverse which takes a single parameter str.  This function will take a string parameter being passed in and return the string in reverse order.*/
var str = "desserts";
var newStr = "";
function firstReverse (str) {
	for (var i = str.length - 1; i >= 0; i--) {
		var letter = str.charAt(i);
		newStr +=letter;
	}
}
firstReverse(str);
console.log(newStr);

/*24.  Using DOM, create the follow HTML layout:

<div id="dessert">
  <span id="cakes">
     <p>chocolate</p>
  </span>   
</div>
<div id="drinks">
  <span id="juice">
    <p>kool-aid</p>
  </span>
</div>    
*/

var firstDiv = document.createElement("div");
firstDiv.id = "dessert";
var firstSpan = document.createElement("span");
firstSpan.id = "cakes";
var firstP = document.createElement("p");
var chocolateText = document.createTextNode("chocolate");
var secondDiv = document.createElement("div");
secondDiv.id = "drinks";
var secondSpan = document.createElement("span");
secondSpan.id = "juice";
var secondP = document.createElement("p");
var koolText = document.createTextNode("kool-aid");

firstP.appendChild(chocolateText);
firstSpan.appendChild(firstP);
firstDiv.appendChild(firstSpan);
document.body.appendChild(firstDiv);

secondP.appendChild(koolText);
secondSpan.appendChild(secondP);
secondDiv.appendChild(secondSpan);
document.body.appendChild(secondDiv);