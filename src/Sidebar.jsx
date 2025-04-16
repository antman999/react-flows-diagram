export default function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
    console.log(`Dragging ${nodeType}`);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Elements</div>
      <div className="sidebar-elements">
        <div
          className="sidebar-element"
          onDragStart={(event) => onDragStart(event, "input")}
          draggable
        >
          Input Node
        </div>
        <div
          className="sidebar-element"
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          Default Node
        </div>
        <div
          className="sidebar-element"
          onDragStart={(event) => onDragStart(event, "output")}
          draggable
        >
          Output Node
        </div>
        <div
          className="sidebar-element"
          onDragStart={(event) => onDragStart(event, "textUpdater")}
          draggable
        >
          Text Node
        </div>
        <button
          className="sidebar-button"
          onClick={() => console.log("Add Shape clicked")}
        >
          Add Shape
        </button>
        <button
          className="sidebar-button"
          onClick={() => console.log("Add Text clicked")}
        >
          Add Text
        </button>
      </div>
    </aside>
  );
}
