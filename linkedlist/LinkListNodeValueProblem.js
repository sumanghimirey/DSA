//Write a function, getNodeValue, that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next = b;
b.next = c;
c.next = d;

// a->b->c->d->null
const getNodeValue = (head, index) => {
    let count = 0;
    while(head !== null) {
        if (count == index) return head.value;
        count += 1;
        head = head.next
    }
    return null;
}


console.log(getNodeValue(a,4))

