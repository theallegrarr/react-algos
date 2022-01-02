import Mermaid from "./Mermaid"

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
          E-->W;
          E-->X;
          C-->F;
          F-->G;
          F-->H;
          D-->M;
          D-->N;
          D-->O;
          B-->J;
          B-->K;
          B-->L;
          `}/>
    )
}

export default Diagram