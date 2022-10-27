//write a function , undirectedPath ,that takes in an array of edges for an undirected graph and two nodes(nodeA, NodeB).
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const edges = [
    ['i', 'j'],
    ['k','l'],
    ['m', 'k'],
    ['k','l'],
    ['o', 'n']
]

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraphFromArray(edges);
    if(nodeA === nodeB) return true; 

   for( let neighbor of graph[nodeA]) {
        if (neighbor === nodeB) return true
   }

   return false


}

const buildGraphFromArray = (edges) => {
    const graph = {}
    for(let edge of edges) {
        const [a,b] = edge
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        //undirected graph
        graph[b].push(a)
    }
    return graph;
}

console.log(undirectedPath(edges,'k','l'))