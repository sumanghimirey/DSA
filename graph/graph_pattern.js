// graph = node + edges 
// a->c
//b->e
// a

const depthFirtstPrint = (graph, source) => {
    const  stack = [source]
        let depthFirstResult = []
    while (stack.length > 0) {
        let current = stack.pop()
        depthFirstResult.push(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    return depthFirstResult
};




// console.log(depthFirtstPrint(graph, 'a')) //abdfce 

const breadhFirstPrinth = (graph, source) => {
    const queue = [source]
    let breadhFirst = []
    while (queue.length > 0) {
        let current = queue.shift()
        breadhFirst.push(current)
        for (let neighbor of graph[current]){
            queue.push(neighbor)
        } 
    }
    return breadhFirst
}


const graph  = {
    a: ['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}
console.log(breadhFirstPrinth(graph, 'a')) 
