
// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddServices from './component/AddServices';
import AssignCounter from './component/AssignCounter';
import ManagerHomePage from './component/ManagerHomePage';
import CELogin from './component/CELogin';
import HomePage from './component/HomePage';
import TokenGeneration from './component/TokenGeneration';
import MLogin from './component/MLogin';
import CounterExecutive from './component/CounterExecutive';
import ExecutiveState from './context/CounterExecutive/ExecutiveState';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/ManagerHomePage', element: <ManagerHomePage /> },
  { path: '/addServices', element: <AddServices /> },
  { path: '/assignCounter', element: <AssignCounter /> },
  { path: '/CELogin', element: <CELogin /> },
  { path: '/MLogin', element: <MLogin /> },
  { path: '/tokenGeneration', element: <TokenGeneration /> },
  { path: '/CounterExecutive', element: <CounterExecutive /> }  
])

function App() {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <ExecutiveState>
          <RouterProvider router={router} />        
      </ExecutiveState>
    </div>
  );
}

export default App;
