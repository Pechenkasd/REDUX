import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfo from './components/UserInfo'
import GetUsersCards from './page/GetUsersCards'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<GetUsersCards />} />
        <Route path="users/:id" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
