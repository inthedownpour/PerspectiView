import { useState } from "react";
import { Handle, Position} from "reactflow";

const users = [
  {
    id: 1,
    name: "도지",
    tag: ["doge", "currency", "meme"],
    url: "data:image/jpeg;base64,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",
    description: "왈왈",
  },
  {
    id: 2,
    name: "페페",
    tag: ["pepe", "sad", "meme"],
    url: "data:image/jpeg;base64,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",
    description: "SAD",
  },
];

function OneNode () {
  
  return (
    <div></div>
  )
}


export default function CustomNode({ isConnectable }) {
  const [labelInput, setLabelInput] = useState("");
  const handleLabelInputChange = (event) => {
    setLabelInput(event.target.value);
  };

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  return (
    users.map((user) => (
    <>
      <div className="flex items-center justify-center bg-transparent rounded-full">
        <div className="flex flex-col items-center justify-center w-28 h-28">
          <img src={user.url} key={user.id} className="!w-28 !h-28 rounded-full" alt="" />
          <div className="w=max h-max flex flex-col items-center">
            <input
              className="flex items-center justify-center text-sm text-center bg-transparent !p-0 !w-28 z-10"
              type="text"
              placeholder="Enter label"
              onChange={handleLabelInputChange}
              id={`${getId()}`}
              defaultValue={user.name}
              key={user.id}
            />
          </div>
          <div className="flex justify-center">
            <Handle
              type="target"
              position={Position.Bottom}
              id="a"
              isConnectable={isConnectable}
              className="!left-10 hover:!bg-red-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="source"
              position={Position.Bottom}
              id="b"
              isConnectable={isConnectable}
              className="!left-14 hover:!bg-blue-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="target"
              position={Position.Right}
              id="c"
              isConnectable={isConnectable}
              className="!top-14 hover:!bg-red-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="source"
              position={Position.Right}
              id="d"
              isConnectable={isConnectable}
              className="!top-10 hover:!bg-blue-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="source"
              position={Position.Left}
              id="e"
              isConnectable={isConnectable}
              className="!top-14 hover:!bg-blue-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="target"
              position={Position.Left}
              id="f"
              isConnectable={isConnectable}
              className="!top-10 hover:!bg-red-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="source"
              position={Position.Top}
              id="g"
              isConnectable={isConnectable}
              className="!left-10 hover:!bg-blue-500 !bg-transparent !border-0 !w-3 !h-3"
            />
            <Handle
              type="target"
              position={Position.Top}
              id="h"
              isConnectable={isConnectable}
              className="!left-14 hover:!bg-red-500 !bg-transparent !border-0 !w-3 !h-3"
            />
          </div>
        </div>
      </div>
    </>
    ))
  );
}
