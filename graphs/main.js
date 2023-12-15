/**
 * @name - Graphs
 *
    Graphs are really good when it comes to building relationships, but they are really hard to scale. In most cases you need a big company to actually use graphs when working on an application.
 */

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        // undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() {
        console.log(this.adjacentList)
    }
}

const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();