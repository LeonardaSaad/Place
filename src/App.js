
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Sidebar from './Components/Sidebar';
import Notes from './Pages/Notes';
import Dashboard from './Pages/Dashboard';
import Todo from './Pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
