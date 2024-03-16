import Link from './components/Link/Link';
import Button from './components/Button/Button';

import './App.css';

function App() {
  return (
    <>
      <Link href='/' type='body'>
        Link
      </Link>
      <Button type='body' onClick={() => {}}>
        Button
      </Button>
    </>
  );
}

export default App;
