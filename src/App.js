import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MoviesHome from "./components/MoviesHome";
import Profile from "./components/Profile";
import Favourites from "./components/Favourites";
import LogOut from './components/LogOut'
import UserName from "./components/UserName";
import PhoneNumber from "./components/PhoneNumber";
import Password from "./components/Password";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<MoviesHome />} />
          <Route path="/home/profile" element={<Profile />}/>
            <Route path="/home/profile/userName" element={<UserName/>} />
            <Route path="/home/profile/phoneNumber" element={<PhoneNumber/>} />
            <Route path="/home/profile/password" element={<Password/>} />
          
         
          <Route path="/home/fav" element={<Favourites />} />
          <Route path="/home/logout" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
