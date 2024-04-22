
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    newNode.next = null;
    if (this.head) {
      let currNode = this.head;
      let i = 0;
      while (i < this.length) {
        if (currNode.next) {
          currNode = currNode.next;
          i++;
        } else {
          currNode.next = newNode;
          this.tail = newNode;
        }
      }
    } else if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail !== this.head) {
      const val = this.tail.val;
      let currNode = this.head;
      let i = 0;
      while (i < this.length) {
        if (currNode.next.val !== val) {
          currNode = currNode.next;
          i++;
        } else {
          currNode.next = null
          this.length--;
          if (this.length === 1) {
            this.tail = this.head;
          }
        }
        return val;
      }
    } else if (this.length === 1) {
      const val = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    } else {
      throw new Error('List is empty')
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head !== this.tail) {
      const val = this.head.val;
      let second = this.head.next;
      this.head = second;
      this.length--;
      return val;
    } else if (this.head === this.tail) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    } else {
      throw new Error('List is empty')
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length > idx && idx !== 0) {
      let currNode = this.head;
      let i = 0;
      while (i < idx) {
        currNode = currNode.next;
        i++;
      }
      return currNode.val;
    } else if (idx === 0) {
      return this.head.val;
    } else {
      throw new Error('Index is invalid')
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length > idx) {
      let currNode = this.head;
      let i = 0;
      while (i < idx) {
        currNode = currNode.next;
        i++;
      }
      currNode.val = val;
    } else {
      throw new Error('Index is invalid')
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let currNode = this.head;
    if(idx > 0 && idx < (this.length-1)){
      let i=0;
      while(i < (idx-1)){
        currNode = currNode.next;
        i++;
      }
      newNode.next = currNode.next;
      currNode.next = newNode;
      this.length++;
    } else if (idx === 0){
      this.unshift(val)
    } else if (idx === this.length) {
      this.push(val)
    } else {
      throw new Error('Index is invalid')
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > 0 && idx < this.length - 1) {
      let currNode = this.head;
      let i = 0;
      while (i < idx) {
        currNode = currNode.next;
        i++;
      }
      let val = currNode.next.val;
      currNode.next.next = currNode.next;
      this.length--;
      return val;
    } else if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      this.pop();
    } else {
      throw new Error('Index is invalid')
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head) {
      let currNode = this.head;
      let total = 0;
      let i = 0;
      while (i < this.length) {
        total += currNode.val;
        currNode = currNode.next;
        i++;
      }
      const listAve = total / this.length;
      return listAve;
    } else {
      return 0;
    }
  }




}


module.exports = LinkedList;
