
export default function Sidebar () {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  
  
  return (
    <aside className='flex flex-col !w-1/4'>
      <div className="description">드래그 하여 인물을 추가해보세요.</div>
      <div className="break-keep description">상하좌우 방향에서 선을 드래그 앤 드랍하면 관계가 이어집니다.</div>
      <div className="description">점이나 선을 클릭한 후 백스페이스를 누르면 지워집니다.</div>
      {/* <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div> */}
      <div className="flex justify-center">
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'custom')} draggable>
          드래그 인물 추가
        </div>
      </div>
      {/* TODO event, 노드를 클릭시 노드명을 바꿀수 있게 하거나 하는 방법들을 갈구. */}
      {/* <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div> */}
    </aside>
  );
};
