/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - In the gobal scope "this" will be the window/console object.
* 2. Implicit Binding - When a function is called using a dot(.) the object before dot is "This".
* 3. New Binding -  If a constructor function is used "This" refers to specific instance of created object that it returns.
* 4. Explicit Binding - If javascript call \ method used then "This" is explicitly defined.
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function book(title) {
    console.log(this);
    return title;
  }
  
  book("the secret");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding