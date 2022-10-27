//write a function , linkeDListValues, that takes in the heaD of a linked list as an argument. 
//The function should return an array containing all values of the nodes in the linked list.

///example a->b->c->d> = d->c->b->a
class Node {
    constructor(value){
        this.value = value
        this.next = null
    } 
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b;
b.next = c;
c.next = d;

const linkedListValues = (head) => {
    let prev = null;
    while(head !== null) {
       const next = head.next;
        head.next = prev
        prev = head.value
        head = next
        return prev
    }
   
}

console.log(linkedListValues(a))