//This whole excersise still confuses me I need help on it
/*
There are many more array 
Preview: Docs Loading link description
methods
 than just 
Preview: Docs Adds one or more elements to the end of the array and returns the new length.
.push()
 and 
Preview: Docs Removes the last element of an array, decrements the array length, and returns the value that it removed.
.pop()
. You can read about these array methods on the Docs entry for 
Preview: Docs Arrays are lists of ordered, stored data that can be of any data type.
JavaScript Arrays
.

.pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check the Docs to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: 
Preview: Docs Elements of an array are converted to strings and concatenated together, returning the resulting string.
.join()
, .slice(), 
Preview: Docs Modifies an array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.
.splice()
, 
Preview: Docs Removes and returns the first element of the array. All subsequent elements will shift down one place.
.shift()
, 
Preview: Docs Adds one or more elements to beginning of array and returns new length.
.unshift()
, and .concat() amongst many others. Using these built-in methods makes it easier to do some common tasks when working with arrays.

Below, we will explore some methods that we have not learned yet. We will use these methods to edit a grocery list. As you complete the steps, you can consult the 
Preview: Docs JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end. While HTML and CSS are languages that give structure and colors to web pages, JavaScript makes them interactive and adds functionality.
Codecademy Docs
to learn what each method does!

Instructions
Checkpoint 1 Passed
1.
Use the .shift() method to remove the first item from the array groceryList.

Log the new groceryList to the console.

Read about 
Preview: Docs Removes and returns the first element of the array. All subsequent elements will shift down one place.
.shift() in Docs
.

Checkpoint 2 Passed
2.
Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.

After calling .unshift() on groceryList, log groceryList to the console.

You may wish to delete the console.log() statement from the previous step.

Read about 
Preview: Docs Adds one or more elements to beginning of array and returns new length.
.unshift() in Docs
.

Checkpoint 3 Passed
3.
You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.

Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.

Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.

Read about 
Preview: Docs Returns a shallow copy of a part of an array. It contains references to the sliced elements in the original array, not the elements themselves.
.slice() in Docs
.

Checkpoint 4 Passed
4.
After calling .slice() on groceryList, log the grocery list to the console one more time.

Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.

*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

groceryList.slice();

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

