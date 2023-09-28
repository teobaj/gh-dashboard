import { useState } from 'react';
import { Board } from './components/Board';
import { TopContributions } from './components/TopContributions';

function App() {
  const [view, setView] = useState<boolean>(false);
  return (
    <div className="h-screen w-screen p-4 bg-zinc-800 flex flex-col items-center gap-1">
      <Board />
      <button onClick={() => setView((state) => !state)}>click</button>
      {view && <TopContributions />}
    </div>
  );
}

export default App;
