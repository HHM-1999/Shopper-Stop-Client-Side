
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className="App">
      <div className=" mx-auto">
        <RouterProvider router={router}></RouterProvider>

      </div>
    </div>
  );
}

export default App;
