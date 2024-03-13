import Link from './components/Link/Link';
import Button from './components/Button/Button';

import './App.css';

function App() {
  return (
    <>
      <Link href='/' type='BODY'>
        Link
      </Link>
      <Button type='BODY' onClick={() => {}}>
        Button
      </Button>
    </>
  );
}

export default App;
