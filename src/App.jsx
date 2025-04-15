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
import { initialNodes, initialEdges } from "./node-edges";
import { TextUpdaterNode } from "./nodes/TextUpdaterNode";

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

  const nodeTypes = React.useMemo(
    () => ({
      textUpdater: TextUpdaterNode,
    }),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
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
