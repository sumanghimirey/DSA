class Node {
    cosntructor(value) {
        this. value = value
        this.left = null
        this.right = null 
    }
}

const a  = Node('a')
const b  = Node('b')
const c  = Node('c')
const d  = Node('d')
const e  = Node('e')
const f  = Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;



