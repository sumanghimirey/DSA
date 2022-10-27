//write a function , zipperLists, that takes in the head of two linked lists as arguments. 
// The function should zipper the two lists together into single linked list by alternating nods.
//If one of the  linked lists is longer than the other, the resulting list should terminate
//with the renaminig nodes. The function should return the head of the zippered linked lists.

class Node1 {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
const a = new Node1('a')
const b = new Node1('b')
const c = new Node1('c')
const d = new Node1('d')
a.next = b;
b.next = c;
c.next = d;


class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
const e = new Node2('e')
const f = new Node2('f')
const g = new Node2('g')
const h = new Node2('h')
e.next = f;
f.next = g;
g.next = h;

const zipperList = (head1, head2) => {

let counter = 0;
let tail = head1;

let current1 = head1.next
let current2 = head2
while(current1!==null && current2 !==null) {
    
    if(counter%2 == 0) {
        tail.next = current2
        current2 = current2.next
    }
    else {
        tail.next = current1
        current1 = current1.next
    }
    tail = tail.next
    counter += 1
}

if (current1 !== null) tail.next = current1
if (current2 !== null) tail.next = current2

return tail.value;

}

console.log(zipperList(a,e))