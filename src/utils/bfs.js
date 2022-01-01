const bfs = (graph, start, end) => {
    // Create a new queue and enqueue the start node
    const queue = [start];
    // Create a set to store visited nodes
    const visited = {};
    // Create a set to store the path
    visited[start] = true;

    while (queue.length) {
        // Dequeue a node and store it
        const node = queue.shift();
        console.log("current node: ",node, "\n",
                    "queue: ", queue, "\n",
                    "visited: ", visited, "\n",
                    "neigbours: ", graph[node]);

        // If the node is the end, we're done
        if (node === end) return true;
        // Otherwise, enqueue and mark as visited
        const neighbors = graph[node];

        for (let i = 0; i < neighbors.length; i++) {
            // If we haven't visited this node, add it to the queue
            const neighbor = neighbors[i];
            // If we haven't visited this node, add it to the queue
            if (!visited[neighbor]) {
                // Mark as visited
                visited[neighbor] = true;
                // Enqueue
                queue.push(neighbor);
            }
        }
    }
    return false;
}
graph = {
    'A': ['B', 'C', 'E'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['A', 'B', 'D'],
    'F': ['C'],
    'G': ['C'],
}

bfs(graph, 'A', 'E');