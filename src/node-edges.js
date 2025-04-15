export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input" },
    position: { x: 0, y: 0 },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "2",
    data: { label: "node 2" },
    position: { x: 0, y: 100 },
    style: { backgroundColor: "#ff0072", color: "white" },
  },
  {
    id: "2a",
    data: { label: "node 2a" },
    position: { x: 0, y: 200 },
    style: { backgroundColor: "#6865A5", color: "white" },
    type: "output",
  },
  {
    id: "2b",
    data: { label: "node 2b" },
    position: { x: 0, y: 300 },
    style: { backgroundColor: "#6865A5", color: "white" },
    type: "output",
  },
  {
    id: "2c",
    data: { label: "node 2c" },
    position: { x: 0, y: 400 },
    style: { backgroundColor: "#ff0072", color: "white" },
  },
  {
    id: "2d",
    data: { label: "node 2d" },
    position: { x: 0, y: 500 },
    style: { backgroundColor: "#6865A5", color: "white" },
    type: "output",
  },
  {
    id: "3",
    data: { label: "node 3" },
    position: { x: 200, y: 100 },
    style: { backgroundColor: "#ff0072", color: "white" },
  },
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", animated: false },
  { id: "e13", source: "1", target: "3", animated: false },
  { id: "e22a", source: "2", target: "2a", animated: true },
  { id: "e22b", source: "2", target: "2b", animated: true },
  { id: "e22c", source: "2", target: "2c", animated: true },
  { id: "e2c2d", source: "2c", target: "2d", animated: true },
];
