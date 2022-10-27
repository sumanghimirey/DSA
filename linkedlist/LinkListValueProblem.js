//write a function , linkeDListValues, that takes in the heaD of a linked list as an argument. 
//The function should return an array containing all values of the nodes in the linked list.

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


const LinkedListValues = (head) => {
    const values = []
    while (head !== null) {
        values.push(head.value)
        head = head.next
    }

    return values
}

console.log(LinkedListValues(a))