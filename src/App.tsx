import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomeWaiter from './components/HomeWaiter';
import { PrivateRoutes } from './utils/PrivateRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomeWaiter />} path='/home'/>
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
