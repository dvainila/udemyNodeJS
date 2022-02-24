import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import { UserContext } from "./UserContext";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import Navbar from "./components/layout/navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import "./App.css";

function App() {
   const [user, setUser] = useState(null);
   return (
      <BrowserRouter>
         <UserContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />
               <Route path="/chat/:room_id/:room_name" element={<Chat />} />
            </Routes>
         </UserContext.Provider>
      </BrowserRouter>
   );
}

export default App;
