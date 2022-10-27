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

//Printing Link list method 1 using while loop 
const prinLinkList = (head) => {
    let current = head;
    while ( current !== null) {
        console.log(current.value)
        current = current.next
    }
}
//printing link list method 2 using recursively 
const printLinkListRecursively = (head) => {
    if(head == null) return
    console.log(head.value)
    printLinkListRecursively(head.next)
}
prinLinkList(a)
