import { Board } from './components/Board';
import { useContributions } from './hooks/useContributions';

function App() {
  const [contributions] = useContributions('teobaj', '2022');
  console.log(contributions);
  return (
    <>
      <Board />
    </>
  );
}

export default App;
