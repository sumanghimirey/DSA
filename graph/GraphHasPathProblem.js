//write a function , haspath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dist)
// the function should return a boolean indication wether or not there exists a directed path between the source and destination nodes.


//depth first solution 
const hasPath = (graph, src, dist) => {
    if(src === dist) return true;
    for (let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dist) === true) {
            return true
        }

    }
    return false
}
// solution 2
const hasPathIteratebly = (graph, src, dist) => {
    if(src === dist) return true;
    for (let neighbor of graph[src]) {
        if(dist === neighbor) {
            return true;
        }
    }

    return false;
} 

// br

const graph  = {
    a: ['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}


console.log(hasPathIteratebly(graph,'a','b')) // return true