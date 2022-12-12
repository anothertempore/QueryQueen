export default function App() {
  return (
    <div className="h-full">
      <div className="flex h-full">
        <div className="w-40">
          <div className="h-10 text-right flex draggable-area border-b-2 border-indigo-500">
            Arrow
          </div>
        </div>
        <div className="draggable-area border-r-2 border-indigo-500" />
        <div className="flex-1">
          <div className="h-10 text-right flex draggable-area border-b-2 border-indigo-500">
            Arrow
          </div>
        </div>
      </div>
    </div>
  );
}
