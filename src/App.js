
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddServices from './component/AddServices';
import AssignCounter from './component/AssignCounter';
import ManagerHomePage from './component/ManagerHomePage';
import Login from './component/Login';
import HomePage from './component/HomePage';
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
