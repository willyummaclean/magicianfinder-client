
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/auth/login.jsx';
import { Authorized } from './components/Authorized.jsx';
import { ApplicationViews } from './components/ApplicationViews.jsx';
import { Register } from './components/auth/register.jsx';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />} />
      <Route 
        path='*'
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
        />
    </Routes>
  );
}

export default App;
