import React, { useEffect, useState } from 'react'
import bfsGenerator, { graph } from '../utils/bfs'

const BFS = () => {
    const [bfs, setBfs] = useState({
        data: ``,
        bfsInstance: {}
    })
    useEffect(() => {
        const bfsInstance = bfsGenerator(graph, 'A', 'G')
        setBfs({ ...bfs, bfsMethod: bfsInstance })
    }, [])
    const handleClick = (e) => {
        e.preventDefault()
        console.log(bfs.bfsMethod.next().value)
    }

    return (
        <div>
            <button
                onClick={handleClick}
            >
                Click Me
            </button>
        </div>
    )
}

export default BFS
