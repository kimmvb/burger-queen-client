import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomeWaiter from './components/HomeWaiter';
import { PrivateRoutes, AnonymousRoutes } from './utils/PrivateRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomeWaiter />} path="/" />
          </Route>
          <Route element={<AnonymousRoutes />}>
            <Route element={<Login />} path="/login" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
