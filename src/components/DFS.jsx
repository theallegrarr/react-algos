import React from 'react'
import Mermaid from './Mermaid'

const DFS = () => {

    return (
        <div id="myDiagramDiv">
            <_Component />
        </div>
    )
}

const _Component = () => {
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
