//Write a function , LinklistFind, that takes in the head of a linked list and target value.
//The function should return a boolean incdication wether or not the linked list contains the target

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
a.next = b;
b.next = c;
c.next = d;

const LinkListFind = (head, target) => {
    let found = false;

    while (head !== null) {
        if (head.value == target) {
             found = true 
        } 
            head = head.next
    }

    return found;
}

console.log(LinkListFind(a,'G'))

