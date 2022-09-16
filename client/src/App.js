import Main from './views/Main';
import Detail from './views/Detail';
import New from './views/New';
import Edit from './views/Edit';
import './App.css';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pets/:id" element={<Detail />} />
        <Route path="/pets/:id/edit" element={<Edit />} />
        <Route path="/pets/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
