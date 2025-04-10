import "./App.css";
import React from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
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
  {
    id: "1",
    type: "input",
    position: { x: 250, y: 25 },
    data: { label: "Input node" },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "2",
    position: { x: 100, y: 125 },
    data: { label: <div>Default Node</div> },
    style: { backgroundColor: "#ff0072", color: "white" },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output node" },
    position: { x: 250, y: 250 },
    style: { backgroundColor: "#6865A5", color: "white" },
  },
];

const nodeColor = (node) => {
  switch (node.type) {
    case "input":
      return "#6ede87";
    case "output":
      return "#6865A5";
    default:
      return "#ff0072";
  }
};

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

function App() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onNodesChange = React.useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = React.useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = React.useCallback(
    (params) =>
      setEdges((edge) => addEdge({ ...params, animated: true }, edge)),
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
        fitView
      >
        <Controls />
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default App;
