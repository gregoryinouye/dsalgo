/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.numItems = 0;
    this.minimum = undefined;
    // this.minKeys = [];
    this.list = {};

  // add an item to the top of the stack
    this.push = function(value) {
      this.minimum = this.minimum ? Math.min(this.minimum, value) : value;
      this.numItems++;
      this.list[this.numItems] = value;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (this.numItems === 0) {
        return 'no items in stack';
      }
      let popped = this.list[this.numItems];
      delete this.list[this.numItems];
      this.numItems--;
      // update min
      if (this.minimum === popped) {
        this.minimum = undefined;
      }
      return popped;
    };

  // return the number of items in the stack
    this.size = function() {
      return this.numItems;
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.minimum;
    };
  };

