const dfs = (graph, start, end) => {
    // Create a new stack and enqueue the start node
    const stack = [start];
    // Create a set to store visited nodes
    const visited = {};
    // Create a set to store the path
    visited[start] = true;

    while (stack.length) {
        // Dequeue a node and store it
        const node = stack.pop();
        console.log("current node: ",node, "\n",
                    "stack: ", stack, "\n",
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
                stack.push(neighbor);
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

dfs(graph, 'A', 'D');