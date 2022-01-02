import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useDispatch } from 'react-redux'

import { moveToNext } from '../redux/actions/bfs'
import Diagram from './Diagram'
import bfs, { graph } from '../utils/bfs'

const BFS = ({ traverse }) => {
    const [_bfs, setBfs] = useState(null)
    let dispatch = useDispatch()

    // initialize bfs iterator when component mounts
    useEffect(() => {
        const bfsInstance = bfs(graph, 'A', 'G')
        setBfs(bfsInstance)
    }, [])

    // update UI everytime redux store updates
    useEffect(() => {
        console.log(traverse.current)
    }, [traverse.current])

    // play iteration forward
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(moveToNext(_bfs))
    }

    return (
        <div id="myDiagramDiv">
            <Diagram />
            <button
                onClick={handleClick}
            >
                Next
            </button>
            <p>
                {traverse.steps}
            </p>
        </div>
    )
}

const structuredSelector = createStructuredSelector({
    traverse: state => state.traverse,
})

export default connect(structuredSelector)(BFS)
