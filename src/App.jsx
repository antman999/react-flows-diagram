import "./App.css";
import React from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

/**
 * The React flow component must be wrapped in a element with a width and height
 * that spans the entire viewport.
 *
 * initialNodes/nodes - are in simple terms the boxes we want to render on app load
 * initialEdges/edges - are the connections between the nodes like in a graph
 *
 * To make the nodes and edges interactive we need to add callbacks for the following
 * - Callback for WHAT to do when NODES change
 * - Callback for WHAT to do when EDGE change
 * - Callback for WHAT to Ddo when NODES are CONNECTED
 * We can use the hooks provided (useNodesState, useEdgesState, addEdge)
 *  */
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = React.useCallback(
    (params) => setEdges((edge) => addEdge(params, edge)),
    [setEdges]
  );

  console.log(onConnect, "onConnect");
  console.log(nodes, "nodes");
  console.log(edges, "edges");
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default App;
