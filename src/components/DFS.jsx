import React, { useEffect } from 'react'
import Mermaid from './Mermaid'

const DFS = () => {
    useEffect(() => {

    }, [])

    return (
        <div id="myDiagramDiv">
            <Diagram />
        </div>
    )
}

const Diagram = () => {
    return (
      <Mermaid chart={`
          %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#df92c1'}}}%%
          graph TD;
          START-->| *** |A;
          A-->B;
          A-->C;
          A-->D;
          C-->E;
          C-->F;
          F-->G;
          F-->H;
          F-->I;
          D-->M;
          D-->N;
          D-->O;
          B-->J;
          B-->K;
          B-->L;
          `}/>
    )
  }

export default DFS
