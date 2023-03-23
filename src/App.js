import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddServices from './component/AddServices';
import AssignCounter from './component/AssignCounter';
import ManagerHomePage from './component/ManagerHomePage';
import TokenGeneration from './component/TokenGeneration';

const router = createBrowserRouter([
  {path:'/',element: ''},
  {path:'/addServices',element:<AddServices />},
  {path:'/assignCounter',element:<AssignCounter />},
  {path:'/tokenGeneration',element:<TokenGeneration />},
  
])

function App() {
  return (
    <div style={{ paddingBottom:"10px" }}>
      <ManagerHomePage />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
