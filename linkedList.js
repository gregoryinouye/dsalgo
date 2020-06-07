/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.tail = null;
  this.head = null;
};

LinkedList.prototype.addToTail = function(value) {
  const node = this.makeNode(value);
  if (this.head === null) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  let removed;
  if (this.head === null) {
    removed = null;
  } else if (this.head.next === null) {
    removed = this.head.value;
    this.head = null;
    this.tail = null;
  } else {
    removed = this.head.value;
    this.head = this.head.next;
  }
  return removed;
};

LinkedList.prototype.contains = function(value) {
  let current = this.head;
  while (current !== null) {
    if (current.value === value) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  return { value: value, next: null };
};
